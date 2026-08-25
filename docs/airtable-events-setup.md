# AIM Airtable Events Setup

Use one Airtable base named `AIM Website`.

## Events Table

Create a table named `Events` with these fields:

- `Event Title`: single line text
- `Event Date`: date
- `Start Time`: single line text, such as `15:00` or `3:00 PM`
- `End Time`: single line text, such as `17:30` or `5:30 PM`
- `Location`: single line text
- `Admission`: single line text
- `Description`: long text
- `Event Type`: single select, such as Dance, Class, Fundraiser, Community Event
- `Flyer`: attachment
- `Public Flyer Image URL`: URL
- `Flyer Alt Text`: single line text
- `RSVP Link`: URL
- `Donate Link`: URL
- `Featured`: checkbox
- `Published`: checkbox

Create a view named `Published` that filters to `Published` checked.

## Staff Permissions

- Give one or two trusted people Creator or Owner access.
- Give event managers Editor access.
- Use an Airtable form for simple event submissions.
- Use the Published checkbox as the approval step for website visibility.

## Required GitHub Settings

Add these repository variables:

- `VITE_AIRTABLE_EVENTS_EMBED_URL`: optional Airtable calendar view embed URL override
- `VITE_BREVO_SIGNUP_URL`
- `VITE_STRIPE_DONATE_URL`

No Airtable API token is required for the embedded calendar setup.

## Airtable Calendar Embed

Create a calendar view in Airtable for public website events, then use
`Share and sync` -> `Embed this view` -> `Copy embed code`.

The current site default uses this Airtable view:

`https://airtable.com/embed/appb50vmImhXrjoQo/shrUNlCPURTOIPgWg`

If you replace the Airtable view later, use only the `src` URL from the new
iframe as `VITE_AIRTABLE_EVENTS_EMBED_URL`. The site must be rebuilt after
adding or changing this environment variable.

Recommended view setup:

- Calendar date field: `Event Date`
- Filter: `Published` is checked
- Sort: `Event Date` ascending
- Visible fields: title, start time, end time, location, admission, description, flyer, RSVP link
- Hide internal fields before sharing the view
- Enable expanded record details so visitors can click an event and see flyer/details

## Image Flow

Flyers/photos are optional.

If an event has no flyer, it still publishes normally. If an event does have a
flyer, attach it in Airtable. Visitors can click the calendar event to open the
record details and view the flyer along with the event information.
