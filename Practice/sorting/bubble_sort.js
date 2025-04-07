// Bubble Short:- It shorts swaps items if they are in wrong order. 
// It moves the largest item to the last one by one.
// Time complexity: O(n^2)
// Space complexity: O(1)

const arr = [7, 3, 5, 8, 4, 9, 1, 2, 6];

function selectionSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) { // -j to avoid last items
            if (arr[i] > arr[i + 1]) {

                // regular swap
                // let temp = arr[i];
                // arr[i] = arr[i + 1];
                // arr[i + 1] = temp;

                // shortcut swap
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
        console.log(arr); // To see changes
    }
    return arr;
}

function main() {
    console.log(selectionSort(arr));
}

main();