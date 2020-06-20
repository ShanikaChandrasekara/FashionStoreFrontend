import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import DisplayItems from "./component/adminpage/display.component";

import AdminLogin from './component/login/adminlogin'

import Navigator from './component/navigator/navigationbar'
import AdminPage from "./component/adminpage/add.component";

import StoreManager from "./component/login/storeManagerSignup";
import UserDisplay from './component/adminpage/userDisplayPage'





import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



    class App extends Component {




        render() {
            return (



                <div>
                    <Navigator/>








                    <Router>
                        <Switch>
                            <Route path="/login" component={AdminLogin}></Route>
                            <Route path="/admin" component={AdminPage}></Route>
                            <Route path="/user" component={UserDisplay}></Route>
                            <Route path="/storemanager" component={StoreManager}></Route>
                            <Route path="/categories" component={DisplayItems}></Route>

                        </Switch>
                    </Router>




                </div>
            )
        }

    }


export default App;
