
import { SVG } from "@svgdotjs/svg.js"


const draw = SVG()
    .addTo('body')
    .size(500, 600),
    rect = draw
        .rect(200, 300)
        .attr({ fill: 'pink', stroke: 'black' })

