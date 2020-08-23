const portfolio = {};

portfolio.menu = document.getElementById("sideMenu");
portfolio.navItemName = document.getElementsByClassName("navItemName");

/*********************/
/*   MENU FUNCTIONS  */
/*********************/
portfolio.showMenu = () => {
  portfolio.menu.style.width = "220px";
}

portfolio.hideMenu = () => {
  portfolio.menu.style.width = "0px";
}

portfolio.hoverMenuOn = () => {
  portfolio.menu.style.width = "220px";
}

portfolio.hoverMenuOff = () => {
  portfolio.menu.style.width = "105px";
}

portfolio.menuHoverListener = function(){
  portfolio.menu.addEventListener("mouseenter", ()=> {
    portfolio.hoverMenuOn();
    setTimeout(()=>{
      for (let i = 0; i < portfolio.navItemName.length; i++) {
        console.log(portfolio.navItemName[i]);
        portfolio.navItemName[i].classList.remove("visuallyHidden");
      }
    }, 250)
  })

  portfolio.menu.addEventListener("mouseleave", ()=>{
    portfolio.hoverMenuOff();
    for (let i = 0; i < portfolio.navItemName.length; i++) {
      portfolio.navItemName[i].classList.add("visuallyHidden");
    }
  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  portfolio.menuHoverListener();
})


