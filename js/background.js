const UNSPLASH_API_KEY = "Kg5NNTqsDLYAtoKIgFOis-wO6tfS_-O82yfuv5SNuwY";
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body");

function loadBackground() {
  const savedImage = localStorage.getItem("background");
  if (savedImage === null) {
    getBackground();
  } else {
    const parsedImage = JSON.parse(savedImage);
    const today = new Date();
    if (today > parsedImage.expiresOn) {
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${parsedImage.url})`;
    }
  }
  return;
}

function saveBackground(imageUrl, city, country, name) {
  const savedImage = localStorage.getItem("background");
  if (savedImage !== null) {
    localStorage.removeItem("background");
  }
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const imageObject = {
    url: imageUrl,
    expiresOn: expirationDate,
    city,
    country,
    name,
  };
  localStorage.setItem("background", JSON.stringify(imageObject));
  loadBackground();
  return;
}

function getBackground() {
  fetch(UNSPLASH_URL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const image = json;
      if (image.urls && image.urls.full && image.location) {
        const fullUrl = image.urls.full;
        const location = image.location;
        const city = location.city;
        const country = location.country;
        const name = location.name;
        saveBackground(fullUrl, city, country, name);
      } else {
        getBackground();
      }
    });
  return;
}

function initApp() {
  loadBackground();
  return;
}

initApp();
