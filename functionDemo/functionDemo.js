function printHello()
{
    // display a message in the id nameed 'printHello'
    document.getElementById("printHello").innerHTML = "Hello There";
}

// call the printable printHello

printHello();

// this function accepts two values as parameters

function addition(a,b)
{
    // add a variable to hold the value
    var s = a+b;

    //return the calculated value

    return s;

}

// call on the function to store the result in a variable

var sum =  addition(3,5);

// place the sum into the output id named addition in html

document.getElementById("addition").innerHTML = "3 +5 = <b>" + sum + "</b>";

// JS Build in functions

let longDecimalValue = 2313.327896278;

let roundedDown = Math.floor(longDecimalValue);

let roundedUp = Math.ceil(longDecimalValue);

document.getElementById("rounded").innerHTML = longDecimalValue + " rounded up using  .celi():<b>" + roundedUp + "</b> <br>" + longDecimalValue +
" rounded down using . floor():<b>" + roundedDown + "</b>";


// array of strings 

var fruits = ["Apple","Orange","Banana","Cherry","Strawberry","Mango"];

var output = "[";

// use loop acess items in the array and to add to tthe output string

for (var i  = 0; i < fruits.length; i++)
{
    if (!i == fruits.length -1)
        output += fruits[i] + ",  ";

    else 
        output += fruits[i] + "]  ";
} 

document.getElementById('arrayContents1').innerHTML = output;

// make empty array to generate random numbers to populate
var numbers = [];
//use .floor and .random() to generate a sereis of values

var count = Math.floor(Math.random()*11);

for (var i = 0 ; i <= count; i++)
{
    numbers.push(Math.floor(Math.random() * 100));

}
output = "[";

numbers.forEach((number, index) => {
    if (index != numbers.length -1)
        output += numbers[index]+",";

    else 
    output += numbers[index]+"]";

});

document.getElementById("arrayContents2").innerHTML = output;


//use .map()
var timesThree = numbers.map(function(number){
    return number * 3;
})

output = "[";

timesThree.forEach((number, index) => {
    if (index != timesThree.length -1)
        output += number+",";

    else 
    output += number+"]";

});

document.getElementById("arrayContents3").innerHTML = output;


