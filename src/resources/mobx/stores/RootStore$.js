import { types, applySnapshot } from 'mobx-state-tree'
import { galleryMock } from "../../mock/gallery";
import { ContentModel } from "../models/ContentModel";
import { shuffle } from "../../helpers/Functions";

export const RootStore$ = types.model('RootStore$', {
    content$: types.array(ContentModel)
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