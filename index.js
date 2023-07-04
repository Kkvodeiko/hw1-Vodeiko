const surname = prompt("Ваша фамилия?");
const firstName = prompt("Ваше имя?");
const patronymic = prompt("Ваше отчество?");
const age = prompt("Ваш возраст?");
const gender = confirm("Ваш пол - мужской?");

const fullName = `${surname} ${firstName} ${patronymic}`;
const ageDays = age * 365;
const futureAge = +age + 5;
const pension = (gender == true) ? 65 : 55;

alert(`
Ваше ФИО: ${fullName}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${ageDays}
Через 5 лет вам будет: ${futureAge}
Ваш пол: ${(gender == true) ? "мужской" : "женский"}
Вы на пенсии: ${(age >= pension) ? "да" : "нет"}
`)