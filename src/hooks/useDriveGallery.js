import { useEffect, useState } from 'react'
import { listGalleriesWithCover, listFolderImages, resizeThumbnail } from '../lib/googleDrive'

export function useGalleryList() {
  const [state, setState] = useState({ status: 'loading', galleries: [], error: null })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading', galleries: [], error: null })
    listGalleriesWithCover()
      .then((galleries) => {
        if (!cancelled) setState({ status: 'success', galleries, error: null })
      })
      .catch((error) => {
        if (!cancelled) setState({ status: 'error', galleries: [], error })
      })
    return () => { cancelled = true }
  }, [])

  return state
}

export function useGalleryPhotos(folderId) {
  const [state, setState] = useState({ status: 'loading', photos: [], error: null })

  useEffect(() => {
    if (!folderId) return
    let cancelled = false
    setState({ status: 'loading', photos: [], error: null })
    listFolderImages(folderId)
      .then((files) => {
        if (cancelled) return
        const photos = files.map((f) => ({
          id: f.id,
          name: f.name,
          url: resizeThumbnail(f.thumbnailLink, 1600),
        }))
        setState({ status: 'success', photos, error: null })
      })
      .catch((error) => {
        if (cancelled) return
        setState({ status: 'error', photos: [], error })
      })
    return () => { cancelled = true }
  }, [folderId])

  return state
}
