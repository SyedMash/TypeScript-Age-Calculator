const userDate = document.querySelector("#date") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLParagraphElement;
userDate.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  //user data
  const birthDate = new Date(userDate.value);
  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  //today data
  const todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();

  let yearDiff: number;
  let monthDiff: number;
  let dayDiff: number;

  yearDiff = year - birthYear;

  if (month >= birthMonth) {
    monthDiff = month - birthMonth;
  } else {
    yearDiff--;
    monthDiff = 12 + month - birthMonth;
  }

  if (day >= birthDay) {
    dayDiff = day - birthDay;
  } else {
    monthDiff--;
    dayDiff = 31 + day - birthDay;
  }

  if (month < 0) {
    monthDiff = 11;
    yearDiff--;
  }
  result.innerHTML = `You are <span>${yearDiff}</span> years, <span>${monthDiff}</span> months and <span>${dayDiff}</span> days old`;
}
