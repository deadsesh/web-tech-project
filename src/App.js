import React, { useEffect } from 'react';
import './resources/styles/App.scss';
import 'antd/dist/antd.css';
import { About, Contact, Gallery, Header, Home } from "./layouts/";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { setInitialStateToLocalStorage } from "./helpers/Functions";

function App() {

    useEffect(() => {
        setInitialStateToLocalStorage();
    }, [])
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
