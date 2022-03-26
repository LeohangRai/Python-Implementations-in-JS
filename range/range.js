// test
const myArr = [];
for (let i of range(40, 10, -5)) {
    myArr.push(i);
}
console.log(myArr);

/**
 * range
 * : my own implementation of Python range() function xD
 * @param  {...number} rest - start(optional), end(required), step(optional)
 * @returns {Generator<number>}
 */
function* range(...rest) {
    const argsAreNumbers = rest.every((x) => typeof x === "number");
    if (!argsAreNumbers || rest.length === 0) {
        return;
    }

    // range(10)
    if (rest.length === 1) {
        let start = 0;
        let end = rest[0];
        while (start < end) {
            yield start++;
        }
    }

    // range(10, 20)
    else if (rest.length === 2) {
        let start = rest[0];
        let end = rest[1];
        while (start < end) {
            yield start++;
        }
    } else if (rest.length === 3) {
        let start = rest[0];
        let end = rest[1];
        let step = rest[2];

        if (step === 0) {
            return;
        } // range(10, 20, 0)
        if (step < 0 && start < end) {
            return;
        } // range(10, 20, -2)
        if (step > 0 && start > end) {
            return;
        } // range(20, 10, 2)

        // range(20, 10, -2)
        if (step < 0 && start > end) {
            yield start;
            while (start > end) {
                if (start + step <= end) {
                    return;
                }
                yield (start += step);
            }
        }

        // range(10, 20, 2)
        else {
            yield start;
            while (start < end) {
                if (start + step >= end) {
                    return;
                }
                yield (start += step);
            }
        }
    }
}

module.exports = {
    range,
};
