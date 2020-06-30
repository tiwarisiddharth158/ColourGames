var numSqaures = 6;
var squares = document.getElementsByClassName("square");
var colors = generateRandomColors(numSqaures);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function()
	{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy"?numSqaures=3:numSqaures=6;
		reset();
		//figure out how many sqaures to show
		//pick new Colors
		//pick a new pickedCor
		//update the page to reflect changes.
	});
}

function reset()
{
	//generate random colors
	colors = generateRandomColors(numSqaures);
	//pick a random color
	pickedColor = pickColor();
	//change the display color
	colorDisplay.textContent = pickedColor;
	//change the sqaure colors
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	//change the display color to match the background
	h1.style.backgroundColor = "steelblue";
	//fixing minor things
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click",function()
{
	reset();
});

for(var i=0;i<squares.length;i++)
{
	//display intial colors..
	squares[i].style.backgroundColor = colors[i];

	//grab the color of the clicked sqaure and compare it with the pickedColor
	squares[i].addEventListener("click",function()
	{
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct..";
			//The color of the sqaures changes to the picked color.
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again??"
		}
		else
		{
			messageDisplay.textContent = "Try Again!!";
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{ 
	//make an empty array
	var arr = [];
	for(var i=0;i<num;i++)
	{
		//push the randomly generated colors into the array
		arr.push(RandomColors());
	}
	//return the array
	return arr;
}

function RandomColors()
{
	//generate a random color stored in r(0-255)
	var r = Math.floor(Math.random()*256);
	//generate a random color stored in g
	var g = Math.floor(Math.random()*256);
	//generate a random color stored in b
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
