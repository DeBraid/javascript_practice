var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
// Write your code below!

for (i=0; i <= array.length; i++){
    if (array[i] > largest) {
      largest = array[i];
    } 
    else if (largest < array[i+1]) {
        largest = array[i+1];
    }
}
    