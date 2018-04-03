// All Rights To Nidal Faurass
function calc() {
    first = document.LoveTester.name1.value.toUpperCase();
    firstlength = document.LoveTester.name1.value.length;
    second = document.LoveTester.name2.value.toUpperCase();
    secondlength = document.LoveTester.name2.value.length;
    var LoveCount = 0;

    for (Count = 0; Count < firstlength; Count++) {
        letter1 = first.substring(Count, Count + 1);
        if (letter1 == 'E') LoveCount += 2;
        if (letter1 == 'T') LoveCount += 2;
        if (letter1 == 'A') LoveCount += 2;
        if (letter1 == 'O') LoveCount += 2;
        if (letter1 == 'I') LoveCount += 2;
        if (letter1 == 'N') LoveCount += 2;
        if (letter1 == 'S') LoveCount += 2;
        if (letter1 == 'H') LoveCount += 2;
        if (letter1 == 'R') LoveCount += 1;
        if (letter1 == 'D') LoveCount += 2;
        if (letter1 == 'L') LoveCount += 2;
        if (letter1 == 'C') LoveCount += 2;
        if (letter1 == 'U') LoveCount += 2;
        if (letter1 == 'M') LoveCount += 2;
        if (letter1 == 'W') LoveCount += 1;
        if (letter1 == 'F') LoveCount += 2;
        if (letter1 == 'G') LoveCount += 2;
        if (letter1 == 'Y') LoveCount += 2;
        if (letter1 == 'P') LoveCount += 2;
        if (letter1 == 'Q') LoveCount += 2;
        if (letter1 == 'Z') LoveCount += 2;
        if (letter1 == 'ن') LoveCount += 2;
        if (letter1 == 'ض') LoveCount += 2;
        if (letter1 == 'ا') LoveCount += 1;
        if (letter1 == 'ل') LoveCount += 2;
        if (letter1 == 'ف') LoveCount += 2;
        if (letter1 == 'و') LoveCount += 2;
        if (letter1 == 'م') LoveCount += 3;
        if (letter1 == 'ث') LoveCount += 2;
        if (letter1 == 'ع') LoveCount += 3;
        if (letter1 == 'خ') LoveCount += 2;
        if (letter1 == 'ج') LoveCount += 2;
    }

    for (Count = 0; Count < secondlength; Count++) {
        letter2 = second.substring(Count, Count + 1);
        if (letter1 == 'E') LoveCount += 2;
        if (letter1 == 'T') LoveCount += 2;
        if (letter1 == 'A') LoveCount += 2;
        if (letter1 == 'O') LoveCount += 2;
        if (letter1 == 'I') LoveCount += 2;
        if (letter1 == 'N') LoveCount += 2;
        if (letter1 == 'S') LoveCount += 2;
        if (letter1 == 'H') LoveCount += 3;
        if (letter1 == 'R') LoveCount += 2;
        if (letter1 == 'D') LoveCount += 2;
        if (letter1 == 'P') LoveCount += 2;
        if (letter1 == 'B') LoveCount += 2;
        if (letter1 == 'V') LoveCount += 2;
        if (letter1 == 'K') LoveCount += 2;
        if (letter1 == 'J') LoveCount += 3;
        if (letter1 == 'X') LoveCount += 2;
        if (letter1 == 'Q') LoveCount += 2;
        if (letter1 == 'Z') LoveCount += 2;
        if (letter1 == 'ن') LoveCount += 2;
        if (letter1 == 'ض') LoveCount += 2;
        if (letter1 == 'ا') LoveCount += 2;
        if (letter1 == 'س') LoveCount += 3;
        if (letter1 == 'م') LoveCount += 2;
        if (letter1 == 'ث') LoveCount += 2;
        if (letter1 == 'ع') LoveCount += 2;
        if (letter1 == 'خ') LoveCount += 2;
        if (letter1 == 'ج') LoveCount += 1;
    }

    amount = 0;
    if (LoveCount > 0) amount = 5 - ((firstlength + secondlength) / 2)
    if (LoveCount > 2) amount = 10 - ((firstlength + secondlength) / 2)
    if (LoveCount > 4) amount = 20 - ((firstlength + secondlength) / 2)
    if (LoveCount > 6) amount = 20 - ((firstlength + secondlength) / 2)
    if (LoveCount > 8) amount = 30 - ((firstlength + secondlength) / 2)
    if (LoveCount > 10) amount = 50 - ((firstlength + secondlength) / 2)
    if (LoveCount > 12) amount = 60 - ((firstlength + secondlength) / 2)
    if (LoveCount > 14) amount = 70 - ((firstlength + secondlength) / 2)
    if (LoveCount > 16) amount = 80 - ((firstlength + secondlength) / 2)
    if (LoveCount > 18) amount = 90 - ((firstlength + secondlength) / 2)
    if (LoveCount > 20) amount = 100 - ((firstlength + secondlength) / 2)
    if (LoveCount > 22) amount = 110 - ((firstlength + secondlength) / 2)
    if (firstlength == 0 || secondlength == 0) amount = "0";
    if (amount < 0) amount = 0;
    if (amount > 99) amount = 99;

    document.LoveTester.output.value = amount + "%";

}
