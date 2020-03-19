function isCar(...cars) {
    const result = cars.reduce((acc, car) => acc + car, 0);
    return result === cars.length || result === 0;
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));
