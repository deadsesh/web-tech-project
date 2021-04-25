import { applySnapshot, types } from 'mobx-state-tree'
import { galleryMock } from '../../mock/gallery'
import { GalleryModel } from '../models/GalleryModel.model'
import { shuffle } from '../../helpers/Functions'

export const RootStore$ = types.model('RootStore$', {
    gallery$: types.array(GalleryModel)
})
    .actions((self) => (
            {
                setContent(tag) {

                    self.gallery$ = shuffle(galleryMock)
                    if(tag !== 'all') {
                        self.gallery$ = self.gallery$.filter((image) => image.tag === tag)
                    } else {
                        applySnapshot(self.gallery$, galleryMock)
                    }
                },

                setInitialContent() {
                    self.gallery$ = galleryMock
                }
            }
        )
    )