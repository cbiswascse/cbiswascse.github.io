# Chandrima Biswas — Portfolio

A professional, responsive single-page portfolio website. Pure HTML, CSS, and
vanilla JavaScript — no build step, no dependencies.

## Features

- **Storytelling about** section — career narrative rooted in a love of solving puzzles
- **Work experience** timeline (CHI Deutschland, Riverland Reply, TU Darmstadt, Frankfurt UAS)
- **Talks & seminars** — DDD Europe, internal DDD talks, and an LSTM university seminar
- **Skills**, **projects**, and **academic career** sections
- Light/dark theme toggle (persisted in `localStorage`, respects system preference)
- Scroll progress bar, scroll-reveal animations, active-section nav highlighting
- Fully responsive with an accessible mobile menu
- Respects `prefers-reduced-motion`

## Run locally

Just open the file:

```bash
open portfolio/index.html
```

Or serve it (recommended for clean reloads):

```bash
cd portfolio
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Customize

- **Content** — edit `index.html`
- **Colors / fonts / spacing** — edit the `:root` and `[data-theme="dark"]` tokens in `styles.css`
- **Contact links** — update the LinkedIn URL and `mailto:` in the contact section of `index.html`

## Files

| File         | Purpose                                  |
| ------------ | ---------------------------------------- |
| `index.html` | Page structure and content               |
| `styles.css` | Theme tokens, layout, and animations     |
| `script.js`  | Theme toggle, nav, reveal & scroll logic |
