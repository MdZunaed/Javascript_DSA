
const arr = [7, 3, 5, 8, 4, 9, 1, 2, 6];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;  // Base case

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));   // Sort left half
    const right = mergeSort(arr.slice(mid));     // Sort right half

    return merge(left, right);  // Merge sorted halves
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare and push smaller values
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Push any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}


function main() {
    console.log("Before:", arr);
    console.log("After:",mergeSort(arr));
}

main();
