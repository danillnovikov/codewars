function feast(beast, dish) {
    if ((dish[0] == beast[0]) && (dish[dish.length - 1] == beast[beast.length - 1])) {
        return true
    } else {
        return false
    }

    // console.log(dish[0]);
    // console.log(beast[0]);
    // console.log(dish[dish.length - 1]);
    // console.log(beast[beast.length - 1]);
}

console.log(feast("great blue heron", "garlic naan")); //true
console.log(feast("brown bear", "bear claw")); //false