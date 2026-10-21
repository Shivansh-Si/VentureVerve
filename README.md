# VentureVerse 2026

A single-page website for a fictional event, VentureVerse 2026 (Ideas into Action),
organised by the Entrepreneurship Development Cell (EDC), JSS University, Noida.
Made for the web development task of the EDC technical department recruitment.

## How to run

1. Keep the whole `ventureverse` folder together (do not move files out of it).
2. Double-click `index.html` to open it in a browser.

No installation or internet connection is needed.

## What is on the page

- Header with the EDC logo, links to each section and a register button
- Hero with event name, tagline, date, time and venue
- About and four highlights
- Schedule of six sessions (10:00 AM to 3:00 PM)
- Three fictional speaker profiles with initials as avatars
- Demo form for registration interest
- Footer with logos, links and placeholder contact details

## Design notes

- Colours (navy, orange, cyan) come from the EDC logo and are set at the top of `style.css`.
- The row of squares in the hero is made with plain `span` elements. It copies the
  pixel squares in the logo and goes from scattered to a straight line, to match "Ideas into Action".
- The hero background is a faint graph-paper grid made with CSS gradients.

## Notes

- The form is a demo. It checks that a name and a valid-looking email are entered,
  then shows a message. It does not send or store anything.
- Speakers are fictional. Contact and social details in the footer are placeholders
  because no real EDC details were provided.
- Built with only HTML, CSS and a little JavaScript. No libraries.

## Things I would improve with more time

- Add real speaker details and EDC contact links once they are available
- Add a menu button for the mobile navigation instead of showing all links in a row
