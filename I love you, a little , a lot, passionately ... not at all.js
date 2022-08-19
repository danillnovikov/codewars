// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    let arr = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly',];
    return console.log(arr[nbPetals % 6]);
}

howMuchILoveYou(0);
howMuchILoveYou(1);
howMuchILoveYou(2);
howMuchILoveYou(5);
howMuchILoveYou(6);