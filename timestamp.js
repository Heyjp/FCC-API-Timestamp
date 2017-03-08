var x = new Object();
var y = new Date();

module.exports = function (dateString) {

 // use REGEX to remove all the spaces and symbols from the string.

var removeSymbols = dateString.replace(/[\W]/g, " "); // removes all symbols and whitespace and replaces with whitespace.
var removeSpaces = removeSymbols.replace(/\s\s+/g, ' '); // removes multiple spaces and replaces with a single space.
var theDate  = removeSpaces.trim() // Should be left with a string without any symbols and multiple white spaces.

var dateArray = removeSpaces.split(" "); // with only one space left can safely split the removeSpaces to get a natural date.


var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var shortMonths = [];


var day, month, year;

// If theDate contains no alphabet chars, or symbols/punctuation it then equals a unix time stamp.
// Convert the unix date into a natural date (maybe make it a date object and extract data from there.)

// UNIX DATES WORKING

if (removeSpaces.match(/[a-zA-Z]/gi) === null) { // If removespaces does not have any alphabet characters then it is unix or null;

  console.log("Unix Date Triggered");
  var a = new Date(theDate * 1000);
  year = a.getFullYear();
  month = monthArray[a.getMonth()];
  day = a.getDate();
  x.unix = theDate; // If the date is a unix you can use Date.parse() not recommended thought.
  x.natural = month + " " + day + ", " + year;  // If the date is natural string use Date.now() to find unix date takes a date object and returns the milliseconds.

  return x;
}
 else if (removeSpaces.match(/[a-zA-Z]/g)) {


// Figure out how to take the first 3 letters and have that pass;
  var z = monthArray.forEach(function (element, index) {
      shortMonths.push(element.slice(0, 3));
      console.log(shortMonths);
      if (dateArray.indexOf(element.toLowerCase()) !== -1 || dateArray.indexOf(element) !== -1) {
        month = element;
        return element;
    } else if (dateArray.indexOf(shortMonths[index].toLowerCase()) !== -1 || dateArray.indexOf(shortMonths[index]) !== -1 ) {
      month = monthArray[index];
      return month;
    }
});

// Method for going through the dateArray to break down what is a month, day and year amongst the split string.
// Find more examples of natural dates e.g 12.04.1988
for (var i = 0; i < dateArray.length; i++) {
  if (dateArray[i].length > 2 && parseInt(dateArray[i]) > 1970) {
  year = dateArray[i];
} else if (dateArray[i].length <= 2 && dateArray[i] > 12) {
    day = dateArray[i];
  } else if (dateArray[i].length === 2 && dateArray[i+1].length === 2 && dateArray[i+1] <= 12) {
      month = dateArray[i];
      day = dateArray[i+1];
  }
}

// Creating the date object so that it can be transferred to unix;
y.setDate(day);
y.setMonth(monthArray.indexOf(month));
y.setFullYear(year);
var unix = y.getTime() / 1000;

// Putting the date object into an object to be returned as json
x.unix =  Math.round(unix);
x.natural = month + " " + day + ", " + year;

return x;
} else {
  x.unix = "null";
  x.natural = "null";
}
return x;
}
