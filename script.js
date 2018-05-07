$(document).ready(function(){
  getQuote();

  var randomQuote, randomNum, randomAuthor;
  
  function getQuote() {
  //   var quotes = [{
  //     quote: "Don't cry because it's over, smile because it happened.",
  //     author: "Dr. Seuss"
  //   },
  //   {
  //     quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  //     author: "Marilyn Monroe"
  //   },
  //   {
  //     quote: "Be yourself; everyone else is already taken.",
  //     author: "Oscar Wilde"
  //   },
  //   {
  //     quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  //     author: "Albert Einstein"
  //   },
  //   {
  //     quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  //     author: "Bernard M. Baruch"
  //   },
  //   {
  //     quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  //     author: "Dr. Seuss"
  //   },
  //   {
  //     quote: "In three words I can sum up everything I've learned about life: it goes on.",
  //     author: "Robert Frost"
  //   },
  //   {
  //     quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  //     author: "J.K. Rowling"
  //   },
  //   {
  //     quote: "If you tell the truth, you don't have to remember anything.",
  //     author: "Mark Twain"
  //   },
  //   {
  //     quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  //     author: "Maya Angelou"
  //   },
  //   {
  //     quote: "Always forgive your enemies; nothing annoys them so much.",
  //     author: "Oscar Wilde"
  //   }
  // // ];

  //   randomNum = Math.floor(Math.random() * quotes.length);
  //   randomQuote = quotes[randomNum].quote;
  //   randomAuthor = quotes[randomNum].author;

  //   $("#quote").text(randomQuote);
  //   $("#author").text(randomAuthor);

  var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
    $("#quote").html(data.quoteText);
    $("#author").html(data.quoteAuthor);
  });

  }

  $(".button").on("click", function(){
    getQuote();
  });

  $("#tweetQuote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + "\"" + randomQuote + "\" - " + randomAuthor);
  })

});