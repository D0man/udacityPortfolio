import "./styles/sass/_misc.scss";
document.addEventListener("DOMContentLoaded",function(){
  const menuButton = document.querySelector('#menu-btn');
  const menuList= document.querySelector('#menu-list');

  menuButton.addEventListener('click', function(){
    this.classList.toggle('navigation__button--open');
    menuList.classList.toggle('navigation__list--open')
  });
});