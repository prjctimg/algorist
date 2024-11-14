import { expect } from "jsr:@std/expect";
import { spiral } from "../lib/spiral.ts";


Deno.test('This function returns coordinates for drawing spirals', () => {
    expect(spiral('log', { a: 4, b: 6, maxTheta: 210, step: 7 }))
        .toBeInstanceOf(Array)

})

console.log(spiral('arc', { a: 12, maxTheta: 210, step: 7 }))