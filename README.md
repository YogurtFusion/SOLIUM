<div class="flex flex-col justify-center items-center">

# SOLIUM

**Cinema that never made the algorithm.**

A mood-based indie film discovery platform — where you don't search for a film, you wait for one to find you.

[Live Demo](https://solium.vercel.app/) · [Report Bug](mailto:aniket.dev.me@gmail.com?subject=Bug%20Report%20—%20Solium) · [Request Feature](mailto:aniket.dev.me@gmail.com?subject=Feature%20Request%20—%20Solium)

</div>

---

## What is Solium?

Solium organises film not by genre or release date — but by **visual mood**. The feeling a frame produces before any narrative begins.

Browse by the texture of rain on glass. By the specific quality of light at dusk in a European city. By the hum of neon on wet asphalt at 2am. Each mood is a curated collection of indie and arthouse films from 2010 to present — placed by hand, not by algorithm.

---

## 12 Cinematic Moods

| Mood | Feel |
|------|------|
| **Noir** | High contrast, deep shadow, rain-slicked streets |
| **Dusk** | Warm hazy twilight, European city, purple/orange light |
| **Vivid** | Cyan/magenta neon, motion blur, urgency |
| **Grain** | Muted earth tones, film grain, tactile texture |
| **Silence** | Brutalist architecture, negative space, stillness |
| **Chaos** | Handheld, shaky-cam, gritty tension, no escape |
| **Symmetry** | Geometric compositions, pastel palette, deadpan staging |
| **Echoes** | Baroque period architecture, opulence, detailed fabrics |
| **Humidity** | Tropical heat, decay, dense air, heavy shadows |
| **Melancholy** | Wide-angle urban isolation, pastel neon, quiet |
| **Rhythm** | Magic hour cityscape, deep purple skies, long takes |
| **Surreal** | Eccentric props, desaturated palette, deadpan strangeness |

---

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS**
- **GSAP** — transitions and mood animations
- **TMDB API** — posters, metadata, runtime, cast
- **React Router** — mood and film routing

---

## Architecture

Film data is split intentionally:

```
films.js (local)          TMDB API (remote)
─────────────────         ─────────────────
id (url slug)             poster_path
moods[]                   title
one_liner                 overview
tmdb_id  ──────────────▶  runtime
                          director (via /credits)
```

Your mood layer lives locally. TMDB supplies everything visual and factual. No database needed at this stage — just a flat JS file and runtime API calls.

---

## Project Structure

```
src/
├── data/
│   └── films.js          # 97 curated films with mood mapping + tmdb_id
├── pages/
│   ├── MoodCollection/   # Filters films by mood slug, renders poster grid
│   └── FilmDetail/       # Single film view — TMDB fetch + local editorial data
├── assets/
│   └── img/mood/         # Mood cover images (noir.png, dusk.png, etc.)
└── components/
```

---

## Getting Started

```bash
git clone https://github.com/yourusername/solium.git
cd solium
npm install
```

Add your TMDB API key:

```bash
# .env
VITE_TMDB_KEY=your_key_here
```

```bash
npm run dev
```

Get a free TMDB API key at [themoviedb.org](https://www.themoviedb.org/settings/api).

---

## Film Selection Criteria

- Released **2010–2024**
- Indie or arthouse — no major studio blockbusters
- Real TMDB entries with poster images
- Not culturally overexposed — no Parasite, Moonlight, Hereditary, Drive
- A single film can belong to multiple moods

---

## Roadmap

- [ ] Resolve remaining null `tmdb_id` entries
- [ ] `useTMDB` custom hook for fetch + merge
- [ ] Supabase migration for editable film data
- [ ] About page
- [ ] Editorial writing section — cinematography notes per mood

---

## Built By

**Aniket Kumar** — design-forward frontend developer.  
[GitHub](https://github.com/yourusername) · [LinkedIn](#)

---

<div align="center">
<sub>Posters before titles. Mood before genre. Built for the dark.</sub>
</div>