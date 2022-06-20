const symbols = ['.', '@', '!', '/', ':', ',', '#', '$', '\''];
const isSymbol = char => symbols.includes(char);
const hl = symbol => `<span class="accent">${symbol}</span>`;
const uhl = symbol => `<span class="text">${symbol}</span>`;

function highlightSymbols(str) {
    Array.from(str) // for every character
        .filter((ch) => isSymbol(ch)) // gets all symbols
        .filter((v, i, a) => a.indexOf(v) === i) // keeps only unique ones
        .forEach(ch => str = str.replaceAll(ch, hl(ch))); // highlights and replaces them
    return str;
}