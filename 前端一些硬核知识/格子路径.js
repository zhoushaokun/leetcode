function A(n) {
    let res = 1;
    while (n >= 1) {
        res = n*res;
        n --;
    }
    return res;
}
function fact(n, k) {
    let res = 1;
    let i = 0;
    while(i < k) {
        res = res*n;
        n --;
        i ++;
    }
    return res/A(k);
}

let res = 0;
for (let j = 0; j < 9; j ++) {
    console.log(j+j+1, j, fact(j+1+j,j))
    res = res + fact(j + 1 + j, j);
}
console.log('res', fact(18,9)-res)

// console.log('fact(18, 9)/10', fact(18, 9)/10)
// console.log('fact(18, 9)/10', fact(18, 9)-fact(9,5)+fact(16,7)*2)
console.log('fact(9,5)*fact(8,3)', fact(9,5)*fact(8,3))
console.log('fact(11,5)*fact(6,3)', fact(11,5)*fact(6,3))
console.log('fact(11,5)*fact(6,3)', fact(14,7)*fact(3,1))