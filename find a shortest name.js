function findShort(s){
  var words=s.split(" ");
  var shortest=words[0].length;
  for(var i=0;i<words.length;i++){
  if(words[i].length < shortest){
    shortest=words[i].length;
  }
  }
  return shortest;
} 