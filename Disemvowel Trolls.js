function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!')); // Ths wbst s fr lsrs LL!
