type Coordinates = { x?: number; y?: number; }
type SpiralOptions<T = SpiralKind> = T extends 'hyp' | 'lit' | 'par' | 'arc' ? {

    /**
    * The amount of angles to increase each iteration with. 
    * 
    * Adjust this value to tune the smoothness of the spiral.
    */
    step?: number;

    /**
     * Affects the starting radius of the spiral.
     */
    a?: number;


    /**
     * The upper limit when we are iterating with the given `step`. 
     * 
     * A higher value will result in more turns.
     */
    maxTheta?: number;
} : {

    /**
     * The amount of angles to increase each iteration with. 
     * 
     * Adjust this value to tune the smoothness of the spiral.
     */
    step?: number;

    /**
    * Affects the starting radius of the spiral.
    */
    a?: number;

    /**
     * Affects how tightly the spiral is wound.
     */
    b?: number;

    /**
     * The upper limit when we are iterating with the given `step`. 
     * 
     * A higher value will result in more turns.
     */
    maxTheta?: number;
}
type SpiralKind = 'hyp' | 'log' | 'lit' | 'par' | 'arc';

export type { Coordinates, SpiralOptions, SpiralKind };