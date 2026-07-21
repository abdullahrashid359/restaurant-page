const homepage = function() {
    const contentDiv = document.querySelector("#content");

    const homeHero = document.createElement("div");
    homeHero.classList.add("home-hero");

    const h1 = document.createElement("h1");
    h1.textContent = "Lumière";
    h1.classList.add("page-title");

    const h2 = document.createElement("h2");
    h2.textContent = "Where Every Meal Becomes a Memory";
    h2.classList.add("home-heading");

    const p1 = document.createElement("p");
    p1.textContent = " Welcome to Lumière, where timeless flavors meet modern elegance. Our chefs craft every dish using carefully selected ingredients, blending tradition with creativity to deliver an unforgettable dining experience.";
    p1.classList.add("home-text");
    
    const p2 = document.createElement("p");
    p2.textContent = "From handcrafted appetizers to indulgent desserts, every plate is thoughtfully prepared to delight your senses. At Lumière, every visit is an invitation to slow down, savor the moment, and create lasting memories.";
    p2.classList.add("home-text");

    homeHero.append(h1, h2, p1, p2);
    contentDiv.append(homeHero);
};

export {homepage};