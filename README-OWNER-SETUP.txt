FIGHTCRAFT BJJ — OWNER CONTROL CENTRE

WHAT THIS UPGRADE DOES
- Keeps your existing homepage design, photo gallery and Supabase photo storage.
- Adds an owner-only control centre at /admin.html.
- Lets the owner edit homepage wording, address, contact details, prices/trial text, opening hours, weekly timetable, colours and announcement banner.
- Keeps the existing photo upload/delete and homepage-feature controls.
- Website content is stored in Supabase and the public website reads it automatically. Normal content edits do not need a new ZIP or Netlify deploy.

INSTALL
1. In Supabase, open SQL Editor > New query.
2. Paste the contents of OWNER-CONTROL-CENTRE-SETUP.sql and Run it once.
3. In Netlify, open your Fightcraft site > Deploys > manual deploy.
4. Upload this ZIP.
5. Open your site /admin.html and sign in with the existing owner account.

SECURITY
- The site settings table is publicly readable so the website can display its content.
- Only the Supabase user ID e2f55ea6-1be2-4ce9-bcea-f91c1ff3ea53 can insert/update settings, enforced by Row Level Security.
- Existing photo/storage permissions are not modified by this migration.
- Keep public sign-ups disabled in Supabase Authentication if only the owner should have an account.
- Never put a Supabase secret/service_role key in config.js. The existing publishable key is intended for browser use.

IMPORTANT
- This is a content manager, not a full visual page builder. It manages the editable content and settings listed in the dashboard. New page layouts, new features or structural redesigns still require development.
- Default hours are deliberately “Please contact us”; enter verified real hours and timetable before relying on them publicly.
- Review all wording, prices, contact details, timetable and image permissions before handing the site to the gym owner.
