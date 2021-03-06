import { galleryMock } from '../mock/gallery';

export function setInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(galleryMock));
}

export function getStateByKey(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function filterByTag(tag) {
    const images = getStateByKey('initialState');
    if(tag === 'all')
        return images
    else
        return images.filter((image) => image.tag === tag);
}