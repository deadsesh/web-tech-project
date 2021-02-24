import { galleryMock } from '../mock/gallery'

export function setInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(galleryMock));
}

export function getStateByKey(key) {
    return JSON.parse(localStorage.getItem(key));
}