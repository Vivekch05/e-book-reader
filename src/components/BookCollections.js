import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeBook, viewBook } from '../actions/BookActions'

class BookCollections extends Component {
    handleRemove = (e) => {
        console.log(e.target.id);
        this.props.removeBook(this.props.bookDataCollections, e);
    }
    handleView = (e) => {
        console.log(e.target.id);
        this.props.viewBook(this.props.bookDataCollections, e);
    }
    handleCheckout = () => {
        this.props.history.push('./BookReader')
    }
    render() {
        const productItem = this.props.bookDataCollections;
        console.log(productItem);
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <table className="table table-striped">
                        <thead style={{ background: "#008080", color: "white", padding: "5px" }}>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {
                            productItem.map((item) => {
                                return (
                                    <tbody key={item.id}>
                                        <tr>
                                            <th scope="row">
                                                <img style={{ borderRadius: "100%", width: "20px", height: "20px", marginRight: "2px" }}
                                                    src={item.cover_url}
                                                    alt="book images" />
                                                {item.title}
                                            </th>
                                            <td>{item.author}</td>
                                            <td>{item.rating}</td>
                                            <td>
                                                <a href={this.props.bookLink} rel="noopener noreferrer" target="_blank"><button
                                                    className="btn btn-info btn-xs"
                                                    id={item.id}
                                                    onClick={this.handleView}
                                                    style={{ marginRight: "10px" }}
                                                >View</button></a>
                                                <button
                                                    className="btn btn-danger btn-xs"
                                                    id={item.id}
                                                    onClick={this.handleRemove}
                                                >Remove</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    bookDataCollections: state.bookItem.bookCollections,
    bookLink: state.bookItem.bookLink
});
export default connect(mapStateToProps, { removeBook, viewBook })(BookCollections);

