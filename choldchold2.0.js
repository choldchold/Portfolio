//scrollIntroView
document.querySelector('.menubar').addEventListener('click', function (e) {
    e.preventDefault()

    if (e.target.classList.contains('menuitem')) {
        console.log(e.target);
        const id = e.target.getAttribute('href')
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: "smooth" })
    }
})

//
