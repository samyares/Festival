# Ottawa Film Award — site notes

Plain HTML, CSS and JavaScript. No build step, no backend. Upload the folder as-is.

```
index.html  winners.html  enter.html  about.html  cinema.html
data/films.json       the 27 screening films + the open/closed switch
data/winners.json     winners tables
data/reviews.json     homepage reviews
```

## Opening and closing the screening room

In `data/films.json`:

```json
"screening": { "open": false, "opensText": "1–3 August 2026" }
```

`open: true` unlocks it, `false` closes it. Nothing is scheduled — the room stays
as you leave it. `opensText` is the message shown while closed.

## The ticket code

Set it in `data/films.json`:

```json
"ticketCode": "OFA-2026-AUG"
```

Case, spaces and hyphens are ignored, so `ofa2026aug` also works.

**Be clear-eyed about what this does.** The films sit at plain addresses under
`/movies/`, so the code keeps ordinary visitors out of the auditorium but cannot
stop anyone who looks at the page source. It is a courtesy gate, not a lock.

## Turn off the directory listing — important

`https://ottawafilm.site/movies/` currently returns a browsable index of every
film. Anyone can open it and download the lot without a ticket. In your nginx
config, for that location:

```nginx
autoindex off;
```

Until that is done, the ticket makes no practical difference at all.

## Adding films

1. Upload the mp4 to `/movies/` using the name in that film's `file` field
   (`great-games.mp4`, and so on) — the names already match what you sent.
2. Set `"cleared": true` on that film in `data/films.json`.

A film appears only when `cleared` is true, so nothing goes live by accident, and
unfinished uploads simply stay hidden until you flip them.

Only set `cleared` once you have **written permission from that filmmaker**.
Streaming without it can cost them their premiere status at other festivals.

Encoding, if you need it:

```bash
ffmpeg -i source.mov -vcodec libx264 -crf 23 -preset slow \
       -vf "scale='min(1280,iw)':-2" -acodec aac -b:a 128k -movflags +faststart \
       great-games.mp4
```

`+faststart` matters — without it playback will not start until much of the file
has downloaded. Keep files under ~500 MB so Cloudflare caches them.

## Adding a season

Winners page and homepage ticker: add the season to `data/winners.json` and set
`defaultSeason` to its id.

Screening room: replace the `films` list in `data/films.json` with the new
season's films and update `season`. Set every `cleared` back to `false` first.

## What the ticket does and does not do

**It does** keep the films unreachable for anyone without the code. Every file on
the site can be read, and none of them reveals where a film is or what the code
is. Someone reading the source learns nothing.

**It does not** stop sharing. Anyone who *has* the code can watch, read the URL
out of their browser, and pass that link on — and it will keep working until you
rename the file. Screen recording is likewise not preventable.

So this is an unlisted screening, not a locked one. Keep the window short, use a
long code, and say plainly to filmmakers what the protection is. If you ever want
links that genuinely expire, that needs something running on a server — tell me
and I will add it.

## Editing the site

Styles are in `css/styles.css`, organised by section with the palette at the top.
After changing CSS or JS, bump the `?v=` number in the page `<link>` and
`<script>` tags so browsers fetch the new file instead of a cached one.
