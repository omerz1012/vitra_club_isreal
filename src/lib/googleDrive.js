const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY
const ROOT_FOLDER_ID = '1-2KkLinrsLZCIpfaZ-IiqwDpkeobOY33'
const DRIVE_FILES_ENDPOINT = 'https://www.googleapis.com/drive/v3/files'

function assertApiKey() {
  if (!API_KEY) {
    throw new Error(
      'חסר מפתח API של Google Drive. יש להגדיר VITE_GOOGLE_DRIVE_API_KEY בקובץ .env'
    )
  }
}

// Fetch every result page for a given Drive `files.list` query.
async function listAllFiles({ q, fields }) {
  assertApiKey()
  const files = []
  let pageToken

  do {
    const params = new URLSearchParams({
      key: API_KEY,
      q,
      fields: `nextPageToken, files(${fields})`,
      pageSize: '1000',
      orderBy: 'name',
    })
    if (pageToken) params.set('pageToken', pageToken)

    const res = await fetch(`${DRIVE_FILES_ENDPOINT}?${params.toString()}`)
    if (!res.ok) {
      const body = await res.json().catch(() => null)
      const reason = body?.error?.message || res.statusText
      throw new Error(`שגיאה בטעינה מ-Google Drive (${res.status}): ${reason}`)
    }
    const data = await res.json()
    files.push(...(data.files || []))
    pageToken = data.nextPageToken
  } while (pageToken)

  return files
}

// List subfolders directly inside the root gallery folder.
export async function listGalleryFolders() {
  return listAllFiles({
    q: `'${ROOT_FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'id, name',
  })
}

// List image files directly inside a given subfolder.
export async function listFolderImages(folderId) {
  const files = await listAllFiles({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    fields: 'id, name, mimeType, thumbnailLink',
  })
  return files.filter((f) => f.thumbnailLink)
}

// Google appends a `=s220` size suffix to thumbnailLink; swap it for a
// larger size (still a capped-resolution Google-generated thumbnail, not
// the original file).
export function resizeThumbnail(thumbnailLink, size = 1000) {
  if (!thumbnailLink) return thumbnailLink
  return thumbnailLink.replace(/=s\d+$/, `=s${size}`)
}

// Convenience: subfolders + first image (alphabetically) as cover.
export async function listGalleriesWithCover() {
  const folders = await listGalleryFolders()
  return Promise.all(
    folders.map(async (folder) => {
      const images = await listFolderImages(folder.id)
      return {
        id: folder.id,
        name: folder.name,
        coverUrl: images[0] ? resizeThumbnail(images[0].thumbnailLink, 500) : null,
        photoCount: images.length,
      }
    })
  )
}
