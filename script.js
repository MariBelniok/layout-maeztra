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
    breakpoints: {
        1920: {
            peek: 60,
            perView: 5,
        },
        800: {
            peek: 30,
            perView: 3,
        },
        480: {
            gap: 15,
            peek: 30,
            perView: 1,
        }
    }
}
const brendsConfig = {
    breakpoints: {
        1920: {
            startAt:0,
            peek: 60,
            perView: 5,
        },
        800: {
            peek: 30,
            perView: 5,
        },
        480: {
            startAt: 2,
            gap: 15,
            peek: 30,
            perView: 1,
        }
    }
}

new Glide('.banner-carousel', bannerConfig).mount()
new Glide('.ads-cards-carousel', cardsConfig).mount()
new Glide('.brends-cards-carousel', brendsConfig).mount()
new Glide('.prod-cards-carousel', cardsConfig).mount()