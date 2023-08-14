import fs from 'fs';

const join = (d, p = ' ') => {
    return d.join(p);
}
const filter = (d, cb) => {
    return d.filter(cb);
}
function write(fileName, data) {
    if (typeof data === 'string') {
        fs.appendFileSync(fileName, data + '\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    } else {
        fs.appendFileSync(fileName, '[\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        data.forEach(d => {
            fs.appendFileSync(fileName, `{ word: '${d.word}', vowelsCount: ${d.vowelsCount}}\n`, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        });
        fs.appendFileSync(fileName, ']\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
}

export { join, filter, write };