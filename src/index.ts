const world = 'World';

export function interprilatingStrings(who: string = world): string {
    // Interprilating strings
    return `Hello ${who}!`;
} 

export function advancedMathmatics(a: number, b: number, c: number ): number {
    // Using advanced math method
    return a**2 * b / Math.sqrt(c);
}

export function tuples(a: string, b: number): [string, number] {
    // Tuples can be used in typescript
    return [a, b];
}

console.log(interprilatingStrings());
console.log(advancedMathmatics(3, 2, 1));
console.log(tuples('Benson', 21));
