// add solution here
function theBeatlesPlay(musicians,instruments){
  var newArray = []
  for(let i=0; i< musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var newArray = []
  var i = 0
  while (facts[i] <= facts.length){
    newArray.push(facts[i] + `"!!!"`)
  }
  return newArray
}
