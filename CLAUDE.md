# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A Hebrew (RTL), single-page marketing/info site for an Israeli Suzuki Grand Vitara 4x4 owners' club. Plain Vite + React SPA, no backend — all content is either hardcoded in JSX or fetched client-side from a public Google Drive folder for the photo gallery.

## Commands

- `npm run dev` — start Vite dev server (port from `PORT` env var, default 5173, `strictPort`)
- `npm run build` — production build
- `npm run preview` — preview the production build
- No test suite, linter, or type checker is configured.

## Architecture

- **Routing**: [src/App.jsx](src/App.jsx) defines every route in one flat `<Routes>` block (no nested/layout routes). `Navbar` renders on every page outside the `Routes`. Adding a page means: create `src/pages/XPage.jsx` + matching `.css`, then add an entry to `App.jsx` and usually a card in [src/components/InfoDatabase.jsx](src/components/InfoDatabase.jsx) (the homepage grid linking to all info categories) and/or [src/components/Navbar.jsx](src/components/Navbar.jsx).
- **Content pages are static data arrays**: most `src/pages/*Page.jsx` files (oils, bulbs, parts numbers, coupons, radio frequencies, etc.) are just a hardcoded JS array of objects rendered into cards/tables — there is no CMS or JSON data layer. To update club info (oil specs, part numbers, coupon codes...), edit the array at the top of the relevant page file directly.
- **Styling**: one CSS file per component/page, imported directly into its `.jsx` file (e.g. `Navbar.jsx` + `Navbar.css`). No CSS-in-JS, no Tailwind, no shared design-system file — shared tokens live in [src/index.css](src/index.css). Site is RTL (`dir="rtl"` set in [index.html](index.html) and repeated on page-level containers).
- **Google Drive gallery**: [src/lib/googleDrive.js](src/lib/googleDrive.js) hits the Drive v3 `files.list` REST API directly with a public API key (`VITE_GOOGLE_DRIVE_API_KEY`) to list subfolders/images under a hardcoded `ROOT_FOLDER_ID`. [src/hooks/useDriveGallery.js](src/hooks/useDriveGallery.js) wraps this in `useGalleryList`/`useGalleryPhotos` hooks (loading/success/error state). Consumed by `GalleryPage` (album grid) and `GalleryDetailPage` (photos in one album, via `Lightbox`). This is the only network-dependent feature in the app — everything else is static.
- **AI search / suggestions**: [src/components/AISearch.jsx](src/components/AISearch.jsx) and the AI-notebook links in `InfoDatabase.jsx` are UI-only; they link out to an external NotebookLM notebook rather than calling any API from this repo.
- **Modals**: `JoinModal` (club signup) and `DisclaimerModal` are self-contained overlay components toggled by local `useState` in their parent (`Navbar`, `App`), not a global modal/portal system.
- **Deployment**: Vercel. [vercel.json](vercel.json) rewrites all paths to `/index.html` so client-side routing works on refresh/deep links.
- **Env**: only `VITE_GOOGLE_DRIVE_API_KEY` is required (see [.env.example](.env.example)); it should be a browser-restricted Drive API key, not a secret key.
