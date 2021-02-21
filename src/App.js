import './resources/styles/App.scss';
import 'antd/dist/antd.css';
import { HeaderLayout } from "./layouts/HeaderLayout";
import {Layout} from "antd";

function App() {
    return (
        <div className="App">
            <Layout>
                <HeaderLayout/>
            </Layout>
        </div>
    );
}

export default App;
