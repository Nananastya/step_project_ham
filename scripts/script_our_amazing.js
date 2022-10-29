const graphicDesignLis = document.querySelectorAll('li.graphic-design');
const webDesignLis = document.querySelectorAll('li.web-design');
const landingPagesLis = document.querySelectorAll('li.landing-pages');
const wordpressLis = document.querySelectorAll('li.wordpress');
const gridMenuLis = document.querySelector('.grid-menu').children;
const ourAmazingWorkMenu = document.querySelector('.our-amazing-work').children;
const btnGridMenu = document.querySelector('.btn-grid-menu').children[0];
let variable = 0;

function displayNoneRemove (el, elLength = el.length, j = 0) {
    for(j; j < elLength; j++){
        el[j].classList.remove('display-none');
    } 
}

for(let i = 0; i < gridMenuLis.length; i++){
    gridMenuLis[i].addEventListener("mouseover", () => {
        if (gridMenuLis[i].classList.contains("graphic-design")){
            gridMenuLis[i].querySelector('.creative-design').innerHTML = `
            <div class="flex-circle">
                <a href="#" class="circle">
                    <svg class="icon1" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
                    </svg>                                
                </a>
                <a href="#" class="circle">
                    <div class="square"></div>
                </a>
            </div>
            <span class="text-name">Creative design</span>
            <span class="li-type">Graphic Design</span>`;
        }
        else if (gridMenuLis[i].classList.contains("web-design")){
            gridMenuLis[i].querySelector('.creative-design').innerHTML = `
            <div class="flex-circle">
                <a href="#" class="circle">
                    <svg class="icon1" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
                    </svg>                                
                </a>
                <a href="#" class="circle">
                    <div class="square"></div>
                </a>
            </div>
            <span class="text-name">Creative design</span>
            <span class="li-type">Web Design</span>`;
        }
        else if (gridMenuLis[i].classList.contains("landing-pages")){
            gridMenuLis[i].querySelector('.creative-design').innerHTML = `
            <div class="flex-circle">
                <a href="#" class="circle">
                    <svg class="icon1" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
                    </svg>                                
                </a>
                <a href="#" class="circle">
                    <div class="square"></div>
                </a>
            </div>
            <span class="text-name">Creative design</span>
            <span class="li-type">Landing Pages</span>`;
        }
        else if (gridMenuLis[i].classList.contains("wordpress")){
            gridMenuLis[i].querySelector('.creative-design').innerHTML = `
            <div class="flex-circle">
                <a href="#" class="circle">
                    <svg class="icon1" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
                    </svg>                                
                </a>
                <a href="#" class="circle">
                    <div class="square"></div>
                </a>
            </div>
            <span class="text-name">Creative design</span>
            <span class="li-type">Wordpress</span>`;
        }
    })
}


for(let i = 0; i < ourAmazingWorkMenu.length; i++){
    ourAmazingWorkMenu[i].addEventListener('click', () => {
        for(let j = 0; j < gridMenuLis.length; j++){
            gridMenuLis[j].classList.add('display-none');
        }
        if (i === 1){
            displayNoneRemove(graphicDesignLis);
            btnGridMenu.style.display = "none";
            variable = 0;
        }
        else if (i === 2){
            displayNoneRemove(webDesignLis);
            btnGridMenu.style.display = "none";
            variable = 0;
        }
        else if (i === 3){
            displayNoneRemove(landingPagesLis);
            btnGridMenu.style.display = "none";
            variable = 0;
        }
        else if (i === 4){
            displayNoneRemove(wordpressLis);
            btnGridMenu.style.display = "none";
            variable = 0;
        }
        else {
            variable = 0
            displayNoneRemove(gridMenuLis, 12);
            btnGridMenu.style.display = "flex";
        }
    });
}

btnGridMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if (variable === 0){
        displayNoneRemove(gridMenuLis, 24, 12);
        btnGridMenu.style.display = "flex";
        variable++;
        console.log (variable);
    }
    else if (variable === 1){
        displayNoneRemove(gridMenuLis);
        btnGridMenu.style.display = "flex";
        variable++;
        console.log (variable);
        btnGridMenu.style.display = "none";
    }
});