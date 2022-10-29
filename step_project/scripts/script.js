const servicesChildren = document.querySelector('.services').children;
const servicesInfo = document.querySelectorAll('.services-info > div');
const servicesMenu = [servicesChildren[0], servicesChildren[1], servicesChildren[2], servicesChildren[3], servicesChildren[4], servicesChildren[5]];

for(let i = 0; i < servicesMenu.length; i++){
    servicesMenu[i].addEventListener('click', (event) => {
        for(let j = 0; j < servicesMenu.length; j++){
            servicesMenu[j].classList.remove('green-menu');
            servicesMenu[j].classList.add('white-menu');
        }
        event.target.classList.remove('white-menu');
        event.target.classList.add('green-menu');
        for(let j = 0; j < servicesMenu.length; j++){
            servicesInfo[j].classList.add('display-none');
        }
        servicesInfo[i].classList.remove('display-none');
    });
}



