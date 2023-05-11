/*
    JS is loose typed like python

    python declaration
        num = 1  -num is a integer
        letter = A  -letter is a string /char
        
        
    JS declaration
        variables:

        var num = 1;

        or      -num is a integer
        let num = 1;

        var letter = 'A';

        or      -letter is a char

        let letter = 'A'


        Constants:

        const NUM2=10;      -num2 is a integer that cannot change value


*/

//Declare a variable to hold a name

let name = 'Pac-Man';

// display the value of name to the console
console.log(`${name} evades ghosts on board of dots and fruit`);

// JC objects - store  values in value/key pairs

let inky = {
    name:'Inky',
    color:'Blue'
};
let pinky = {
    name:'Pinky',
    color:'Pink'
};
let binky = {
    name:'Blinky',
    color:'Red'
};
let clyde = {
    name:'Clyde',
    color:'Orange'
}

console.log(`${inky.name} is ${inky.color}`);

let values = [1,2,3,4,5];
let group2Teams = [];

//use .push() to add data to array

group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Alpha');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta');


// Display the info
console.log(values);

console.log(group2Teams);


/*

    //use Relational operators to implement the decesions

    > - greater than
    < - less than
    >=
    <=
    == - equal to (loose comparision 1=='1' -True)
    === -  is equal to (does not include the data type, strict comparision 1==='1' - false)
    !=
    ! - logical not (flips the value of beelean)
    &&- logical And
    || - logical OR

    //single alternative 
    if
    {
        statement(s);
    }

    //Dual alternavtive
    else
    {
        statement(s);
    }

    //multiple alternative
    if
    {
        statement(s);
    }
    else if 
    {
        statement(s);
    }
    else if
    {
        statement(s);
    }

    switch(variable)
    {
        case value:
            statement(s);
            break;
        case anotherValue:
            statement(s);
            break;
        default:
            statement(s);
            break;

    }



looping
    pretest and post test

    while - pretest

    for - pretest

    do-while -posttest
*/
for(var i = 0; i<group2Teams.length; i++)
{
    console.log(group2Teams[i])
}