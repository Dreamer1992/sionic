import React from 'react';
import classes from './App.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products";
import Basket from "./pages/Basket";
import HistoryOrders from "./pages/HistoryOrders";
import Registration from "./pages/Registration";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className={classes.app}>

            <div className={classes.content}>
                <div className={classes.mainContent}>
                    <Header/>

                    <Switch>
                        <Redirect exact from='/' to='/products'/>
                        <Route exact path="/products" render={() => <Products/>}/>
                        <Route exact path="/basket" render={() => <Basket/>}/>
                        <Route exact path="/history-orders" render={() => <HistoryOrders/>}/>
                        <Route exact path="/registration" render={() => <Registration/>}/>
                    </Switch>
                </div>

                <Sidebar/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
