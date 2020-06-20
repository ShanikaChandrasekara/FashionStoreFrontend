import React, {Component} from 'react';
import './adminloginStyles.css'
import SignUp from './storeManagerSignup'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";



class Adminlogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    onChangeHandler = (e)  => {
        const {name, value} = e.target;
        console.log(name, value);

        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = () => {
        alert(JSON.stringify(this.state));



    }

    render() {
        return (

            <div>


                <div className="login-parent">
                    <div className="login-name">
                        <h1 className="title-login">Login</h1>
                    </div>

                    <div className="login-form">
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input name="email" onChange={this.onChangeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required={true} value={this.state.email} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input name="password" onChange={this.onChangeHandler} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required={true} value={this.state.password} />
                            </div>

                            <Link to="/admin">
                                <button type="submit" className="btn submit-button" href="/admin">Login</button>
                            </Link>

                        </form>
                    </div>

                </div>


            </div>
        );
    }
}

export default Adminlogin;