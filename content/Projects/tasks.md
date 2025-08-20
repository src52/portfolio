---
title: Tasks
---

# Task Management Android App - Jetpack Compose
- Built using Jetpack Compose, following Material Design 3 patterns
- Tasks are grouped in categories, or favorited to appear in starred area of tab bar
- Task and app state is saved to local SQLite DB using [Room](https://developer.android.com/training/data-storage/room)
- Created two data sources to fetch task state: locally or remotely (from JSON)
 [!info] Images
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
       <img src="images/task2.jpg" alt="Task 2">
     </a>
     <figcaption>An example task displayed in a list</figcaption>
   </figure>
   <figure>
     <a href="images/newtask.jpg" target="_blank">
       <img src="images/newtask.jpg" alt="New task">
     </a>
     <figcaption>A bottom sheet dialog to create a new task</figcaption>
   </figure>
  <figure>
     <a href="images/task3.jpg" target="_blank">
       <img src="images/task3.jpg" alt="Task 3">
     </a>
     <figcaption>Options to modify or remove a task category</figcaption>
   </figure>
   <figure>
     <a href="images/dynamictheme.jpg" target="_blank">
       <img src="images/dynamictheme.jpg" alt="Task 1">
     </a>
     <figcaption>Dynamic theme depending on user's system preferences</figcaption>
   </figure>
 </div>