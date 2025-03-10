import SITE_LOGO_DARK from '../images/site-logo-dark.png'


const themeToggler = document.querySelector('[for="switch"]')
const headerLogoImage = document.querySelector('.header__logo')

const headerDarkLogoMarkup = `<a href="/index.html" ><img src="${SITE_LOGO_DARK}" alt="site logo" height="28" width="109"></a>`;
    
    headerLogoImage.insertAdjacentHTML("beforebegin", headerDarkLogoMarkup)

const checkbox = themeToggler.previousElementSibling;

function saveCheckboxStatus() {
  localStorage.setItem('checkboxStatus', checkbox.checked);
}

function restoreCheckboxStatus() {
  const status = localStorage.getItem('checkboxStatus');
  checkbox.checked = status === 'true';
}



themeToggler.addEventListener('click', () => {
    
    
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme','dark')
    }
    addDarkClass()
    changeSiteLogo()

})
function addDarkClass() {
try {
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        
        
        paintElementsInDark()
    }
    else {
        document.querySelector('html').classList.remove('dark')
        
    }
    } catch (error) { console.log(error) }
    
    checkbox.addEventListener('change', saveCheckboxStatus);
    document.addEventListener('DOMContentLoaded', restoreCheckboxStatus);
    changeSiteLogo()
}

addDarkClass()

function paintElementsInDark() {
    
    
    
}
function changeSiteLogo() {
    
    if (localStorage.getItem('theme') === 'dark') {
        headerLogoImage.classList.add('popup-hidden')
    
        headerLogoImage.previousElementSibling.classList.remove('popup-hidden')
    } else {
        headerLogoImage.classList.remove('popup-hidden')
    
        headerLogoImage.previousElementSibling.classList.add('popup-hidden')
    }
}
