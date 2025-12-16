This folder holds source assets that are imported into your React components.

Recommended structure:

- `src/assets/icons` – custom SVG icons used in components.
- `src/assets/images` – component‑specific images and thumbnails.
- `src/assets/videos` – short UI previews or small clips you import in code.

Example usage:

```tsx
import ProjectThumb from "@/assets/images/project-thumb.png";

<img src={ProjectThumb} alt="Project thumbnail" />;
```

For large, static files (marketing videos, social share images, favicons), prefer placing them under `public/assets` and referencing them by URL (e.g. `/assets/videos/intro.mp4`).


