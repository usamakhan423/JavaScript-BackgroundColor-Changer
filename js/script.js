const button = document.querySelector(".btn");
const heading = document.querySelector(".heading");
let body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const colorCode = document.querySelector(".color-code");
const code = document.querySelector(".heading .code");
button.addEventListener("click", ()=> {
    // body.style.backgroundColor = "red";
    container.style.borderColor =  "#fff";
    heading.style.borderColor = "#999";
    heading.style.color = "#fff";

    
    const colorGenerator = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const generatedColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(generatedColor);
        body.style.backgroundColor = generatedColor;
        code.innerHTML = generatedColor;
        container.style.borderColor =  "#fff";
        heading.style.borderColor = "#999";
        heading.style.color = "#fff";
    }
    colorGenerator();
    

})
// const body = document.getElementsByTagName("body");
// body.style.backgroundColor = "red";
