function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
class TimedCache {
    constructor() {
        this.data = {};
    }
    insert(key, val) {
        let entry = {
            'val': val,
            'expire': Date.now(),
        };
        this.data[key] = entry;
    };

    find(key) {
        let val = this.data[key]
        if (val && (Date.now() - val.expire <= 10000)) {
            return val.val;
        }
        let res = calculatePopuplationHelper(key);
        this.insert(key, res);
        return res;
    };
}

function calculatePopuplation(country) {
    return cache.find(country);
}

function calculatePopuplationHelper(country) {
    const l = country.length;
    const n = Math.random() * (1000000000 * l - 1000000000) + 1000000000
    let i = 0;
    while (i < 3 * n) i++;
    return parseInt(n);
}
let cache = new TimedCache();
console.log(calculatePopuplation("India"));
sleep(1000 * 4);
console.log(calculatePopuplation("India"));
sleep(1000 * 4);
console.log(calculatePopuplation("India"));
sleep(1000 * 4);
console.log(calculatePopuplation("India"));
sleep(1000 * 4);
console.log(calculatePopuplation("India"));