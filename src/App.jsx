import React from 'react'
import './resources/styles/App.scss'
import 'antd/dist/antd.css'
import { About, Contact, Gallery, Header, Home } from './resources/layouts/'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { StoreProvider } from './resources/mobx/RootStoreProvider'

function App() {

    // useEffect(() => {
    //     setInitialStateToLocalStorage();
    // }, [])

    return (
        <div className="App">
            <StoreProvider>
                <Router>
                    <Redirect to="/"/>
                    <Header/>
                    <AnimatePresence>
                        <Switch>
                            <Route exact path="/" component={ Home }/>
                            <Route path="/gallery" component={ Gallery }/>
                            <Route path="/about" component={ About }/>
                            <Route path="/contact" component={ Contact }/>
                        </Switch>
                    </AnimatePresence>
                </Router>
            </StoreProvider>
        </div>
    )
}

// TODO typescript
// TODO about
// TODO home
// TODO contact with smtp
// TODO animations
// TODO splashscreen
export default App
