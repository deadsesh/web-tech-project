import { galleryMock } from '../mock/gallery'

export const setInitialStateToLocalStorage = () => {
    localStorage.setItem('initialState', JSON.stringify(galleryMock))
}

export const getStateByKey = (key) =>
    JSON.parse(localStorage.getItem(key))

export const shuffle = (array) => { // fisher-yates
    let newArray = array
    let x, y, len
    len = newArray.length
    while(len) {
        x = Math.random() * len-- | 0
        y = newArray[len]
        newArray[len] = newArray[x]
        newArray[x] = y
    }
    return newArray
}