function explode(str) {
    return str.split('').map((item) => {
        let string = '';
        for (let i = 0; i < +item; i++) {
            string += item;
        }
        return string;
    }).join('')
}

console.log(explode('312'));
