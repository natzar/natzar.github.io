var quotes=["Check <a href='//natzar.co'>natzar.co</a> and tell me what you think","The best place on earth to work is <a href='http://www.hubud.org' target='_blank'>Hubud</a>","You have monkey mind, you are always busy like a monkey","Nothing is more usefull than Knowledge"];function randomQuote(){return quotes[Math.floor(Math.random()*quotes.length)];}

$('#footQuote').html('"'+ randomQuote()+'"');

