import { applySnapshot, types } from 'mobx-state-tree'
import { galleryMock } from '../../mock/gallery'
import { GalleryModel } from '../models/GalleryModel.model'
import { shuffle } from '../../helpers/Functions'

export const RootStore$ = types.model('RootStore$', {
    content$: types.array(GalleryModel)
})
    .actions((self) => (
            {
                setContent(tag) {

                    self.content$ = shuffle(galleryMock)
                    if(tag !== 'all') {
                        self.content$ = self.content$.filter((image) => image.tag === tag)
                    } else {
                        applySnapshot(self.content$, galleryMock)
                    }
                },

                setInitialContent() {
                    self.content$ = galleryMock
                    console.log('setinitial ' + self.content$)
                }
            }
        )
    )