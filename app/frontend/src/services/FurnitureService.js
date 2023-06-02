import { URL_API_FURNITURE } from '../contstants/http_constants';

export default class FurnitureService {

    static getFurniture() {
        return fetch(URL_API_FURNITURE)
            .then(res => res.json())
            .catch(error => error);
    }

    static getFurnitureById(id) {
        return fetch(`${URL_API_FURNITURE}/${id}`)
        .then (res => res.json())
        .catch(error => error)
    }

    static getFurnitureByCategoryId(id) {
        return fetch(`${URL_API_FURNITURE}/search/category/${id}`)
        .then (res => res.json())
        .catch(error => error)
    }
}

