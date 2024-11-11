import { cos, sin, sqrt } from "mathjs";
// Archimedean spiral

type Points = Array<{ x: number; y: number }>;
type SpiralOptions = {
    kind?: SpiralKind;
    a?: number;
    b?: number;
    maxTheta?: number;
    step?: number;
};
type SpiralKind = 'hyp' | 'log' | 'lit' | 'par' | 'arc';


/**
 * Generates an `Array` of `x` and `y` points which can be looped over to create spiral effects. 
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
 * * The Lituus is a spiral where the radius decreases as the square root of the angle increases. It creates a graceful curve that gently winds towards the origin.
 * 
 * 
 * @example
 * 
 */
function spiral({ kind = 'arc',
    a = 0,
    b = 0,
    maxTheta = 0,
    step = 0,
}: SpiralOptions): Points {
    let theta = 0,
        radius = 0;
    const points: Points = [],


        // the equations for calculating the x & y coords
        equations: { [T in SpiralKind]: { x?: number; y?: number } } = {
            hyp: {
                x: cos(theta) / theta,
                y: sin(theta) / theta
            },
            log: {
                x: radius * cos(theta),
                y: radius * sin(theta),
            },
            lit: {
                x: a * cos(theta) / (sqrt(theta) as number),
                y: b * sin(theta) / (sqrt(theta) as number),
            },
            par: {
                x: radius * cos(theta),
                y: radius * sin(theta)
            },
            arc: {
                x: a * theta * cos(theta),
                y: a * theta * sin(theta),
            },
        };

    for (; theta <= maxTheta; theta += step)
        points.push({
            x: equations[kind].x as number,
            y: equations[kind].y as number,

        });

    return points;
}

export { spiral };





















// function archimedeanSpiral(
//     a = 0,
//     maxTheta = 0,
//     step = 0,
// ): Points {
//     const points: Points = [];
//     for (let theta = 0; theta <= maxTheta; theta += step)
//         points.push({
//             x: a * theta * cos(theta),
//             y: a * theta * sin(theta),
//         });

//     return points;
// }

// function logarithmicSpiral(a, b, maxTheta, step): Points {
//     const points: Points = [];
//     for (let theta = 0; theta <= maxTheta; theta += step) {
//         const radius = a * exp(b * theta);

//         points.push({
//             x: radius * cos(theta),
//             y: radius * sin(theta),
//         });
//     }
//     return points;
// }

// function hyperbolicSpiral(a, maxTheta, step) {
//     let points = [];
//     for (
//         let theta = step;
//         theta <= maxTheta;
//         theta += step
//     ) {
//         // Start theta from 'step' to avoid division by zero
//         let x = (a * Math.cos(theta)) / theta;
//         let y = (a * Math.sin(theta)) / theta;
//         points.push({ x: x, y: y });
//     }
//     return points;
// }


// function parabolicSpiral(a, maxTheta, step) {
//     let points = [];
//     for (let theta = 0; theta <= maxTheta; theta += step) {
//         let radius = a * Math.sqrt(theta);
//         let x = radius * Math.cos(theta);
//         let y = radius * Math.sin(theta);
//         points.push({ x: x, y: y });
//     }
//     return points;
// }
