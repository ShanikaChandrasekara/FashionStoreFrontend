import React, {Component} from 'react';
import './adminloginStyles.css'
import axios from "axios";
import '../adminpage/adminStyles.css';
import DisplayStoreMgr from './displaystoremanager'

class StoreManagerSignup extends Component {

    constructor() {
        super();
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = {
        username : '',
        email : '',
        password : '',
        confirmpassword: ''
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        const storemanager = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword

        };

        axios.post("http://localhost:8080/addStoreManager", storemanager)
            .then(response => {
                console.log(response.data)
                if(response.data != null){
                    this.setState(this.initialState);
                    alert("Data saved");
                }

            });


    };

    render() {
        return (
            <div className="row no-gutters">

                <div className="col-md-6 no-gutters">

                    <div className="leftside ">
                        <div>
                            <DisplayStoreMgr/>
                        </div>

                    </div>

                </div>



                <div className="col-md-6 no-gutters">

                    <div className="rightside">


                        <div className="login-parent">

                            <div className="login-name">
                                <h1 className="title-login">Sign Up</h1>
                            </div>

                            <div className="login-form">
                                <form onSubmit={this.handleSubmit}>
                                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input name="username" onChange={this.handleChange} type="text" className="form-control" id="inlineFormInputGroupUsername2" required={true} placeholder="Username" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" required={true} aria-describedby="emailHelp" placeholder="Enter email" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input name="password" onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" required={true} placeholder="Password" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                        <input name="confirmpassword" onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" required={true} placeholder="Re-enter Password" />
                                    </div>

                                    <button type="submit" className="btn submit-button">Sign Up</button>
                                </form>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        );
    }
}

export default StoreManagerSignup;