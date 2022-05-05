import { mainUrl } from "./components/api";

const productsUrl = mainUrl + "/products";

let strapiUrlImage = mainUrl;

( async function () {
    const container = document.querySelector(".container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
    
        container.innerHTML ="";

        json.forEach(function (shoe)) {
            let shoeImg = shoe.image_url;
            if (shoe.image_url === null ||shoe.image_url.length === 0) {
                shoeImg = strapiUrlImage + shoe.image_url;
            }
        }
    
    }
})