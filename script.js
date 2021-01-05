const modalClose = document.querySelector(".close")
const modal = document.querySelector("#modal")
modalClose.addEventListener("click", () => {
    modal.classList.remove("hide")
})
modalClose.addEventListener("click", () => {
    modal.classList.add("hide")
})

// GLIDE CONFIG

const bannerConfig = {
    type: 'carousel',
}
const cardsConfig = {
    type: 'carousel',
    peek: 0,
    gap: 50,
    perView: 5,
    breakpoints: {
        2560: {
            perView: 5,
            gap: 15,
        },
        780: {
            peek: 0,
            perView: 3,
        },
        480: {
            gap: 15,    
            peek: { before: 15, after: 30 },
            perView: 1,
        }
    }
}
const brendsConfig = {
    type: 'carousel',
    peek: 0,
    perView: 5,
    breakpoints: {
        2560: {
            gap: 15,
            perView: 5,
        },
        780: {
            peek: 20,
            perView: 3,
        },
        480: {
            gap: 15,
            peek: 20,
            perView: 1,
        }
    }
}

new Glide('.banner-carousel', bannerConfig).mount()
new Glide('.ads-cards-carousel', cardsConfig).mount()
new Glide('.brends-cards-carousel', brendsConfig).mount()
new Glide('.prod-cards-carousel', cardsConfig).mount()