const calculateAge = document.getElementById("calculate");
const ageValue = document.getElementById("ageValue");
const result = document.getElementById("result");

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('ageValue').value = '';
    document.getElementById('result').innerHTML = '';
});


let today = new Date();
let seconds = 1000;
let minutes = 60;
let hours = 24;
let week = 7;

calculateAge.addEventListener("click", function (e) {
if (ageValue.value) {
let dob = new Date(ageValue.value);
let diffYears = today.getFullYear() - dob.getFullYear();
let diffMonths = today.getMonth() - dob.getMonth();
let diffDays = today.getDate() - dob.getDate();

if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
    diffYears--;
    diffMonths += 12;
}

if (diffDays < 0) {
    let tempDate = new Date(today.getFullYear(), today.getMonth(), dob.getDate());
    diffMonths--;
    diffDays = Math.ceil((tempDate - dob) / (seconds * minutes * hours));
}

result.innerHTML = `Your Age is: ${diffYears} Years, ${diffMonths} Months, and ${diffDays} Days.`;
} else {
alert("Please Enter a valid Date of Birth.");
}
});