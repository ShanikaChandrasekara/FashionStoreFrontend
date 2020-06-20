import React, {Component} from 'react';
import axios from "axios";
import '../login/adminloginStyles.css'

class UserDisplayPage extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/findAllCategories")
            .then(response => response.data)
            .then((data) => {
                this.setState({categories: data})
            })

        // axios.get("")
        //     .then(response => response.data)
        //     .then((data) => {
        //         this.setState({category: data})
        //     })
    }

    render() {
        return (
            <div>
                <div className="row row-cols-1 row-cols-md-3 justify-content-center ">



                    <div className="col mb-4 justify-content-center " style={{margin: "10vh"}}>

                        {
                            this.state.categories.map((category) =>
                                <div className="card">

                                    <div className="card-body">

                                        <h5 className="card-title">{category.categoryname}</h5>




                                    </div>
                                </div>


                            )
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default UserDisplayPage;