import { URL_API_GATEGORIES } from '../contstants/http_constants';

export default class CategoryService {

    static getCategory() {
        return fetch(URL_API_GATEGORIES)
            .then(res => res.json())
            .catch(error => error);
    }

static getCategoryById(id) {
    return fetch(`${URL_API_GATEGORIES}/${id}`)
    .then (res => res.json())
    .catch(error => error)
}

}
