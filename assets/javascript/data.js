const data = [
    {
        title: "Order Summary",
        image: "./assets/images/OrderSummary.jpg",
        index: "Projects/P01-OrderSummary/index.html",
        categories: ["html","css","javascript"],
        level: "advanced",
        levelText: "Avançado",
        description: "A order summary using HTML and CSS, for improving basic web skills",
        initDate: "2021",
        finishDate: "2021"
    },{
        title: "Order Summary",
        image: "./assets/images/OrderSummary.jpg",
        index: "Projects/P01-OrderSummary/index.html",
        categories: ["html","css","javascript"],
        level: "intermediate",
        levelText: "Intermediário",
        description: "A order summary using HTML and CSS, for improving basic web skills",
        initDate: "2021",
        finishDate: "2021"
    },{
        title: "Order Summary",
        image: "./assets/images/OrderSummary.jpg",
        index: "Projects/P01-OrderSummary/index.html",
        categories: ["html","css","javascript"],
        level: "junior",
        levelText: "Iniciante",
        description: "A order summary using HTML and CSS, for improving basic web skills",
        initDate: "2021",
        finishDate: "2021"
    },{
        title: "Order Summary",
        image: "./assets/images/OrderSummary.jpg",
        index: "Projects/P01-OrderSummary/index.html",
        categories: ["html","css","javascript"],
        level: "junior",
        levelText: "Iniciante",
        description: "A order summary using HTML and CSS, for improving basic web skills",
        initDate: "2021",
        finishDate: "2021"
    }
]

const header = document.querySelector("header");

header.addEventListener("click", () => {
    header.classList.toggle('active')
})
