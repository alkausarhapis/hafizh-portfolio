// shadow
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 40) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// theme
const themebutton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'bxs-sun'

// activate theme manual
themebutton.addEventListener('click', ()=> {
    document.body.classList.toggle(darktheme)
    themebutton.classList.toggle(icontheme)
})

