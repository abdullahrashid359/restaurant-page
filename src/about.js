import diningImage from "./images/about/dining.jpg";

const about = function() {
    const contentDiv = document.querySelector("#content");
    
    const title = document.createElement("h1");
    title.textContent = "About Lumière";
    title.classList.add("about-title");

    const image = document.createElement("img");
    image.src = diningImage;
    image.alt = "Restaurant Dining";
    image.classList.add("rest-dining-img");

    const storyHeading = document.createElement("h2");
    storyHeading.textContent = "Our Story";
    storyHeading.classList.add("about-story-heading");

    const storyText = document.createElement("p");
    storyText.textContent = "Founded with a passion for exceptional dining, Lumière was created to bring together timeless recipes, fresh ingredients, and modern elegance. Every dish is carefully prepared to offer not just a meal, but an experience where family, friends, and unforgettable memories come together around the table.";
    storyText.classList.add("about-story-text");

    const philosophyHeading = document.createElement("h2");
    philosophyHeading.textContent = "Our Philosophy";
    philosophyHeading.classList.add("about-philosophy-heading");

    const philosophyText = document.createElement("p");
    philosophyText.textContent = "At Lumière, we believe that great food begins with quality ingredients, thoughtful preparation, and genuine hospitality. Our goal is to create a warm and welcoming atmosphere where every guest feels at home while enjoying cuisine crafted with care and creativity.";
    philosophyText.classList.add("about-philosophy-text");

    const openingHoursHeading = document.createElement("h2");
    openingHoursHeading.textContent = "Opening Hours";
    openingHoursHeading.classList.add("about-opening-heading");

    const openingHoursList = document.createElement("ul");
    openingHoursList.classList.add("opening-hours-list");

    const mondayThursday = document.createElement("li");
    mondayThursday.textContent = "Monday - Thursday: 12:00 PM - 10:00 PM";

    const fridaySaturday = document.createElement("li");
    fridaySaturday.textContent = "Friday - Saturday: 12:00 PM - 11:30 PM";

    const sunday = document.createElement("li");
    sunday.textContent = "Sunday: 1:00 PM - 10:00 PM";

    openingHoursList.append( mondayThursday, fridaySaturday, sunday);

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Our Location";
    locationHeading.classList.add("about-location-heading");

    const locationText = document.createElement("p");
    locationText.textContent = "Visit us at 12 MM Alam Road, Gulberg III, Lahore, where elegant ambiance, attentive service, and unforgettable flavors await. Whether it's a casual dinner or a special celebration, we're always delighted to welcome you.";
    locationText.classList.add("about-location-text");

    contentDiv.append(title, image, storyHeading, storyText, philosophyHeading, philosophyText, openingHoursHeading, openingHoursList, locationHeading, locationText);
}

export {about};