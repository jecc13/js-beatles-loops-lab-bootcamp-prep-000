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

function 