const myImage = document.querySelector("img");

myImage.addEventListener("click", () => 
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Juanfer.webp")
        {
            myImage.setAttribute("src", "images/JamesRodriguez.jpg");
        }
    else
        {
            myImage.setAttribute("src", "images/Juanfer.webp");
        }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() 
{
    const myName = prompt("Please enter your name.");
    if (!myName) 
        {
            setUserName();
        } else 
        {
            localStorage.setItem("name", myName);
            myHeading.textContent = 'Mozilla is cool,' + myName;
        }
}

if (!localStorage.getItem("name")) 
    {
        setUserName();
    } 
else 
    {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = 'Mozilla is cool,' + storedName;
    }

myButton.addEventListener("click", () => 
    {
        setUserName();
    });