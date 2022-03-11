export const identity = (x) => x;
export const map = (fn) => (xs) => xs.map(fn);
export const divide = (x, y) => x / y;
export const filter = (xs, fn) => xs.filter(fn);
export const first = (xs) => xs[0];
