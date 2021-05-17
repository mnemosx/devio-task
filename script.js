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

function checkTabPress(e) {
  let activeElement;
  console.log(e.key)
  if (e.key == "Enter") {
    activeElement = document.activeElement;
    if (activeElement.tagName.toLowerCase() == 'li') {
      langMenu.childNodes.forEach(el => el.tabIndex = 0)
      if (['LV', 'RU', 'EN'].includes(activeElement.innerHTML)) {
        toggleLanguage(activeElement.innerHTML)
      }
      toggleLangMenuOnClick()
    }
  }
}
document.querySelector('nav').addEventListener('keyup', checkTabPress);
if (document.activeElement === langMenu) {
  showLangMenu()
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

// -- ABOUT SLIDESHOW

function overlayShow() {
  document.getElementById("overlay").className += " show-overlay";
}

function overlayHide() {
  document.getElementById("overlay").classList.remove("show-overlay");
}