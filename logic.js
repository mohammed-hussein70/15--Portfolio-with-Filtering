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
  //
  function show(category) {
    // إخفاء كل الصور
    portAll.forEach((img) => (img.style.display = "none"));
    // إظهار الصور الخاصة بالفئة المطلوبة فقط
    category.forEach((img) => (img.style.display = "block"));
  }

  // ثم يمكنك استخدام هذه الدالة في أزرار الفئات
  btnAll.addEventListener("click", () => show(portAll));
  btnNature.addEventListener("click", () => show(nature));
  btnCars.addEventListener("click", () => show(Cars));
  btnPeople.addEventListener("click", () => show(people));
  // اضافة class active on button
  let buttons = [btnAll, btnNature, btnCars, btnPeople];
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // إزالة الفئة النشطة من جميع الأزرار
      buttons.forEach((btn) => btn.classList.remove("active"));
      // إضافة الفئة النشطة إلى الزر الحالي
      button.classList.add("active");
    });
  });
}
window.onload = click();
