import "./styles/sass/_misc.scss";
document.addEventListener("DOMContentLoaded",function(){
  const menuButton = document.querySelector('#menu-btn');
  const menuList= document.querySelector('#menu-list');

  menuButton.addEventListener('click', function(){
    this.classList.toggle('navigation__button--open');
    menuList.classList.toggle('navigation__list--open');
  });
  menuList.addEventListener('click', function(){
    menuButton.classList.remove('navigation__button--open');
    this.classList.remove('navigation__list--open');
  });
});
// TODO add slider on header