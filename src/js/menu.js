const menuCloseButton = document.getElementById('menu-close-button');
const menuOpenButton = document.getElementById('menu-open-button');
const menu = document.getElementById('mobile-menu-id');
const menuLink = document.getElementsByClassName('mobile-nav-links-item');
const body = document.getElementsByTagName('body');

console.log(body);


// show/hide the menu when the button is clicked
for (let link of menuLink) {
  // console.log(link);
  link.addEventListener('click', () => {
    console.log("clicked link");
    menu.classList.remove('is-open');
    body[0].classList.remove('no-scroll');
    console.log(menu);
    console.log(body);
  });
}

menuOpenButton.addEventListener('click', () => {
  console.log('clicked open button');
  menu.classList.add('is-open');
  body[0].classList.add('no-scroll');
  console.log(body);
  console.log(menu);
});

menuCloseButton.addEventListener('click', () => {
  console.log("clicked close button");
  menu.classList.remove('is-open');
  body[0].classList.remove('no-scroll');
  console.log(menu);
  console.log(body);
});

// hide the menu when a click event occurs outside the menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuOpenButton.contains(event.target)) {
    console.log("clicked outside menu");
    menu.classList.remove('is-open');
    body[0].classList.remove('no-scroll');
    console.log(menu);
    console.log(body);
  }
});