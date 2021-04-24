import React from 'react'
import { RootStore$ } from './stores/RootStore$.store'

const MainStore = RootStore$.create({})

const StoreContext = React.createContext(null)

export const StoreProvider = (props) =>
    <StoreContext.Provider value={ MainStore }>
        { props.children }
    </StoreContext.Provider>

export const useRootStore = () => {
    const store = React.useContext(StoreContext)

    if(!store) throw new Error('zxc')
    return store
}