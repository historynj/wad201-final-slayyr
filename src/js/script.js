document.addEventListener("DOMContentLoaded", (event) => {
    // get current path for nav current styling
    const currentRaw = window.location.pathname;
    const currentList = currentRaw.split('src');
    const current = currentList.length > 1 ? currentList[1] : currentRaw;

    // render nav;
    const body = document.getElementById('body');

    const nav = `
    <div class="nav__placeholder"></div>
    <nav id="nav" class="nav">
        <button class="nav__icon--hamburger">
            <img src="./images/icons/hamburger.png" alt="Menu drawer button" />
        </button>
        <a href="/" class="nav__menu ${current == '/' ? 'current' : ''}">
            <span>Home</span>
        </a>
        <a href="./portfolio.html" class="nav__menu ${current.includes('/portfolio') ? 'current' : ''}">
            <span>My Work</span>
        </a>
        <a href="./service.html" class="nav__menu" ${current.includes('/service') ? 'current' : ''}>
            <span>Services</span>
        </a>
        <a href="./academy.html" class="nav__menu" ${current.includes('/academy') ? 'current' : ''}>
            <span>Classes</span>
        </a>
        <a href="/" class="nav__logo">
            <img id="nav-logo-with-text" src="./images/logo/logo-with-text.png" alt="Carla Beauty Logo" />
            <img id="nav-logo" class="hidden" src="./images/logo/logo.png" alt="Carla Beauty Logo" />
        </a>
        <a href="./beauty_tips.html" class="nav__menu ${current.includes('/beauty_tips') ? 'current' : ''}">
            <span>Beauty Tips</span>
        </a>
        <a href="./about.html" class="nav__menu ${current.includes('/about') ? 'current' : ''}">
            <span>About</span>
        </a>
        <a href="./contact.html" class="nav__menu ${current.includes('/contact') ? 'current' : ''}">
            <span>Contact</span>
        </a>
        <a href="https://www.instagram.com/carlabeauty/?hl=en" target="_blank" class="nav__icon">
            <div class="nav__icon--instagram">
                <img src="./images/icons/instagram-primary.png" alt="Instagram icon" />
            </div>
        </a>
    </nav>
    `

    const message = `
        <ul id="message" class="message">
        <li class="message__item message__item--instagram invisiable">
            <a href="https://www.instagram.com/" target="_blank">
                <img src="./images/icons/message-instagram.png" alt="Instagram icon" />
            </a>
        </li>
        <li class="message__item message__item--call invisiable">
            <a href="tel:+00000000000">
                <img src="./images/icons/message-call.png" alt="Call icon" />
            </a>
        </li>
        <li class="message__item message__item--whatsapp invisiable">
            <a href="https://web.whatsapp.com/" target="_blank">
                <img src="./images/icons/message-whatsapp.png" alt="Whatsapp icon" />
            </a>
        </li>
        <li class="message__item message__item--x invisiable">
            <button onclick="closeMessage()">
                <img src="./images/icons/message-x.png" alt="Message close icon" />
            </button>
        </li>
        <li class="message__item message__item--message">
            <button onclick="openMessage()">
                <img src="./images/icons/message.png" alt="Message open icon" />
            </button>
        </li>
    </ul>
    `

    const footer = `<footer id="footer" class="footer">
        <div class="footer__top">
            <div class="footer__top__logo">
                <img src="./images/logo/logo-with-text.png" alt="Carla Beauty logo" />
            </div>
            <p>Expert makeup and hairstyle studio</p>
            <ul class="footer__top__list">
                <li class="icon--xs">
                    <a href="tel:+00000000000">
                        <img src="./images/icons/phone-primary.png" alt="Instagram logo" />
                    </a>
                </li>
                <li class="icon--xs">
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img src="./images/icons/whatsapp-primary.png" alt="Instagram logo" />
                    </a>
                </li>
                <li class="icon--xs">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="./images/icons/instagram-bold.png" alt="Instagram logo" />
                    </a>
                </li>
            </ul>
        </div>
        <ul class="footer__nav">
            <li class="${current === '/' ? 'current' : ''}">  
                <a href="#">Home</a>
            </li>
            <li class="${current.includes('/portfolio') ? 'current' : ''}">
                <a href="./portfolio.html">My Work</a>
            </li>
            <li class="${current.includes('/service') ? 'current' : ''}">
                <a href="./service.html">Services</a>
            </li>
            <li class="${current.includes('/academy') ? 'current' : ''}">
                <a href="./academy.html">Classes</a>
            </li>
            <li class="${current.includes('/beauty_tips') ? 'current' : ''}">
                <a href="./beauty_tips.html">Beauty Tips</a>
            </li>
            <li class="${current.includes('/about') ? 'current' : ''}">
                <a href="./about.html">About</a>
            </li>
            <li class="${current.includes('/contact') ? 'current' : ''}">
                <a href="./contact.html">Contact</a>
            </li>
        </ul>
        <p class="footer__copyright">Copyright 2024, Carla Beauty</p>
    </footer>`

    body.innerHTML = nav + message + body.innerHTML + footer;
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const scrollTop = window.scrollY;

    requestAnimationFrame(() => {
        if (scrollTop > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });
});

function openMessage() {
    const menus = document.querySelectorAll('.message__item');
    menus.forEach((menu) => {
        if (menu?.classList.contains('message__item--message')) {
            menu?.classList.add('hidden');
        } else {
            menu?.classList.remove('invisiable');
        }
    })
}

function closeMessage() {
    const menus = document.querySelectorAll('.message__item');
    menus.forEach((menu) => {
        if (menu?.classList.contains('message__item--message')) {
            menu?.classList.remove('hidden');
        } else {
            menu?.classList.add('invisiable');
        }
    })
}