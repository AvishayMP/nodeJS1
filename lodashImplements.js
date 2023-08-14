export const uniq = (data) => {
    const retArr = [];
    data.forEach(cell => {
        if (!retArr.find(cell)) {
            retArr.push(cell);
        }
    });
    return retArr;
}
export const reverse = (data) => {
    const retArr = [];
    data.forEach(d=>retArr.push(d.pop()));
    return retArr;
}
export const toUpper = (data) => {
    return data.toUpper();
}