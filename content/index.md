---
title: Welcome!
---
Hey, thanks for stopping by!

I am a software developer pursuing my Master's in Computer Science at Cal State Long Beach. I have had a passion for computers and programming since I was a kid. 

Outside the digital realm, I enjoy:

 - Tennis
 - Cooking
 - Reading (_Oathbringer_ by Brandon Sanderson)
 - Music, concerts, record collecting
 - Hiking
 
## Projects

Here are some projects I've worked on!

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

  a.internal.obsidian-tile {
    position: relative;
    aspect-ratio: 1 / 1;
    border: 3px solid var(--highlight);
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
    right: 0;
    padding: 8px 10px;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 800;
    line-height: 1;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.2) 85%, rgba(0, 0, 0, 0) 100%);
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
</div>