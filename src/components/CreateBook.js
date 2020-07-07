import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo } from '@fortawesome/free-solid-svg-icons';
import { submitBook } from '../actions/BookActions';
import { connect } from 'react-redux';
//import axios from 'axios';
class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState
    }

    initialState={
        id: "",
        title: "",
        author: "",
        cover_url: "",
        pages: "",
        category: "",
        year: "",
        rating: "",
        book_reader: "",
        price: ""

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitBook(this.state);
        console.log(this.state);



    }
    bookChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);

    }
    resetBook = () => {
        this.setState(() => this.initialState);
        console.log(this.initialState);
    }

    render() {
        const { id, title, author, cover_url, pages, price, category, book_reader, rating, year } = this.state;
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <Card>
                        <Card.Header style={{ background: "#008080", color: "white" }}><FontAwesomeIcon icon={faPlusSquare} />&nbsp;Create Book</Card.Header>
                        <Form onReset={this.resetBook} onSubmit={this.handleSubmit}>
                            <Card.Body>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="id"
                                            value={id}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Id"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="title"
                                            value={title}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Title"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridAuthor" >
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="author"
                                            value={author}
                                            onChange={this.bookChange}
                                            placeholder="Enter Author Name"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCover_url">
                                        <Form.Label>Cover Photo Url</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="cover_url"
                                            value={cover_url}
                                            onChange={this.bookChange}
                                            placeholder="Enter Cover Photo Url"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="price"
                                            value={price}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Price"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPages">
                                        <Form.Label>Pages</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="pages"
                                            value={pages}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Page"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="category"
                                            value={category}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Category"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridYear">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="year"
                                            value={year}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Year"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridRating">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="rating"
                                            value={rating}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Ratings"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridBook_Link">
                                        <Form.Label>Book Link</Form.Label>
                                        <Form.Control required autoComplete="off"
                                            type="text" name="book_reader"
                                            value={book_reader}
                                            onChange={this.bookChange}
                                            placeholder="Enter Book Link"
                                            className="bg-white text-black"
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <Button style={{ marginRight: "5px" }} size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} />
                            &nbsp;Submit
                        </Button>
                                <Button size="sm" variant="info" type="reset"><FontAwesomeIcon icon={faUndo} />
                            &nbsp;Reset
                        </Button>
                            </Card.Footer>
                        </Form>

                    </Card>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    bookData: state.bookItem.books,
    // bookDataCollections: state.bookItem.bookCollections

});

export default connect(mapStateToProps, { submitBook })(CreateBook);

