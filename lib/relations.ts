


// we indicate that two numbers are related together using a notation called ordered pair
// we interpret this as 'x is related to y'
// x is the input and y is the output



type OrderedPair = [number, number]






/**
 * Gets the relations of a passed in list. It returns an object with the following keys:
 * 
 * * 
 * 
 * @param pairs A nested array with each element being an ordered pair. A nested pair with a falsy element is ignored from the final result
 *
 */
function relations(pairs: Array<OrderedPair>) {
    let len = pairs.length;


    const res = {
        domain: new Set(),
        range: new Set()

    },
        len2 = pairs.map(op => op[0]).length;


    // the loop exits when 
    while (len >= 0) {

        // if index is already zero we don't decrement
        const idx = len === 0 ? 0 : len - 1;




        // store the current domain & range for comparison later
        const currentDomain = pairs[idx][0],
            currentRange = pairs[idx][1];

        res?.domain?.add(currentDomain);
        res?.range?.add(currentRange);
        --len;

        // the last decrement will mean that this loop won't run once more.

        if (len === -1) {



            // @ts-ignore: we convert it  to an array to sort the values
            res.domain = res.domain?.values().toArray().sort();


            // @ts-ignore:
            res.range = res?.range?.values().toArray().sort();
            // @ts-ignore:
            res.isFunction = !(res?.domain?.length < len2);
            return res as unknown as {
                domain: Array<number>;
                range: Array<number>;
                isFunction: boolean
            };
        }
    }



}




export { relations }