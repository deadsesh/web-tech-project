import './resources/styles/App.scss';
import 'antd/dist/antd.css';
import { HeaderLayout } from "./layouts/HeaderLayout";
import { GalleryLayout } from "./layouts/GalleryLayout";
import { ContactLayout } from "./layouts/ContactLayout";
import { AboutLayout } from "./layouts/AboutLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Redirect to="/"/>
                <HeaderLayout />
                <Switch>
                    <Route exact path="/" component={HomeLayout} />
                    <Route path="/gallery" component={GalleryLayout} />
                    <Route path="/about" component={AboutLayout} />
                    <Route path="/contact" component={ContactLayout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
