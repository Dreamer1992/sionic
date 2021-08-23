import React from 'react';
import classes from './App.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products";
import Basket from "./pages/Basket";
import HistoryOrders from "./pages/HistoryOrders";
import Registration from "./pages/Registration";

function App() {
    return (
        <div className={classes.app}>
            <Header/>

            <div className={classes.content}>
                <Switch>
                    <Redirect exact from='/' to='/products'/>
                    <Route exact path="/products" render={() => <Products/>}/>
                    <Route exact path="/basket" render={() => <Basket/>}/>
                    <Route exact path="/history-orders" render={() => <HistoryOrders/>}/>
                    <Route exact path="/registration" render={() => <Registration/>}/>
                </Switch>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
