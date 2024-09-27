import './App.css';
import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Main} from "./layout/Main";
import React from "react";

class App extends React.Component{

    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;
