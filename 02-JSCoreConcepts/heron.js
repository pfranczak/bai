// boki trójkąta
const a = 3;
const b = 4;
const c = 5;
// h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

function heron (a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 0;
    }

    const p  = 0.5 * (a + b + c);

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

let foo = () => `Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${heron(a, b, c)}.`;

console.log( foo() );
