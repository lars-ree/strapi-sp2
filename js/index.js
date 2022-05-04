import { mainUrl } from "./components/api";

const productsUrl = mainUrl + "/products";

let strapiUrlImage = mainUrl;

( async function () {
    const container = document.querySelector(".container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
    }
})