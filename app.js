import fs from "fs";
import { uniq, reverse, toUpper } from './lodashModule.js';
import { join, filter, write } from './utils.js';

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) { throw err };

    const wordsArr = data.replace(/[!.,\/\\\-;:/\n/\r]/g, '').split(' ');
    const uniqWords = uniq(wordsArr);
    // Task 1:
    write('res.txt', 'The file content is:\n' + data);
    // Task 2:
    write('res.txt', 'The file Length is:\n' + wordsArr.length);
    // Task 3:
    write('res.txt', 'The reverse content is:\n' + join(reverse(wordsArr)));
    // Task 4:
    write('res.txt', 'The uniq words in the data are: \n' + join(uniqWords));
    // Task 5:
    write('res.txt', 'The amount of uniq words at the data is: \n' + uniqWords.length);
    // Task 7:
    write('res.txt', 'The upper uniq words in the data are: \n' + toUpper(join(uniqWords)));
    // Task 8:
    write('res.txt', 'The uniq words long that 5 chars in the data are: \n' + join(filter(uniqWords, (d) => d.length > 5)));
    // Task 9:
    write('res.txt', 'Vowels Count:');
    const countVowels = uniqWords.map(word => {
        return { word, vowelsCount: word.match(/[aeiou]/gi).length };
    });
    write('res.txt', countVowels);
});

