function click() {
  // جميع الصور
  let portAll = document.querySelectorAll(".row .column");
  let btnAll = document.querySelector(".btnAll");
  // صور الطبيعة
  let nature = document.querySelectorAll(".row .nature");
  let btnNature = document.querySelector(".btnNature");
  // صور السيارات
  let Cars = document.querySelectorAll(".row .Cars");
  let btnCars = document.querySelector(".btnCars");
  // صور الاشخاص
  let people = document.querySelectorAll(".row .people");
  let btnPeople = document.querySelector(".btnPeople");

  // اظهار الصور عند الضغط علي الزرار
  btnAll.addEventListener("click", function () {
    portAll.forEach((img) => {
      img.style.display = "block";
    });
  });
  // اظهار صور الطبيعة
  btnNature.addEventListener("click", function () {
    nature.forEach((img) => {
      img.style.display = "block";
    });
    Cars.forEach((img) => {
      img.style.display = "none";
    });
    people.forEach((img) => {
      img.style.display = "none";
    });
  });
  // اظهار السيارات
  btnCars.addEventListener("click", function () {
    Cars.forEach((img) => {
      img.style.display = "block";
    });
    nature.forEach((img) => {
      img.style.display = "none";
    });
    people.forEach((img) => {
      img.style.display = "none";
    });
  });
  // اظهار الاشخاص
  btnPeople.addEventListener("click", function () {
    people.forEach((img) => {
      img.style.display = "block";
    });
    nature.forEach((img) => {
      img.style.display = "none";
    });
    Cars.forEach((img) => {
      img.style.display = "none";
    });
  });

  // اضافة class active on button
  let buttons = [btnAll, btnNature, btnCars, btnPeople];
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
}
window.onload = click();
