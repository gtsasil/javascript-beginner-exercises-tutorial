// Your code here:
function milkSong() {  
    var bottles ="bottles";
    for (counter = 99; counter >= 0; counter--){
        if (counter == 0) {
            console.log("");
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");

        }else if (counter == 1) {
            bottles = 'bottle';
            console.log("");
            console.log(counter + " "+ bottles +" of milk on the wall, " + counter + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        }else{
            console.log("");
            console.log(counter +" "+ bottles +" of milk on the wall, " + counter + " bottles of milk.");
            //console.log("Take one down and pass it around, " + (counter - 1) + " bottles of milk on the wall.");

        }
    }
}
  console.log(milkSong());