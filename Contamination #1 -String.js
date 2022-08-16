// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.


function contamination(text, char) {
    return text.split('').map(item => item = char).join("")
}

console.log(contamination('abc', 'z'));
console.log(contamination('', 'z'));
console.log(contamination('_3ebzgh4', '&'));
console.log(contamination('//case', ' '));
