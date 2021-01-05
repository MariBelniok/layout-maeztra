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
    breakpoints: {
        1920: {
            peek: 0,
            gap: 15,
            perView: 5,
        },
        800: {
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
    breakpoints: {
        1920: {
            peek: 0,
            perView: 5,
        },
        800: {
            peek: 20,
            perView: 5,
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