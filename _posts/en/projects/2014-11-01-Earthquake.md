---
title: Earthquake Visualization
category: project
cover: cover.jpg
ref: earthquake
lang: en

fulltitle: Earthquake Visualization
subtitle: 2014
desc: Time-lapse visualization with USGS data
tags: [Code, Data Visualization]
---
<p class="full-width">
  <iframe width="100%" src="https://www.youtube.com/embed/OOd92U6UACw" frameborder="0" allowfullscreen></iframe>
</p>
<style type="text/css">
  p.full-width iframe {
    height: 300px;
  }
  @media (min-width: 600px){
    p.full-width iframe {
      height: 500px;
    }
  }
  @media (min-width: 1440px){
    p.full-width iframe {
      height: 600px;
    }
  }
</style>

This project code repository on GitHub: <a href="https://github.com/xtai/Earthquake-Visualization" target="_blank">https://github.com/xtai/Earthquake-Visualization</a>  

Visualizing earthquake data are in <a href="http://geojson.org/" target="_blank">geojson</a> format; data can be downloaded from <a href="http://usgs.gov" target="_blank">The United States Geological Survey (USGS)</a>  

This project uses Python + OpenGL (<a href="http://www.pyglet.org" target="_blank">pyglet</a> library)  

License under the MIT license.

---

## Input

Earthquake data can be found in <a href="http://earthquake.usgs.gov/earthquakes/search/" target="_blank">USGS.gov</a>.

---

## Control

1. Press SPACE key to pause
2. Press LEFT/RIGHT key to adjust display time
3. Press UP/DOWN key to adjust display duration time
4. Press R key to reset and start over
5. Press H key to display help message
6. Click a quake, bottom-left corner will show its info
7. Hover a quake during pause will also show its info

There might be a performance lag due to the scale of data.

---

## Screenshots

<p style="text-align: center;" class="max-width-800">
  <img src="{{ site.baseurl }}/potato/project/earthquake/1.png" alt="Earthquake Visualization Screenshot 1">
  <img src="{{ site.baseurl }}/potato/project/earthquake/2.png" alt="Earthquake Visualization Screenshot 2">
</p>
