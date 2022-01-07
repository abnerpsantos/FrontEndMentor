const mainContent = document.querySelector("main");

mainContent.innerHTML = data.map((item) => (
    `
    <div class="gallery--item">
        <a href="${item.index}">
            <img src="${item.image}" alt="${item.title}">
            <h1>${item.title}</h1>
        </a>
        <div class="card--info">
            <section class="categories">
                ${item.categories.map((categories) => (
                    showCategories(categories)
                )).join(" ")}    
            </section>
            <section class="levels">
                <span class="card--item ${item.level}">${item.levelText}</span>
            </section>
        </div>
    </div>
    `
    )).join('');

    function showCategories (categories) {
        return (`<span class="card--item ${categories}">${categories}</span>`)
    }

