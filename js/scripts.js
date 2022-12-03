const toggleMenuElement = document.getElementById('menu-icon')
const mainMenu = document.getElementById('main-nav')
const toggleProductMenu = document.getElementById('menu-item-product')
const toggleCompanyMenu = document.getElementById('menu-item-company')
const toggleConnectMenu = document.getElementById('menu-item-connect')
const toggleProductSubmenu = document.getElementById('submenu-product')
const toggleCompanySubmenu = document.getElementById('submenu-company')
const toggleConnectSubmenu = document.getElementById('submenu-connect')

toggleMenuElement.addEventListener('click' , () => {
mainMenu.classList.toggle('main-nav--show')
});

toggleProductMenu.addEventListener('click' , () => {
    toggleProductSubmenu.classList.toggle('submenu--show')
    });

toggleCompanyMenu.addEventListener('click' , () => {
    toggleCompanySubmenu.classList.toggle('submenu--show')
    });

toggleConnectMenu.addEventListener('click' , () => {
    toggleConnectSubmenu.classList.toggle('submenu--show')
    });

    window.addEventListener('resize', () => {
        if (menuElement.classList.contains('main-nav--show') && window.matchMedia("(min-with: 768px)").matches) {
            menuElement.classList.remove('main-nav--show')
        }
    })    
    
