import { galleryMock } from '../resources/mock/gallery';

export function setInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(galleryMock));
}

export const getStateByKey = (key) =>
    JSON.parse(localStorage.getItem(key));


export function filterByTag(tag) {
    const images = getStateByKey('initialState');

    shuffle(images)
    if(tag === 'all')
        return images
    else
        return images.filter((image) => image.tag === tag);
}

const shuffle = (array, x, y, len) => { //fisher-yates
    len = array.length;
    // eslint-disable-next-line no-unused-expressions,no-sequences
    while(len) x = Math.random() * len-- | 0, y = array[len], array[len] = array[x], array[x] = y
}