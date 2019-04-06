function findPairs(numberArray) {

  //numberArray = [1,4,5,1,11,1,2,5,2]
    
   var numberOfPairs = 0;
    
   for (var i = 0; i < numberArray.length; i++) {
        for (var j = i + 1; j < numberArray.length; j++) {
            if (numberArray[i] == numberArray[j]) {
                numberArray.splice(i, 1);
                numberArray.splice(j - 1, 1);
                numberOfPairs++;
                i = 0;
                j = 0;
            }
        }
    }

    return numberOfPairs;
    
    //numberOfPairs = 3;

}
