# Appointment Landing (React + Vite)

A lightweight, responsive appointment confirmation page that parses URL parameters and renders details, calendar links, and preparation steps.

## Quick start

1. Install dependencies:
   npm install

2. Start the dev server:
   npm run dev

3. Open the app and test with your query params, for example:
   http://localhost:5173/?assigned_to=Ronnie+Stirling&event_type_name=1-1+Mastermind+Application+Call&timeZone=America/Toronto&event_start_time=2025-11-20T20:00:00.000Z&event_end_time=2025-11-20T21:00:00.000Z&invitee_full_name=John+Izokun&invitee_email=john.izokuno@gmail.com&text_reminder_number=%2B14389306815

## Customize
- Edit src/styles.css to change the theme.
- Update copy in src/App.tsx.
- Extend src/lib/calendar.ts if you need Outlook links, etc.
