import React, {Component} from "react";
import axios from 'axios';

class DisplayCategories extends Component {

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


    }

    deleteitem = (categoryID) => {
        axios.delete("http://localhost:8080/delete/" + categoryID)
            .then(response => {
                alert("Category deleted")

                this.setState({
                    categories: this.state.categories.filter(category => category.categoryid !== categoryID)
                })
            })
    };



    render() {
        return (


            <div className="col-12 .col-sm-6 .col-md-8">

                <h2 className="card-title">Categories</h2>

                {
                    this.state.categories.map((category) =>

                <div className="col mb-4 justify-content-center" >


                            <div className="card">

                                <div className="card-body">


                                    <p className="card-text">Category ID : {category.categoryid}</p>
                                    <p className="card-text">Category Name : {category.categoryname}</p>


                                    <button type="button" className="btn btn-primary" >Edit</button>
                                    <button type="button" className="btn btn-primary" onClick={this.deleteitem.bind(this, category.categoryid)}>Delete</button>
                                </div>
                            </div>




                </div>
                    )


                }
            </div>


        )

    }
}
export default DisplayCategories;
