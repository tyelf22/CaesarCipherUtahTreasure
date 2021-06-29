const solveBtn = document.querySelector('#solveBtn')
solveBtn.addEventListener("click", decoder)


//const givenKey = "FKMUHRJCQEITHK"
//const givenSentence = "For where your treasure is there your heart will also be"
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function decoder(key, sentence){
    console.log('connected')
    sentence = document.querySelector('#sentenceTxt').value
    key = document.querySelector('#keyTxt').value
    let answerTxt = document.querySelector('#answerTxt')

  let answer = []
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let splitKey = key.toLowerCase().split('')
  let combined = sentence.replace(regex, '').toLowerCase().split(' ').join('').split('')
  let uniq = [...new Set(combined)];
  alphabet.forEach(letter => {
    if(!uniq.includes(letter)){
      uniq.push(letter)
    }
  })
  splitKey.forEach(letter => {
    let indexOfUniqSentence = uniq.indexOf(letter)
    answer.push(alphabet[indexOfUniqSentence])
    
  })


  answerTxt.innerHTML = answer.join('')

  if(answerTxt.textContent == "asthecrowflies"){
      answerTxt.style.color = 'lightGreen'
  }else {
    answerTxt.style.color = 'white'
  }
}
