//variables

const sendBtn = document.getElementById('sendBtn');
const resetBtn = document.getElementById('resetBtn');





//eventlisteners
eventlisteners();





//functions
//initialization
function eventlisteners() {
    document.addEventListener('DOMContentLoaded', initial)
}



function initial() {
    sendBtn.disabled = true;
    resetBtn.disabled = true;

}
console.log(resetBtn)