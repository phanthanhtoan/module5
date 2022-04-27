let fibonacci: number[];

function listFibonacci(num: number) {
    for (let i: number = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2];
    }
    return fibonacci;
}
console.log(listFibonacci(10));

