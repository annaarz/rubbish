const chooseLanguages = document.querySelector(".russian");
const otherLanguages = document.querySelector(".other-languages");

chooseLanguages.addEventListener("click", ()=>{
    otherLanguages.classList.toggle("visible");
    chooseLanguages.classList.toggle("opened");
    if  (otherLanguages.classList.contains("visible")){
        const langs = document.querySelectorAll('.other-languages li');
        chooseLanguage(langs);
    }
})

const chooseLanguage = (langs) => {
    langs.forEach(element => {
        element.addEventListener('click', () => {
            chooseLanguages.textContent = element.textContent;
            chooseLanguages.classList.remove("opened");
            otherLanguages.classList.remove("visible");
        })
    });
}