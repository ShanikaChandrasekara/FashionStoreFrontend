import React, {Component} from 'react';
// import './App.css';
import axios from 'axios';

import DisplayItems from "./display.component";

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './adminStyles.css';

class add extends Component{

    constructor() {
        super();
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = {
        categoryid: '',
        categoryname: ''
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        const category = {
            categoryid: this.state.categoryid,
            categoryname: this.state.categoryname,

        };

        axios.post("http://localhost:8080/addCategory", category)
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

                <div className="col-md-6 no-gutters" >

                    <div className="leftside " style={{margin: "5vh"}}>
                        <div >
                            <DisplayItems/>
                        </div>

                    </div>


                </div>

                <div className="col-md-6 no-gutters">

                    <div className="rightside" >
                        <Link to="/storemanager">
                            <button type="button" className="btn btn-primary btn-lg float-right " href="/storemanager">Add Store Manager</button>
                        </Link>


                        <div className="login-parent-admin">
                            <div className="login-name-admin">

                            </div>

                            <form onSubmit={this.handleSubmit}>
                                <h3>Add New Category</h3>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Category ID</label>
                                    <input type="text" className="form-control" name="categoryid" required={true} value={this.state.categoryid} onChange={this.handleChange} aria-describedby="emailHelp"/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Category Name</label>
                                    <input type="text" className="form-control" name="categoryname" required={true} value={this.state.categoryname} onChange={this.handleChange} aria-describedby="emailHelp"/>

                                </div>

                                <button type="submit" className="btn btn-primary">Add</button>
                            </form>

                        </div>


                    </div>


                </div>
            </div>
        );
    }


}

export default add;
