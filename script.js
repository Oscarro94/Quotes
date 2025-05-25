const quote = document.getElementById('quote');
const quoteBtn= document.getElementById('quote-btn');
let userName = null;

const generateQuote = () =>{

    if(!userName){
        userName = prompt("Hi there! What's your name?") || "Friend"; 
    }
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './quotes.json');

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.responseText);
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            quote.innerHTML = `<strong>${userName}</strong>, This quote is for you: <br><br>
            "${randomQuote.quote}" <br><br>
        <span style="color: rgb(10, 64, 126); font-weight: bold;">${randomQuote.author}</span>`;
            }else{
                quote.innerHTML ='Something went wrong';
            }
};

xhr.send();

};

quoteBtn.addEventListener('click', generateQuote);
document.addEventListener('DOMContentLoaded', generateQuote);

