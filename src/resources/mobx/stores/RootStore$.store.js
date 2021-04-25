import { applySnapshot, types } from 'mobx-state-tree'
import { galleryMock } from '../../mock/gallery'
import { GalleryModel } from '../models/GalleryModel.model'
import { shuffle } from '../../helpers/Functions'
import { flow } from 'mobx'
import axios from 'axios'
import { makeQuoteSnapshot } from '../helpers/functions'

export const RootStore$ = types.model('RootStore$', {
    gallery$: types.array(GalleryModel),
    quote$: types.optional(types.string, '')
})
    .actions((self) => (
            {
                setQuote(quote) {
                    self.quote$ = quote
                },

                getQuote: flow(function* () {
                    try {
                        let response = yield axios.get('https://api.kanye.rest')
                        const res = makeQuoteSnapshot(response)
                        if(!res) {
                            alert('API returned undefined!')
                            console.log('alert', response)
                        } else {
                            this.setQuote(res)
                        }
                    } catch(e) {
                        console.error('Error: ', e)
                    }
                }),

                setInitialQuote() {
                    self.quote$ = 'ye'
                }
            }
        )
    )
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