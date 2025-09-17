//  .checked = property that determines the checked state of an HTML checkbox or radio button element

const checkbox = document.getElementById("myCheckBox");
const visa = document.getElementById("visaBtn");
const master = document.getElementById("masterCardBtn");
const paypal = document.getElementById("paypalBtn");
const submit = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {
    if (checkbox.checked) {
        subResult.textContent = `${checkbox.checked} User has subscribed`;

        if (visa.checked) {
            paymentResult.textContent = `${visa.checked} user has subscribed through VISA`;
        }
        else if (master.checked) {
            paymentResult.textContent = `${master.checked} user has subscribed through Master`;
        }
        else if (paypal.checked) {
            paymentResult.textContent = `${paypal.checked} user has subscribed through PayPal`;
        }
        else {
            paymentResult.textContent = `user may subscribed through Cash`;
        }
    }
    else {
        subResult.textContent = `${checkbox.checked} User hasn't subscribed`;  
    }
    
}