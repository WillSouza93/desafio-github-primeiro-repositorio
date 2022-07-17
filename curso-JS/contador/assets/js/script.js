let count = 0;

const currentNumber = document.querySelector("#currentNumber");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn){
    btn.addEventListener ("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("subtrair")){
            count--;
        }

        else {
            count++;
        }
        currentNumber.textContent = count;
    });
});