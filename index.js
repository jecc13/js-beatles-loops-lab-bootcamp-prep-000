function theBeatlesPlay(musicians, instruments) {
  var sentenceArray = [];
  var musIns;
  for (var i = 0; i < musicians.length; i++) {
    //stuff
    musIns = musicians[i] + " plays " + instruments[i];
    sentenceArray.push(musIns);
  }
  return sentenceArray;
}

function johnLennonFacts(facts) {
  var exclaimArray = [];
  j = 0;
  while (j < facts.length) {
    superFact = facts[j] + "!!!"
    exclaimArray.push(superFact);
    j--;
  }
  return exclaimArray;
}

function iLoveTheBeatles(number) {
  var loveArray = [];
  
  
  return loveArray;
}



function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done';  
}