let f = {}
const febi = (n) => {
    let result;
    if (n === 0 || n === 1) {
        result = 1;
    }
    else {
        result = febi(n - 1) + febi(n - 2);
    }
    f[n] = result;
    return result;
}

febi(5)
console.log(f);