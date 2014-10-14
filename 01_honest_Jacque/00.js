/**** counts and sorts all the words in file ****/
/**** let's see how honest is Jacque Prevert ****/

// Here we're checking to make sure we've typed three things (the last being the filename)
if (process.argv.length < 3) {
  console.log('Oops, you forgot to pass in a text file.');
  process.exit(1);
}

// The 'fs' (file system) module allows us to read and write files
// http://nodejs.org/api/fs.html
var fs = require('fs');
var filename = process.argv[2];

// Read the file as utf8 and process the data in the function analyze
fs.readFile(filename, 'utf8', analyze);

function analyze(err, data) {
  if (err) {
    throw err;
  }

  //split the string, get all the words
  var words = data.split(/[\s\n]+/i);

  // create an empty array that will hold frequency of each word
  var freq = [];
  //for every word in array
  words.forEach(function(w) {
    //if we already have it in and counting, add 1+
    if (freq[w]) freq[w]++; 
    //if didnt have it before, add to array, frequency 1
    else freq[w] = 1;
  });

  //sort the words, showing the most frequent ones on top
  var top = Object.keys(freq).sort(function(a,b){
    return freq[b] - freq[a];
  });

  
  console.log(top );
  console.log(" frequency : ")
  console.log(freq);

}