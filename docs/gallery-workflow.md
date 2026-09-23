# AIM Gallery Workflow

The site has a curated photo gallery at `/gallery`.

Airtable is for the events calendar and event flyer attachments. Do not use the
events calendar base as the public photo gallery system.

## Current Photo Batches

The current static albums are stored in:

- `public/assets/gallery/luna-jamz`
- `public/assets/gallery/larry-house`

Each album has:

- `full`: web-sized images for the click-through viewer
- `thumb`: smaller images for the gallery grid

The page data is in `src/data/gallery.ts`.

## Recommended Hands-Off Future Workflow

Use Cloudinary or another media-library service for public gallery submissions.
Keep event data and event flyers in Airtable.

Recommended Cloudinary setup:

- Create an AIM Cloudinary account or product environment.
- Create one folder for public submissions, such as `aim/submissions`.
- Create a restricted unsigned upload preset for the website upload flow.
- Restrict allowed formats to common images, such as `jpg`, `jpeg`, `png`, and
  `webp`.
- Route uploads into a review folder first.
- Have one organization person approve/move selected photos into a public
  gallery folder.

This gives AIM a shareable upload path without giving the public access to the
website repo or the events Airtable base.

## Website Hooks

The gallery page supports optional generic links:

- `VITE_GALLERY_UPLOAD_URL`: public photo upload link
- `VITE_GALLERY_EMBED_URL`: optional public gallery embed URL

After those are set and the site is rebuilt:

- The `/gallery` page will show a `Submit Photos` button.
- If an embed URL is provided, the embedded public gallery appears below the
  curated albums.

## Moderation

Do not publish public uploads automatically unless the upload service has a
good moderation workflow. The safest process is:

1. People submit photos through the shared upload link.
2. A trusted AIM person reviews the submissions.
3. Approved photos are moved into the public gallery collection.

That keeps the site hands-off for Garrett while still preventing spam, bad
images, or accidental private photos from appearing publicly.
