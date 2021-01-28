let word = document.getElementById('word');
let check = document.getElementById('check');
let palindrome = document.getElementById('palindrome');
let vowels = document.getElementById('vowels');

let counter = 0;
let wordToCompare = '';

check.onclick = ()=>{
    
    let wordValue= word.value.toLowerCase();

    if(wordValue ===''){
        return alert("Please enter a word")};

    for(let i= wordValue.length-1; i>= 0; i--){
        wordToCompare += wordValue[i];

        if(wordValue[i] == 'a'|| wordValue[i] == 'e' || wordValue[i] == 'i' || wordValue[i] == 'o' || wordValue[i] == 'u' ){
            counter++;
        }
    }

    vowels.innerText = counter;

    if(wordValue.toString() == wordToCompare){
        palindrome.innerText = 'True';
    } else{
        palindrome.innerText = 'False';

    }

    wordToCompare='';
    counter = 0;
}
