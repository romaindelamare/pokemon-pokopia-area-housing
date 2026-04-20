# Pokopia Area Housing

A React application to help distribute Pokémon across the 5 areas of Pokopia.

## Live Demo

- [Open the deployed app](https://romaindelamare.github.io/pokemon-pokopia-area-housing/)

## Features

- **Drag & Drop Assignment** – Drag Pokémon from the pool into areas/houses, drag them back to the pool, and preview stack count when moving multiple family members.
- **5 Pokopia Areas** – Withered Wasteland, Bleak Beach, Rocky Ridges, Sparkling Skylands, and Palette Town.
- **House Capacity Rules** – Houses are limited to 4 Pokémon. Invalid drops are blocked when there is not enough space.
- **New House Drop Zone** – Drop on an area to create a new house automatically (when the dragged group fits).
- **House Management** – Remove empty houses and view per-house resident count.
- **Family Move Mode** – Optional toggle to move all Pokémon from the same family together in one drag.
- **Pool Search & Filter** – Search by Pokémon name/family and filter by specialty chips.
- **Specialty Coverage Tracking** – Each area shows specialty coverage badges based on assigned Pokémon.
- **Litter Resource Visibility** – View litter resource chips on Pokémon cards and aggregated litter resources per area.
- **House Synergy Hint** – Houses containing litter specialists show a "Gathering" status when compatible gather support is present or missing.
- **Favorite Items Summary** – Each house displays the unique favorite items of its residents.
- **Share / Load Distribution Codes** – Generate a compact share code, copy it, and load saved layouts from pasted code.
- **Auto Save** – Distribution is persisted in localStorage and restored on reload.
- **Export TXT Report** – Export the full repartition (area by area + unassigned pool) as a text file.
- **Reset Action** – Reset all assignments back to the initial pool with confirmation.

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
