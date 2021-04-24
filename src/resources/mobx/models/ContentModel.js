import { types } from "mobx-state-tree";

export const ContentModel = types.model('ContentModel', {
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