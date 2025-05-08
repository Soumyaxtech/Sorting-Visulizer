class SortingAlgorithms {
    
    

    bubbleSort(array){
        const swaps = [];
        for (let i = array.length-1; i >0; i--) {

            // Last i elements are already in place
            for (let j = 0; j <= i-1; j++) {
                // Checking if item in the present iteration is greater than next iteration
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
}

export {
    SortingAlgorithms
}