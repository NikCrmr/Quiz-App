let darkMode = localStorage.getItem("darkMode");
// its only stored locally on the computer 5MB
//there is also session storage, which last only this session. but localStorage also goes beyond this session date
// If the server side needs data >> cookie // only client side than localStorage ect.
const darkToggleButton = document.querySelector('[data-js="darkModeButton"]');

const enableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.add('darkmode')
    //update darkMode localStorage
    localStorage.setItem('darkMode', 'enabled')
    //you need to know what to stare in darkmode. its stored as strings.
}
const disableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.remove('darkmode')
    //update darkMode localStorage
    localStorage.setItem('darkMode', null )
    //you need to know what to stare in darkmode. its stored as strings. N
}

if (darkMode === 'enabled'){
    enableDarkMode();
}

darkToggleButton.addEventListener('click', ()=>{
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== enabled)
    enableDarkMode();
console.log(darkMode);
}else{
disableDarkMode();

})
