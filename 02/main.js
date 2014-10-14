/* get a Prevert syle poem for what you love 
	or get a not-nice poem of the same style.
	Initial intention was to use disturbing words for the 
	second scenario, but.. it's just not nice. So I decided
	to use 'undifined' as main adjective. 
	That should be disturbing enough, right? :) 
*/

var button1, button2;
var rightCol;
var me, lovewhatever; 
var text, niceOnes;
var par;
var yourLove, yourName;

function setup(){
	noCanvas();
	//get elements from html
	me = getElement("I"); 
	lovewhatever = getElement("love");
	button1 = getElement("nice");
	button2 = getElement('bad'); 
	par = getElement("poem");
	rightCol = getElement("rightCol");
	// if  want to get by class name  x = getElments("---");

	button1.mousePressed(dosomething);
	button2.mousePressed(somethingNotNice);
}

function dosomething(){

	//	var niceWords = [beautiful, appealing, attractive, charming, winning, pretty, sweet, handsome, good-looking, exquisite, admirable, enchanting, graceful, captivating, amiable, adorable, comely];
	//get all the words from poem
	var words = /\b(\w+)\b/gi;
	//get all nice words from the file
	var niceWords = niceOnes.split(/\W+/);
	var countNiceWords = niceWords.length;
	//console.log(niceOnes); //ok
	console.log("nicewords: " + niceWords + " length: " + niceWords.length);
//	console.log(niceWords[0]);
	console.log("button is pressed!");
	
	//var yourLove = 'orange';
	console.log(typeof lovewhatever.value()); //string

	//if don't type in value
	 if (lovewhatever.value() != "") {
	 	yourLove = "love for " + lovewhatever.value();
	 	
	}//end if
	console.log("yourlove: "  + yourLove);
	 if (me.value() != "") {
		yourName = "Me, " + me.value()  + ",";
	}//end if
	console.log("I am: " + yourName);
	//make lineBreaks for HTML
	var regex = /\n/g;
	var niceText = text.replace(regex, '<br>');
	//console.log(niceText);
	var replace00 = niceText.replace(/love/gi, yourLove);
	//replace every I with your name
	replace01 = replace00.replace(/\bi\b/gi, yourName);

	var toChange = /\b(in|to|on|as|for|this|my|a)\b/gi;

	//pick random word from array of nice words
	//var pickAWord = niceWords[Math.floor(Math.random() * countNiceWords)];
	replace = replace01.replace(toChange, function(str){
		return str + " " + niceWords[Math.floor(Math.random() * countNiceWords)];
	});


	//show in html
	par.html(replace);
	rightCol.style("background-color","pink");
}//end dosomething

function somethingNotNice(){
	//	var niceWords = [beautiful, appealing, attractive, charming, winning, pretty, sweet, handsome, good-looking, exquisite, admirable, enchanting, graceful, captivating, amiable, adorable, comely];
	//make array of strings; surround w/ quotes
	var words = /\b(\w+)\b/gi;
	var notNiceWords = notNiceOnes.split(/\W+/);
	var countwords = notNiceWords.length;
	console.log(niceOnes); //ok
	console.log("NOTwords: " + notNiceWords + " length: " + notNiceWords.length);
	console.log(notNiceWords[0]);
	console.log("button is pressed!");
	
	//var yourLove = 'orange';
	console.log(typeof lovewhatever.value());
	console.log("input: " + yourName);

	//if don't type in value
	 if (lovewhatever.value() != "") {
	 	yourLove = "love for " + lovewhatever.value();
	 	console.log(yourLove);
	}//end if
	 if (me.value() != "") {
		yourName = "Me, " + me.value()  + ",";
	 	console.log(yourName);
	}//end if


	var regex = /\n/g;
	var niceText = text.replace(regex, '<br>');
	//console.log(niceText);
	var replace00 = niceText.replace(/love/gi, yourLove);
	replace00 = niceText.replace(/\bi\b/gi, yourName);

	var toChange = /\b(in|to|on|as|for|this|my|a)\b/gi;

	//pick random word from array of nice words
	//var pickAWord = niceWords[Math.floor(Math.random() * countNiceWords)];
	replace = replace00.replace(toChange, function(str){
		return str + " undifined " // + notNiceWords[Math.floor(Math.random() * countwords)];
	});

	//show in html
	par.html(replace);
	rightCol.style("background-color","gray");
}//ent notNice

// load text 
$.get("Alicante.txt", function(data){
	text = data;
});
//load nice words
$.get("nice.txt", function(data){
	niceOnes = data;
});
//load notNice onces
$.get("notNice.txt", function(data){
	notNiceOnes = data;

});
