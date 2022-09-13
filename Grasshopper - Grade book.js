function getGrade(s1, s2, s3) {
    let rez = (s1 + s2 + s3) / 3

    if (rez >= 90 && rez <= 100) {
        return 'A'
    } else if (rez >= 80 && rez < 90) {
        return 'B'
    } else if (rez >= 70 && rez < 80) {
        return 'C'
    } else if (rez >= 60 && rez < 70) {
        return 'D'
    } else if (rez >= 0 && rez < 60) {
        return 'F'
    }
}

console.log(getGrade(91, 95, 93));