import { galleryMock } from '../mock/gallery';

export function setInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(galleryMock))
}

export const getStateByKey = (key) =>
    JSON.parse(localStorage.getItem(key))


export function filterByTag(tag) {
    const images = getStateByKey('initialState')

    shuffle(images)
    if(tag === 'all')
        return images
    else
        return images.filter((image) => image.tag === tag);
}

export const shuffle = (array, x, y, len) => { // fisher-yates
    let newArray = array
    len = newArray.length
    while(len) {
        x = Math.random() * len-- | 0
        y = newArray[len]
        newArray[len] = newArray[x]
        newArray[x] = y
    }
    return newArray
}