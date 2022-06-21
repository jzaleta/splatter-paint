<div align="center">
  
# ``` Splatter Paint 🎨 ```

![GitHub License](https://img.shields.io/github/license/J-cordz/Splatter-Paint?style=for-the-badge)
![Stargazers](https://img.shields.io/github/stars/J-cordz/Splatter-Paint?style=for-the-badge)
  
[![Vercel](https://img.shields.io/badge/Deployed_with_Vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://splatterpaint.vercel.app/)

</div>
  
# About 🗃️

[Splatter Paint](https://splatterpaint.vercel.app/) is a website featuring a simple yet awesome coding solution to draw on a HTML Canvas, and it's built using HTML, CSS and JavaScript with the ```  Paper.js ```  Library.
It was made possible with the help of Hack Club's ``` Splatter-Paint ``` [Workshop](https://workshops.hackclub.com/splatter_paint/), customized in depth with different options like:

- Moving around the mouse to draw circles of different sizes and colors.
- Dragging the mouse to make a linear path.

- Things to do: 
- [ ] The ability of export the canvas as a ``` SVG ``` Image.

<a href="https://hackclub.com/"><img style="position: absolute; top: 0; left: 10px; border: 0; width: 256px; z-index: 999;" src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club"/></a>

An example of how the code works under the hood is the following snippet, which function is to make the colorful and random circles that are available on the canvas:

``` JavaScript
tool.fixedDistance = 30
var layer = project.activeLayer

function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.round(Math.random() * 30) + 5
  })
  path.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  }
}
```

# How to use it 💻

Splatter Paint is very easy to use, just open the canvas and start drawing!

![](img/canvas.svg)
> This is how the canvas looks before drawing anything.

# License 🍱

Splatter Paint is Open-Source through the [MIT License](https://github.com/J-cordz/Splatter-Paint/blob/main/LICENSE). 
