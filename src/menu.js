import bruschettaImg from "./images/menu/bruschetta.jpg";
import soupImg from "./images/menu/soup.jpg";
import salmonImg from "./images/menu/salmon.jpg";
import chickenImg from "./images/menu/chicken.jpg";
import espressoImg from "./images/menu/espresso.jpg";
import lavaCakeImg from "./images/menu/lava-cake.jpg";
import tiramisuImg from "./images/menu/tiramisu.jpg";
import pastaImg from "./images/menu/pasta.jpg";
import waterImg from "./images/menu/water.jpg";
import lemonadeImg from "./images/menu/lemonade.jpg";

const dishes = [
    {
        name: "Bruschetta",
        description: "Toasted artisan bread topped with tomatoes, basil, and extra virgin olive oil.",
        price: "1,650",
        img: bruschettaImg,
        category: "Appetizers",
    },
    {
        name: "Creamy Mushroom Soup",
        description: "Slow-cooked mushrooms blended with fresh herbs and cream, served with garlic bread.",
        price: "1,350",
        img: soupImg,
        category: "Appetizers",
    },
    {
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon served with lemon butter sauce and roasted seasonal vegetables.",
        price: "5,850",
        img: salmonImg,
        category: "Main Courses",
    },
    {
        name: "Truffle Pasta",
        description: "Homemade fettuccine tossed in a rich truffle cream sauce with parmesan.",
        price: "3,950",
        img: pastaImg,
        category: "Main Courses",
    },
    {
        name: "Herb Roasted Chicken",
        description: "Tender oven-roasted chicken served with garlic mashed potatoes and sautéed vegetables.",
        price: "3,250",
        img: chickenImg,
        category: "Main Courses",
    },
    {
        name: "Classic Tiramisu",
        description: "Layers of espresso-soaked sponge with mascarpone cream and cocoa.",
        price: "1,450",
        img: tiramisuImg,
        category: "Desserts",
    },
    {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center served with vanilla ice cream.",
        price: "1,550",
        img: lavaCakeImg,
        category: "Desserts",
    },
    {
        name: "Espresso",
        description: "Freshly brewed Italian-style espresso with a rich aroma.",
        price: "650",
        img: espressoImg,
        category: "Beverages",
    },
    {
        name: "Fresh Lemonade",
        description: "House-made lemonade infused with mint and fresh citrus.",
        price: "750",
        img: lemonadeImg,
        category: "Beverages",
    },
    {
        name: "Sparkling Water",
        description: "Premium chilled sparkling mineral water.",
        price: "550",
        img: waterImg,
        category: "Beverages",
    },
];

const categories = ["Appetizers", "Main Courses", "Desserts", "Beverages"];

const menu = function() {
    const contentDiv = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    title.classList.add("page-title");

    const subtitle = document.createElement("h2");
    subtitle.textContent = "Crafted with Passion, Served with Care";
    subtitle.classList.add("section-heading");

    contentDiv.append(title, subtitle);

    for(const category of categories) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("menu-category");

        const categoryHeading = document.createElement("h3");
        categoryHeading.textContent = category;
        categoryHeading.classList.add("category-heading");

        categoryDiv.append(categoryHeading);

        const categoryDishes = dishes.filter((dish) => dish.category === category);

        for(const dish of categoryDishes) {
            const dishCard = document.createElement("div");
            dishCard.classList.add("dish-card");

            const dishImage = document.createElement("img");
            dishImage.src = dish.img;
            dishImage.alt = dish.name;
            dishImage.classList.add("dish-image");

            const dishName = document.createElement("h4");
            dishName.textContent = dish.name;
            dishName.classList.add("dish-name");

            const dishDescription = document.createElement("p");
            dishDescription.textContent = dish.description;
            dishDescription.classList.add("dish-description");

            const dishPrice = document.createElement("p");
            dishPrice.textContent = dish.price;
            dishPrice.classList.add("dish-price");

            dishCard.append(dishImage, dishName, dishDescription, dishPrice);
            categoryDiv.append(dishCard);
        }

        contentDiv.append(categoryDiv);
    }
}

export {menu};