const toastBox = document.getElementById("toastBox");
const success = document.getElementById("success");
const error = document.getElementById("error");
const invalid = document.getElementById("invalid");

let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check again!';


function showToast(message) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if(message.includes('error')){
        toast.classList.add("error");
    }
    if(message.includes('Invalid')){
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);

};


success.addEventListener("click", function() {
    showToast(successMsg);
});

error.addEventListener("click", function () {
    showToast(errorMsg);
});

invalid.addEventListener("click", function () {
    showToast(invalidMsg);
});