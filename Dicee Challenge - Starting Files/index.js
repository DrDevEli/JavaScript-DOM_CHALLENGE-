

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1 - 6 

var randomImage = "dice" + randomNumber1 + ".png"; // random dice from dice1.png - dice6.png

var imageSource = "images/" + randomImage;// random source of dice from folder images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource); // adding random source to image1 


//repeating the process above to second image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber2 + ".png";

var imageSource1 = "images/" + randomImage1;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource1);

//adding the winner to the page

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🏆";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}


