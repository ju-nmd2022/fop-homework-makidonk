const array = ["😊", "😂", "❤️", "😍", "👌"];

function randomizing(array) {
  for (i = 0 ; i < array.length; i++) {
    const randomPlace = Math.floor(Math.random()*array.length);
    array[i] = array[randomPlace];
  }
  return(array);
}
console.log(randomizing(array));