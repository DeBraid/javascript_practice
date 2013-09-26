//practice with objects.
// here an array of hashes

var myCats = [
  {name: "Lizzie", 
    age: 18},
  {name: "Daemon",
    age: 1}
];

// here we a numerical while loop (counting loop?)
// for i < 6, print the name and age of each and add to the string.
for (var i = 0; i < myCats.length; i++) {
  var myCat = myCats[i];
  console.log(myCat.name + " is " + myCat.age + "years old!");
}
// OBJECTS as ARGS

var lizzieTheCat = {
  age: 18,
  furColor: "gray",
  likes: ["catnip", "milk"],
  birthday: {"month": 7, "day": 17, year: 1994}
}

function describeCat(cat) {
  console.log("This cat is " + cat.age + "years old, with" + 
        cat.furColor );
}
// passing an object ( var = lizzie ) to a function (print out characterists)
describeCat(lizzieTheCat);

