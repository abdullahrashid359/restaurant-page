import restaurantInterior from "./images/homepage/interior.jpg";

const homepage = function() {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Lumière";
    h1.classList.add("home-title");

    const image = document.createElement("img");
    image.src = restaurantInterior;
    image.alt = "Restaurant Interior";
    image.classList.add("rest-interior-img");

    const h2 = document.createElement("h2");
    h2.textContent = "Where Every Meal Becomes a Memory";
    h2.classList.add("home-tagline");

    const p1 = document.createElement("p");
    p1.textContent = " Welcome to Lumière, where timeless flavors meet modern elegance. Our chefs craft every dish using carefully selected ingredients, blending tradition with creativity to deliver an unforgettable dining experience.";
    p1.classList.add("home-para");
    
    const p2 = document.createElement("p");
    p2.textContent = "Whether you're celebrating a special occasion, enjoying a family dinner, or simply treating yourself, Lumière offers a warm atmosphere, exceptional service, and cuisine made with passion.";
    p2.classList.add("home-para");

    contentDiv.append(h1, image, h2, p1, p2);
};

export {homepage};