class SortingAlgorithms {
    
    

    bubbleSort(array){
        const swaps = [];
        for (let i = 0; i < array.length; i++) {

            // Last i elements are already in place
            for (let j = 0; j < array.length -i-1; j++) {
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


}

export {
    SortingAlgorithms
}