export const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "42935662-781aefdf684acd7404be1a8dc"

export const options = {
    params: {
        key: API_KEY,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 40,
    },
};