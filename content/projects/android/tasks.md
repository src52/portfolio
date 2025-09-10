---
title: "TaskRanger: To-do Lists"
image: ../images/thumbs/newtask-thumb.jpg
---
- Built using Jetpack Compose, following Material Design 3 patterns
- Tasks are grouped in categories, or favorited to appear in starred area of tab bar
- Task and app state is saved to local SQLite DB using [Room](https://developer.android.com/training/data-storage/room)
- Created two data sources to fetch task state: locally or remotely (from JSON)

This project started with my desire for a modern, sleek task management application for Android. While plenty of these apps exist, none offer the deeper integration with the task management system I use on my computers. 

On my laptop and desktop, I use this wonderful piece of open-source software called [Taskwarrior](https://taskwarrior.org/) to manage and synchronize my tasks. It's a very simple, terminal-based task manager, and its simplicity and ease-of-use is really where it shines for me. I run a Taskwarrior server that keeps these to-do lists in sync no matter which device I'm using.

My vision for this app is to create a modern and sleek task manager using the latest Material Design components, with support for the full Taskwarrior specification. While I haven't implemented the Taskwarrior aspect quite yet, that is on the roadmap!

 <style>
 .image-gallery {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
   gap: 20px;
   max-width: 1000px;
   margin: 0 auto;
 }
 .image-gallery figure { margin: 0; }
 .image-gallery img {
   width: 100%;
   height: auto;
   border-radius: 6px;
   display: block;
 }
 .image-gallery figcaption {
   font-size: 0.9em;
   font-style: italic;
   text-align: center;
   margin-top: 4px;
   color: #999;
 }
 </style>
 <div class="image-gallery">
   <figure>
     <a href="images/task2.jpg" target="_blank">
       <img src="images/thumbs/task2-thumb.jpg" alt="Task 2">
     </a>
     <figcaption>An example task displayed in a list</figcaption>
   </figure>
   <figure>
     <a href="images/newtask.jpg" target="_blank">
       <img src="images/thumbs/newtask-thumb.jpg" alt="New task">
     </a>
     <figcaption>A bottom sheet dialog to create a new task</figcaption>
   </figure>
  <figure>
     <a href="images/task3.jpg" target="_blank">
       <img src="images/thumbs/task3-thumb.jpg" alt="Task 3">
     </a>
     <figcaption>Options to modify or remove a task category</figcaption>
   </figure>
   <figure>
     <a href="images/dynamictheme.jpg" target="_blank">
       <img src="images/thumbs/dynamictheme-thumb.jpg" alt="Task 1">
     </a>
     <figcaption>Dynamic theme depending on user's system preferences</figcaption>
   </figure>
 </div>