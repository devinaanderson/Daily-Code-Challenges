// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

// import Math;

function century(year) {
    return Math.ceil(year / 100);
}
  
console.log(century(2000));

// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to miliseconds.

// #####Example:

// past(0, 1, 1) == 61000

function past(h, m, s) {
    return ((h * 60*60*1000) + (m * 60*1000) + (s * 1000))
}

console.log(past(0, 1, 1))