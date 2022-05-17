import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OKRService from "../services/OKRService";

class UpdateOKRComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            description: '',
            owner: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeOwnerHandler = this.changeOwnerHandler.bind(this);
        this.updateOKR = this.updateOKR.bind(this);
    }

    componentDidMount() {
        OKRService.getOKRbyId(this.state.id).then((res) => {
            let okr = res.data;
            this.setState({
                name: okr.name,
                description: okr.description,
                owner: okr.owner
            });
        })
    }

    updateOKR = (event) => {
        event.preventDefault();
        let updateOKR = {name: this.state.name, description: this.state.description, owner: this.state.owner};
        console.log('okr => ' + JSON.stringify(updateOKR))

        OKRService.updateOKR(updateOKR, this.state.id).then((res) => {
            alert("Please go to List OKRs by yourself. Click Cancel button")
            // todo valid exit to list page
        })
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeOwnerHandler = (event) => {
        this.setState({owner: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add OKR</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                        <label>Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        <label>Owner: </label>
                                        <input placeholder="Owner" name="owner" className="form-control"
                                               value={this.state.owner} onChange={this.changeOwnerHandler}/>
                                        <button className="btn btn-success" onClick={this.updateOKR}>Save</button>
                                        <Link to="/okrs">
                                            <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateOKRComponent;