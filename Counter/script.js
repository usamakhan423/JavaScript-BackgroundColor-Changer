const counter = () => {

    let number = document.querySelector("#number");
    const decrease = document.querySelector(".decrease");
    const reset = document.querySelector(".reset");
    const increase = document.querySelector(".increase");

    let count = 0;
    
    reset.addEventListener("click", () => {
        count = 0;
        number.innerHTML = count;

    })
    decrease.addEventListener("click", () => {
        count--;
        number.innerHTML = count;
        
    })
    increase.addEventListener("click", () => {
        count++;
        number.innerHTML = count;

    })
    
}
counter();
