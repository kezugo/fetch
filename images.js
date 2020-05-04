const arrayCompressor = a => a.map(row => {
    let prev=null, count=0, cc='';
    let result = row.reduce((acc, v, i) => {
        if(prev && prev != row[i]) {
            acc = acc + count + ',' + prev + ':';
            prev = v;
            count = 1;
        } else {
            prev = row[i];
            count++;
        }
        return acc;
    }, '')
    return result + count + ',' + row[row.length-1];
});

const x = arrayCompressor([
    [1,1,1,1,3,4,5,4,7,7,7,9,9],
    [3,3,3,1,1,1,5,5,5,7,7,9,9],
]);

console.log(x);