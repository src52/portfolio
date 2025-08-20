---
title: My Projects
---

%% <style>
  .obsidian-tile-grid {
    --tile-gap: 8px;
    --tile-radius: 8px;

    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Default: 2 columns */
    gap: var(--tile-gap);
  }

  /* Desktop breakpoint (≥1024px): 3 columns */
  @media (min-width: 1024px) {
    .obsidian-tile-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .obsidian-tile {
    position: relative;
    aspect-ratio: 1 / 1;           /* keeps perfect squares */
    border-radius: var(--tile-radius);
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0,0,0,.08);
    transition: transform .12s ease, box-shadow .12s ease;
  }

  .obsidian-tile:focus-visible {
    outline: 2px solid var(--text-accent, #7aa2f7);
    outline-offset: 2px;
  }

  .obsidian-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,.15);
  }

  .obsidian-tile img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .25s ease;
    margin: 0;
  }
  .obsidian-tile:hover img {
    transform: scale(1.05);
  }

  .obsidian-tile-title {
    position: absolute;
    inset: 0 auto auto 0; /* top:0; left:0; */
    right: 0;
    padding: 8px 10px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
	background: linear-gradient(180deg,rgba(0, 0, 0, 0.76) 0%, rgba(15, 15, 15, 0.74) 51%, rgba(31, 31, 31, 0) 100%);
    pointer-events: none;
  }
</style>

<div class="obsidian-tile-grid">
  <a class="obsidian-tile" href="projects/tasks.md" aria-label="Task Management - Android">
    <img src="./images/newtask.jpg" alt="Screenshot of the task management app">
    <div class="obsidian-tile-title">Task Management - Android</div>
  </a>

  <a class="obsidian-tile" href="Page Three.md" aria-label="Open Page Three">
    <img src="./images/task3.jpg" alt="City skyline at dusk">
    <div class="obsidian-tile-title">Page Three</div>
  </a>

  <a class="obsidian-tile" href="https://example.com" aria-label="Go to Example dot com">
    <img src="./images/dynamictheme.jpg" alt="Waves on a beach">
    <div class="obsidian-tile-title">External Site</div>
  </a>
</div>

 %%
<style>
  .obsidian-tile-grid {
    --tile-size: 300px;
    /* target size; grid will auto-fill */
    --tile-gap: 12px;
    --tile-radius: 12px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--tile-size)), 1fr));
    gap: var(--tile-gap);
  }

  .obsidian-tile {
    position: relative;
    aspect-ratio: 1 / 1;
    /* keeps perfect squares */
    border-radius: var(--tile-radius);
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
    transition: transform .12s ease, box-shadow .12s ease;
  }

  .obsidian-tile:focus-visible {
    outline: 2px solid var(--text-accent, #7aa2f7);
    outline-offset: 2px;
  }

  .obsidian-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, .15);
  }

  .obsidian-tile img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform .25s ease;
    margin: 0;
  }

  .obsidian-tile:hover img {
    transform: scale(1.05);
  }

  .obsidian-tile-title {
    position: absolute;
    inset: 0 auto auto 0;
    /* top:0; left:0; */
    right: 0;
    padding: 8px 10px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(31, 31, 31, 0.73) 100%);
    pointer-events: none;
    /* lets the link itself be fully clickable */
  }
</style>
<div class="obsidian-tile-grid">
<a class="obsidian-tile" href="projects/tasks.md" aria-label="View details about the Task Management app">
    <img src="./images/newtask.jpg" alt="Screenshot of the task management app">
    <div class="obsidian-tile-title">Task Management Android App</div>
  </a>
  <a class="obsidian-tile" href="projects/bee.md" aria-label="View details about the Spelling Bee app">
    <img src="./images/Bee.png" alt="A screenshot of the Spelling Bee game">
    <div class="obsidian-tile-title">Spelling Bee</div>
  </a>
  <a class="obsidian-tile" href="Page Three.md" aria-label="Open Page Three">
    <img src="./images/task3.jpg" alt="City skyline at dusk">
    <div class="obsidian-tile-title">Page Three</div>
  </a>
  <!-- External link example -->
  <a class="obsidian-tile" href="https://example.com" aria-label="Go to Example dot com">
    <img src="./images/dynamictheme.jpg" alt="Waves on a beach">
    <div class="obsidian-tile-title">External Site</div>
  </a>
</div>