// Selection Short:- It finds the smallest item and swaps to beggining. 
// Time complexity: O(n^2)
// Space complexity: O(1)

const arr = [7, 3, 5, 8, 4, 9, 1, 2, 6];

function selectionSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        let minIndex = j
        for (let i = minIndex + 1; i < arr.length; i++) { // -j to avoid last items
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        // shortcut swap
        [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];

        // regular swap
        // let temp = arr[j];
        // arr[j] = arr[minIndex];
        // arr[minIndex] = temp;
        
        console.log(arr); // To see changes
    }
    return arr;
}

function main() {
    console.log(selectionSort(arr));
}

main();