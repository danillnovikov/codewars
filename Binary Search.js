function binarySearch(arr, elem) {
    let start = 0;
    let finish = arr.length;
    let mid;

    while (start <= finish) {
        mid = Math.round((finish - start) / 2 + start);

        if (elem === arr[mid]) {
            return mid;
        } else if (elem < arr[mid]) {
            finish = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 15)); 
