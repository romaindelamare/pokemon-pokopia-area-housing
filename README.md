# Pokopia Area Housing

A React application to help distribute Pokémon across the 5 areas of Pokopia.

## Features

- **Drag & Drop** – Drag Pokémon cards from the pool into any of the 5 themed areas. Drag them back to the pool to unassign them.
- **5 Areas of Pokopia** – Verdant Valley 🌿, Ember Ridge 🔥, Crystal Caverns ❄️, Storm Peaks ⚡, Misty Harbor 🌊
- **Specialty Coverage** – Each area displays 10 specialty badges (🔥 Burn, 💧 Water, 🌿 Plant, ⚡ Electric, ❄️ Cool, 🔨 Craft, ⛏️ Mine, 🌾 Gather, 🧹 Litter, 📦 Transport). A filled badge means at least one Pokémon with that specialty is present; a greyed badge means the specialty is missing. The goal is to cover all specialties in each area.
- **Houses** – Within each area, Pokémon are grouped into houses of 1–4. Each house shows the collective favourite items of its residents.
- **Add House** – Use the "+ Add House" button to create an explicit empty house slot in an area.
- **Move Family Together** – Toggle the switch in the header to move all members of the same Pokémon family together when dragging.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [@dnd-kit](https://dndkit.com/) for drag-and-drop
