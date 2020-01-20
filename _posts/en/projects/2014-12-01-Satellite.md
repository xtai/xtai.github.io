---
title: Satellite Visualization
category: project
cover: cover.jpg
ref: satellite
lang: en

fulltitle: Real-Time Satellite Visualization
subtitle: 2014
desc: 3D visualization with OpenGL and Python
tags: [Code, Data Visualization]
---

Tracking satellites in real time form TLS data.  

This project code repository on GitHub: <a href="https://github.com/xtai/Real-Time-Satellite-Tracking" target="_blank">https://github.com/xtai/Real-Time-Satellite-Tracking</a>  

Using Python + <a href="http://www.pyglet.org" target="_blank">pyglet</a> OpenGL library + <a href="http://rhodesmill.org/pyephem/" target="_blank">PyEphem</a> library.  
Project code is licensed under the MIT license.

---

## Screen Shots

<p style="text-align: center;">
  <img src="{{ site.baseurl }}/potato/project/satellite/08.png" alt="2D">
  <img src="{{ site.baseurl }}/potato/project/satellite/03.png" alt="3D">
  <img src="{{ site.baseurl }}/potato/project/satellite/01.png" alt="3D - NOAA satellites 1">
  <img src="{{ site.baseurl }}/potato/project/satellite/05.png" alt="3D - NOAA satellites 2">
  <img src="{{ site.baseurl }}/potato/project/satellite/02.png" alt="3D - International Space Station">
  <img src="{{ site.baseurl }}/potato/project/satellite/09.png" alt="3D - GPS satellites 1">
  <img src="{{ site.baseurl }}/potato/project/satellite/06.png" alt="3D - GPS satellites 2">
  <img src="{{ site.baseurl }}/potato/project/satellite/04.png" alt="3D - Hubble Space Telescope">
  <img src="{{ site.baseurl }}/potato/project/satellite/07.png" alt="3D - AfriStar">
</p>

---

## Input

Data type: TLS (Two-line element set)  
Can be found at <a href="http://www.celestrak.com/NORAD/elements/" target="_blank">www.celestrak.com</a>

---

## 2D version

File: <a href="https://github.com/xtai/Real-Time-Satellite-Tracking/blob/master/2d.py" target="_blank">2d.py</a>, how to control:  

- Click a satellite to display its orbit.
- Press H to show/hide all orbits on-screen.
- Press UP/DOWN to change satellite category.
- Press LEFT/RIGHT to adjust orbit interval for line drawing.

---

## 3D version

File: <a href="https://github.com/xtai/Real-Time-Satellite-Tracking/blob/master/3d.py" target="_blank">3d.py</a>, control:  

- Press Z/X to zoom in or out.
- Press arrow keys to rotate the global.

File: <a href="https://github.com/xtai/Real-Time-Satellite-Tracking/blob/master/3d-refactor.py" target="_blank">3d-refactor.py</a>, control:

1. Use arrow keys/drag mouse to move the globe
2. Use A/W/S/D to rotate the globe in different ways
3. Reset the view point by click Q(x-axis rotation), E(z-axis rotation), N(all rotation and back to UB)
4. Use Z/X to zoom in and out
5. Use G/H to show/hide the satellites's trace lines
6. Use number key 1-7 to select satellite sets

File: <a href="https://github.com/xtai/Real-Time-Satellite-Tracking/blob/master/3d-refactor-2.py" target="_blank">3d-refactor-2.py</a>, control:

All control methods from <a href="https://github.com/xtai/Real-Time-Satellite-Tracking/blob/master/3d-refactor.py" target="_blank">3d-refactor.py</a>, plus:

7. Use R to randomly select a satellite on-screen and output the address below it
8. Use E to randomly give a point on earth and output its real-world address
9. Move the globe and press T for the address of the current point (center of the cross)

---

## Sample Data

Satellites Category | File Name (inside <a href="https://github.com/xtai/Real-Time-Satellite-Tracking/blob/master/data" target="_blank">data</a> folder )
------------ | ------------- 
Space Stations | stations.txt
NOAA Weather Satellites | noaa.txt
GPS Operational | gps-ops.txt
Intelsat Satellites | intelsat.txt
Science Satellites | science.txt
Miscellaneous Military | military.txt
Last 30 Days' Launches | tle-new.txt
