import { types } from 'mobx-state-tree'

export const GalleryModel = types.model('GalleryModel', {
    id: types.identifier,
    title: types.string,
    src: types.model({
        default: types.string
    }),
    tag: types.string
})
// .actions((self) => (
//     {
//
//     }
// ))