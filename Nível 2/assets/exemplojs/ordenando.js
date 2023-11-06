// Função Swap( Troca os valores de duas posições)
const swap = (arr, pos1, pos2) => {[arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]};

//Função Shuffle( Embaralha um vetor)

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue; 
    }
    return array;
}

//Função bubble_sort
const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  };

//Função selection_sort
const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
      }
    }
  };

//Função Quick_sort
const quick_sort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;
    const pivotIndex = partition(arr, start, end);
    quick_sort(arr, start, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, end);
  };

//Função particionamento-quick sort
const partition = (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
  };
  