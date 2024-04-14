// тут уся логіка роботи

import * as renderFunction from './js/render-functions.js';
import * as pixabayApi from './js/pixabay-api.js';


// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const searchForm = document.querySelector(".search-form");
const search = document.querySelector("input");
const objectList = document.querySelector(".object-list");
const loader = document.querySelector(".loader-box");

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!search.value) {
        return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: "red",
            closeOnClick: true,
            position: "topCenter"
        });
    }

    const searchValue = event.currentTarget.elements.search.value.trim();

    loader.style.display = "flex";

    pixabayApi.searchObject(searchValue)
        .then(data => {
            if (!data.total) {
                loader.style.display = "none";

                return iziToast.info({
                    message: "Don't found",
                    closeOnClick: true,
                    position: "topCenter"
                })
            }
            console.log(data);

            objectList.innerHTML = renderFunction.createMurkup(data.hits);
            renderFunction.updateMurkup();
            searchForm.reset();

            loader.style.display = "none";
        })
        .catch(error => {
            loader.style.display = "none";
            return iziToast.error({
                message: `${error.message}`,
                backgroundColor: "red",
                position: "topCenter"
            })
        })
}




















// export function hello(name) {
//     console.log(`hello, ${name}`);
//     console.log(searchForm);
// }

// export function world(name) {
//     console.log(`hello, ${name}`);
// }


// pixabayApi.hello('Karina');
// renderFunction.world('Ukraine');