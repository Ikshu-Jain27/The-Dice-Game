var randomNumber1 = Math.floor((Math.random() * 6) + 1);// or Math.floor(Math.random() * 6) + 1 This will give us a random number between 1 and 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png";//name of the dice image from dice1.png to dice6.png

var randomImageSource1 = "images/" + randomDiceImage1;// since the src of our image have images/ and then name of the image as all our images are present in the folder named images
// so this becomes images/dice1.png to images/dice6.png

//use querySelectorAll as we have 2 images and since it would return an array therefore specify the index along
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//Similarly repeat the entire process for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//you can even use innerHTML instead of textContent
if(randomNumber1 > randomNumber2)
{
   document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
   document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
   document.querySelector("h1").textContent = "Draw!";
}
