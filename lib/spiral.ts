
import { cos, exp, sin, sqrt } from "./math.ts";
import type { SpiralOptions, Coordinates, SpiralKind } from "./types.d.ts";


/**
 * Generates an `Array` of objects whose keys are Cartesian coordinates (`x` and `y`) that can be looped over to create spiral effects using, for instance SVG. 
 * 
 * The types of spirals are:
 * 
 * * `arc` - This spiral increases in radius at a constant rate as the angle increases.
 * 
 *  * `hyp` - This spiral, in contrast to the Archimedean (`arc`) or logarithmic (`log`) spirals, winds inward as the angle increases. It's as if the spiral is being pulled towards its center
 * 
 * * `log` - The logarithmic spiral is defined by its exponential growth in radius as the angle increases. This creates a captivating form that appears to expand infinitely while maintaining its self-similar shape.
 * 
 * * `par` - The parabolic spiral is defined by a radius that increases with the square root of the angle. This leads to a gentler expansion compared to the exponential growth of the logarithmic spiral.
 * 
 * * `lit` - The Lituus spiral where the radius decreases as the square root of the angle increases. It creates a graceful curve that gently winds towards the origin.
 * 
 * @example
 
 * import { spiral } from '@prjctimg/algorist' 

 const logSpiral = spiral('log',{ a: 4, b: 6, maxTheta: 210, step: 7 })
 
 // 
 */
// @ts-ignore:
export function spiral<T extends SpiralKind>(kind: T = 'arc', options: SpiralOptions<T> = {

}): Array<Coordinates> {
    let theta = 0,

        // @ts-ignore: we're just destructuring all the expected types
        { a, b, maxTheta, step } = options;


    // had to initialize defaults internally to avoid type complexities
    a = a || 0
    b = b || 0
    maxTheta = maxTheta || 0
    step = step || 0



    const radius: number = { log: a * exp(b * theta), par: a * sqrt(theta) }[kind as 'log' | 'par'];
    const points: Array<Coordinates> = [],


        // the equations for calculating the x & y coords
        cb = (t: number) => {

            return {
                hyp: {
                    x: cos(theta) / t,
                    y: sin(theta) / t
                },
                log: {
                    x: radius * cos(t),
                    y: radius * sin(t),
                },
                lit: {
                    x: a * cos(t) / (sqrt(t)),
                    y: b * sin(t) / (sqrt(t)),
                },
                par: {
                    x: radius * cos(t),
                    y: radius * sin(t)
                },
                arc: {
                    x: a * t * cos(t),
                    y: a * t * sin(t),
                },
            }[kind];

        }

    for (; theta <= maxTheta; theta += step)
        points.push({
            x: cb(theta).x,
            y: cb(theta).y,

        });

    return points;
}
