import React, {Component} from 'react';
import OKRService from "../services/OKRService";
import {Link} from 'react-router-dom';

class ListOKRComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            okrs: []
        }
    }

    componentDidMount() {
        OKRService.getOKRs().then((res) => {
            this.setState({okrs: res.data})
        });
    }

    deleteOKR(id) {
        OKRService.deleteOKRbyId(id).then((res) => {
            this.state({okrs: this.state.okrs.filter(okr => okr.id !== id)});
            alert("Successfully deleted")
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">OKRs List</h2>
                <Link to="/add-okr">
                    <button className="btn btn-primary">Add OKR</button>
                </Link>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Owner</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.okrs.map(
                                okr =>
                                    <tr key={okr.id}>
                                        <td>{okr.name}</td>
                                        <td>{okr.description}</td>
                                        <td>{okr.owner}</td>
                                        <td>
                                            <Link to={'/update-okr/'} state={{id: okr.id}}>
                                                <button className="btn btn-info">Update</button>
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => this.deleteOKR(okr.id)}
                                                    style={{marginLeft: "10px"}}>Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListOKRComponent;