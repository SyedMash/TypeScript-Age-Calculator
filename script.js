var userDate = document.querySelector("#date");
var result = document.querySelector("#result");
userDate.max = new Date().toISOString().split("T")[0];
function calculateAge() {
    //user data
    var birthDate = new Date(userDate.value);
    var birthDay = birthDate.getDate();
    var birthMonth = birthDate.getMonth() + 1;
    var birthYear = birthDate.getFullYear();
    //today data
    var todayDate = new Date();
    var day = todayDate.getDate();
    var month = todayDate.getMonth() + 1;
    var year = todayDate.getFullYear();
    var yearDiff;
    var monthDiff;
    var dayDiff;
    yearDiff = year - birthYear;
    if (month >= birthMonth) {
        monthDiff = month - birthMonth;
    }
    else {
        yearDiff--;
        monthDiff = 12 + month - birthMonth;
    }
    if (day >= birthDay) {
        dayDiff = day - birthDay;
    }
    else {
        monthDiff--;
        dayDiff = 31 + day - birthDay;
    }
    if (month < 0) {
        monthDiff = 11;
        yearDiff--;
    }
    result.innerHTML = "You are <span>".concat(yearDiff, "</span> years, <span>").concat(monthDiff, "</span> months and <span>").concat(dayDiff, "</span> days old");
}
