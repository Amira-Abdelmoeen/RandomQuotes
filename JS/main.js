var quotes =[
    {
        quote: "Be yourself; everyone else is already taken.",
        writer: "Oscar Wilde"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        writer: "Marilyn Monroe"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        writer: "Albert Einstein"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything",
        writer: "Mark Twain"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        writer: "Elbert Hubbard"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        writer: "Oscar Wilde"
    },
    {
        quote: "We accept the love we think we deserve",
        writer: "Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        writer: "Oscar Wilde, The Happy Prince and Other Stories"
    },
    {
        quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
        writer: "Narcotics Anonymous"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        writer: "Andre Gide, Autumn Leaves"
    },
 ]
 
 var randomNums=[]
 
 function randomQuotes(){
    if(randomNums.length == quotes.length){
        console.log(randomNums)
        randomNums.splice(0,randomNums.length - 1)
    }
 
    var randomNum=Math.round(Math.random()* (quotes.length-1));
 
    while (randomNums.includes(randomNum)) {
        randomNum=Math.round(Math.random()* (quotes.length-1));
    }
    
    randomNums.push(randomNum);
 
    document.getElementById("quote").innerHTML=quotes[randomNum].quote
    document.getElementById("writer").innerHTML=quotes[randomNum].writer
 }

function copyText() {
   var quoteText = document.getElementById("quote").innerText;
   var writerText = document.getElementById("writer").innerText;

   // Combine the text from both elements
   var combinedText = `"${quoteText}"\n-- ${writerText}`;

   // Create a textarea element to facilitate copying
   var textarea = document.createElement("textarea");
   textarea.value = combinedText;
   document.body.appendChild(textarea);

   // Select the text in the textarea
   textarea.select();

   // Copy to the clipboard
   document.execCommand("copy");

   // Remove the textarea
   document.body.removeChild(textarea);

   alert("Text has been copied to the clipboard");
}

function shareOnWhatsApp(){
   var quoteText = document.getElementById("quote").innerText;
   var writerText = document.getElementById("writer").innerText;

   // Combine the text from both elements
   var combinedText = `"${quoteText}"\n-- ${writerText}`; 

   // Encode the text for the URL
   var encodedText = encodeURIComponent(combinedText);

   // Create the WhatsApp share link
   var whatsappLink = `https://api.whatsapp.com/send?text=${encodedText}`;

   // Open the link in a new window or tab
   window.open(whatsappLink, '_blank');
}

function shareOnTwitter(){
   var quoteText = document.getElementById("quote").innerText;
   var writerText = document.getElementById("writer").innerText;

   // Combine the text from both elements
   var combinedText = `"${quoteText}"\n-- ${writerText}`;

   // Encode the text for the URL
   var encodedText = encodeURIComponent(combinedText);

   // Create the Twitter share link
   var twitterLink = `https://twitter.com/intent/tweet?text=${encodedText}`;

   // Open the link in a new window or tab
   window.open(twitterLink, '_blank');
}
