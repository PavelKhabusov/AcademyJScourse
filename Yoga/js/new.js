let age = document.getElementById('age');
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['John', 'Smith']);
age.addEventListener('change', function() {
  showUser.apply(age, ['John', 'Smith']);
});