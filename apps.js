

let friends = ['Beth', 'Tiphani', 'Abby', 'Brianna', 'Diana'];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    for (let j = 5; j > 0; j--) {

        if (j === 1) {
            let finalLine = ` 1 line of code in the file, 1 line of code; ${friends[i]} strikes it out, clears it all out, no more lines of code in the file`;
            console.log(finalLine);
        }

        else if (j === 2) {
            let lineTwo = ` ${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, 1 line of code in the file`;
            console.log(lineTwo);
        }

        else {
            let lyric = ` ${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file`;
            console.log(lyric);
        }
    }

}