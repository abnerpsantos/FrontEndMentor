const mainContent = document.querySelector(".container");

mainContent.innerHTML = data.map((item) => (
    `
        <div class="card">
            <div class="card--image">
                <img src="${item.image}" alt="${item.title}">
                <span class="card--level ${item.level}">
                    ${item.levelText}
                </span>
            </div>
        <div class="card--info">
            <div class="technologies">
                ${item.categories.map((categories) => (
                    showCategories(categories)
                ))}
            </div>
            <div class="card--description">
                <p>${item.description}</p>
            </div>
            <div class="card--date">
                <span>DATA:</span>
                <span>20/11/2000</span>
            </div>
        </div>
    </div>
    `
)).join('');

function showCategories(categories) {
    return (`<span class="${categories}">${categories}</span>`)
}