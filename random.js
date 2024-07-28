//math.random ranges[0-1] means includes and ranges till 1 but exclude 1 (ie 0-0.9999)
//math.floor round the decimal num.



// Prompt the user to enter names separated by commas
var input = prompt("Enter names separated by commas:");

// Split the input string into an array of names
var namesArray = input.split(',');

// Trim any extra whitespace from each name
for (var i = 0; i < namesArray.length; i++) {
    namesArray[i] = namesArray[i].trim();
}

function whopay(names){

    var numofppl=names.length;
    var randompos=Math.floor(Math.random() * numofppl);
    var randomppl=names[randompos];

    return randomppl + " is going to buy lunch today!";
}
var res=whopay(namesArray);
alert(res)














// // Display the array of names
// console.log(namesArray);
// alert("Names entered: " + namesArray.join(', '));
