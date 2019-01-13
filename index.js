const permAlone = str => {
    const allPermutation = [];
    const arrFromStr = str.split('');

    const getAllPermutations = (arr, n = arr.length) => {
        if (n === 1) {
            allPermutation.push(arr.join(''));
        } else {
            for (let i = 0; i < n - 1; i++) {
                getAllPermutations(arr, n - 1);
                if (n % 2 === 0) {
                    [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
                } else {
                    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
                }
            }
            getAllPermutations(arr, n - 1);
        }
    }

    getAllPermutations(arrFromStr);

    const isContainsRepeated = str => {
        const re = /(.)\1+/;
        return str.search(re) === -1;
    }

    return allPermutation.filter(isContainsRepeated).length;


}
console.log(permAlone('aab'))
