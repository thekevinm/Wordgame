const words = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var randNum = Math.floor(Math.random() * words.length);
var chooseWords = words[randNum];
var spaces = [];
var blanksAndSuccesses = [];
console.log(chooseWords);

// let docSpaces = document.getElementById('spaces');

var generateSpaces = () => {
  for (var i = 0; i < chooseWords.length; i++) {
    spaces.push('_'); 
  }
  return spaces;
}
console.log(generateSpaces());

document.addEventListener('keypress', (event) => {
  var keyword = String.fromCharCode(event.keyCode);
  // console.log(chooseWords.indexOf(keyword)); 
  if(chooseWords.indexOf(keyword) > -1) {
    // console.log(true);
  }
  // console.log(keyword);
  spaces[chooseWords.indexOf(keyword)] = keyword;
  console.log(spaces);
});

generateSpaces();