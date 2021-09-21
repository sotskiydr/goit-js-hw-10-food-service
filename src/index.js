import './sass/main.scss';
import cardInfo from './templates/menu.json';
import cardTemplate from './templates/markup.hbs';
const cardListRef = document.querySelector('.menu');
const markup = cardTemplate(cardInfo);
cardListRef.insertAdjacentHTML('afterbegin' , markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const toggleBtn = document.querySelector('input');
toggleBtn.addEventListener('change' , onToggleBtnClick)

if(localStorage.getItem('theme') === Theme.DARK){
  toggleBtn.setAttribute('checked','checked');
  bodyRef.classList.add(Theme.DARK)
}else{
  bodyRef.classList.remove(Theme.DARK)
  toggleBtn.removeAttribute('checked');
}


function onToggleBtnClick(evt){
  if(evt.target.checked){
    bodyRef.classList.add(Theme.DARK)
    localStorage.setItem('theme' , Theme.DARK)
  }else{
    bodyRef.classList.remove(Theme.DARK)
    localStorage.setItem('theme' , Theme.LIGHT)
  }
}