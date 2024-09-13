//votre code ici
let result = '';
export default function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        result += i + ' '; 

    }
    return result.trim();
}
console.log(printNumbers(5));

