const index = {};

index.$menu = $('#sideMenu');
index.$navItemName = $('.navItemName')
index.$home = $('#home');
index.$about=$('#about');
index.skills = $('#skills');
index.works = $('#works');
index.$contact = $('#contact');
index.$menuButton = $('#menuButton');
index.$isLargeWindow = true;

index.showHideMenu = function () {
  index.$menu.toggleClass('sideMenuHide sideMenuShow');
}

if ($(window).width() <= 990) {
  index.$menu.addClass('sideMenuHide').removeClass('sideMenuShow');
}

index.$menuButton.on('click', index.showHideMenu);

// Document Ready
$(function () {
  $(window).on('resize', function () {
    if ($(window).width() > 990) {
      index.$menu.removeClass('sideMenuHide').addClass('sideMenuShow')
    } else {
      index.$menu.removeClass('sideMenuShow').addClass('sideMenuHide');
    }
  })
})





// index.mobileMenu = function () {
//   index.$menu.addClass('sideMenuHide').removeClass('sideMenuShow').addClass('hoverMenu');
//   index.$navItemName.removeClass("navItemHide").addClass("navItemShow");
// }

// index.largeDisplay = function () {
//   index.$menu.addClass('sideMenuShow').removeClass('sideMenuHide');
//   index.$navItemName.removeClass("navItemShow").addClass("navItemHide");
//   index.$menu.removeClass("hoverMenu");
//   index.menuHover();
// }

// index.menuFunction = function () {
//   if ($(window).width() > 990) {
//     index.largeDisplay();
//   } else if ($(window).width() <= 990) {
//     index.mobileMenu();
//     index.showHideMenu();
//   }
// }

// index.menuHover = function() {
//     index.$menu.mouseenter(function(){
//       console.log('hey');
//       $(this).toggleClass("hoverMenu");
//       index.$navItemName.toggleClass("navItemHide navItemShow")
//     }).mouseleave(function(){
//       $(this).toggleClass("hoverMenu");
//       index.$navItemName.toggleClass("navItemHide navItemShow")
//     });
// }

// // Event listeners
// index.eventListeners = function() {
//   index.$menuButton.on('click', index.showHideMenu);
//   $(window).resize(function(){
//     if ($(window).width() <= 990) {
//       index.mobileMenu();
//     } else {
//       index.largeDisplay();
//     }
//   })
// }

// // init method
// index.init = function() {
//   // index.eventListeners();
// }

// index.menuControl = function () {
  
//   if ($(window).width() > 990) {
//     index.$menu.mouseenter(function(){
//       console.log('hey');
//     }).mouseleave(function(){
//     })
//   } else {
//     console.log('hello');
//   }
// }

// index.init = function () {
//   index.menuControl();
// }

// index.$navItemName.hide();

// // Document Ready
// $(function () {
//   index.init();
//   $(window).on('resize', index.init);
// })

