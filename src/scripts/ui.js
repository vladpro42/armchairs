const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(item => {
            item.classList.remove('nav__item--active');
        })
        e.target.classList.add('nav__item--active');
    })
})


const productsNavBtns = document.querySelectorAll('.products__nav-btn');

productsNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        productsNavBtns.forEach(btn => {
            btn.classList.remove('products__nav-btn--active');
        })
        e.target.classList.add('products__nav-btn--active');
    })
})


const socialsItems = document.querySelectorAll('.socials__item');

socialsItems.forEach(item => {
    item.addEventListener('click', (e) => {
        socialsItems.forEach(item => {
            item.classList.remove('socials__item--active');
        })
        e.currentTarget.classList.add('socials__item--active');
    })
})