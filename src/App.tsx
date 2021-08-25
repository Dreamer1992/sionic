import React from 'react';
import classes from './App.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductsContainer from "./containers/ProductsContainer";
import BasketContainer from "./containers/BasketContainer";
import HistoryOrdersContainer from "./containers/HistoryOrdersContainer";
import RegistrationContainer from "./containers/RegistrationContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className={classes.app}>

            <div className={classes.content}>
                <div className={classes.mainContent}>
                    <Header/>

                    <Switch>
                        <Redirect exact from='/' to='/products'/>
                        <Route exact path="/products" render={() => <ProductsContainer/>}/>
                        <Route exact path="/basket" render={() => <BasketContainer/>}/>
                        <Route exact path="/history-orders" render={() => <HistoryOrdersContainer/>}/>
                        <Route exact path="/registration" render={() => <RegistrationContainer/>}/>
                    </Switch>
                </div>

                <Sidebar/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
