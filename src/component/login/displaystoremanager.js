import React, {Component} from "react";
import axios from 'axios';

class DisplayStoreManager extends Component {

    constructor() {
        super();
        this.state = {
            storemanagers: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/findAllStoreManagers")
            .then(response => response.data)
            .then((data) => {
                this.setState({storemanagers: data})
            })


    }

    deleteitem = (storemanagerID) => {
        axios.delete("http://localhost:8080/deleteStoreManager/" + storemanagerID)
            .then(response => {
                alert("Store Manager deleted")

                this.setState({
                    storemanagers: this.state.storemanagers.filter(storemanager => storemanager.username !== storemanagerID)
                })
            })
    };


    render() {
        return (


            <div className="col-12 .col-sm-6 .col-md-8">

                <h2 className="card-title" style={{color:"white"}}>Store Managers List</h2>

                {
                    this.state.storemanagers.map((storemanager) =>

                        <div className="col mb-4 justify-content-center" >


                            <div className="card">

                                <div className="card-body">


                                    <p className="card-text">Username : {storemanager.username}</p>
                                    <p className="card-text">Email : {storemanager.email}</p>


                                    <button type="button" className="btn btn-primary" >Edit</button>
                                    <button type="button" className="btn btn-primary" onClick={this.deleteitem.bind(this, storemanager.username)}>Delete</button>
                                </div>
                            </div>




                        </div>
                    )


                }
            </div>


        )

    }
}
export default DisplayStoreManager;
