// -- LANGUAGE SELECTOR
let selectedLang = document.getElementById("selected-lang");
let langMenu = document.getElementById('selected-lang-menu');

const showLangMenu = () => langMenu.classList.remove("hidden");
const hideLangMenu = () => langMenu.classList.add("hidden");
const showLangMenuOnMouseover = () => showLangMenu();
const toggleLangMenuOnClick = () => {
  if (langMenu.classList.contains("hidden")) {
    showLangMenu();
    return;
  }
  hideLangMenu();
}

if (langMenu.classList.contains("hidden")) {
  selectedLang.addEventListener("mouseover", showLangMenuOnMouseover, false)
};
selectedLang.addEventListener("click", toggleLangMenuOnClick, false);

function toggleLanguage(language) {
  if (language === "EN") {
    selectedLang.innerHTML = "EN";
    hideLangMenu();
    return
  };
  if (language === "RU") {
    selectedLang.innerHTML = "RU";
    hideLangMenu();
    return;
  };
  selectedLang.innerHTML = "LV";
  hideLangMenu();
};

// -- SHOW/HIDE PRODUCT LIST
function toggleListVisibility(id) {
  const hide = (el) => el.classList.remove("visible");

  if (id === "left") hide(document.getElementById(`product-list-right`))
  if (id === "right") hide(document.getElementById(`product-list-left`))

  let productList = document.getElementById(`product-list-${id}`);

  !productList.classList.contains('visible')
    ? productList.classList.add("visible")
    : hide(productList);

}