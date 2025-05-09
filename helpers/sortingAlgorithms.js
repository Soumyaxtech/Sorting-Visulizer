class SortingAlgorithms {
    
    

    bubbleSort(array){
        const swaps = [];
        for (let i = array.length-1; i >0; i--) {
            for (let j = 0; j <= i-1; j++) {
                if(array[j]>array[j+1]){
                    let temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                    swaps.push({ firstPosition: j, lastPosition: j+1});
                }
                
            }
            
        }
        return swaps;
    }

    selectionSort(array) {
        const swaps=[];
        let min;
        for (let i = 0; i < array.length-1; i++) {
            min=i;
            for (let j = i+1; j < array.length; j++) {
                if(array[j]<array[min]){
                    min=j;
                }
                
            }
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
            swaps.push({ firstPosition: min, lastPosition: i});
            
        }
        return swaps;
    }

    insertionSort(array){
        const swaps=[];
        for(let i=0;i<=array.length-1;i++){
            let j=i;
            while(j>0 && array[j-1]>array[j]){
                let temp=array[j-1];
                array[j-1]=array[j];
                array[j]=temp;
                swaps.push({ firstPosition:j-1, lastPosition:j});
                j--;
            }
        }
        return swaps;
    }

    quickSort(array) {
        const swaps = [];
    
        const partition = (arr, low, high) => {
            let pivot = arr[high];
            let i = low - 1;
    
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    swaps.push({ firstPosition: i, lastPosition: j });
                }
            }
    
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            swaps.push({ firstPosition: i + 1, lastPosition: high });
            return i + 1;
        };
    
        const quickSortRecursive = (arr, low, high) => {
            if (low < high) {
                let pi = partition(arr, low, high);
                quickSortRecursive(arr, low, pi - 1);
                quickSortRecursive(arr, pi + 1, high);
            }
        };
    
        quickSortRecursive(array, 0, array.length - 1);
        return swaps;
    }
    
}

export {
    SortingAlgorithms
}