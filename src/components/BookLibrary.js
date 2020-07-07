import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from 'react-mdl';
import { connect } from 'react-redux';
import { findBook, addBook } from '../actions/BookActions'
class BookLibrary extends Component {
    componentDidMount() {
        this.props.findBook();
    }
    handleBook = (e) => {
        console.log(e.target.id);
        this.props.addBook(this.props.bookData, e, this.props.bookDataCollections);
    }

    render() {
        console.log(this.props.bookData);
        console.log(this.props.bookDataCollections);
        return (
            <>
                {
                    this.props.bookData.length !== 0 ?
                        <Grid>
                            {
                                this.props.bookData.map((item) => {
                                    return (
                                        <Cell col={4} key={item.id} style={{ display: "flex", flexWrap: "wrap" }}>

                                            <Card shadow={0} style={{ margin: 'auto', marginTop: "30px" }}>
                                                <CardTitle style={{ color: '#008080', height: '450px', background: `url(${item.cover_url}) center / cover` }}>{item.title}</CardTitle>
                                                <CardText>
                                                    <Grid style={{ display: "flex", flexWrap: "nowrap" }}>
                                                        <Cell col={4}>
                                                            <label style={{ color: "black", fontWeight: "bold" }}>Author</label>
                                                            <label style={{ color: "black", fontWeight: "bold" }}>Price</label>
                                                            <label style={{ color: "black", fontWeight: "bold" }}>Category</label>
                                                            <label style={{ color: "black", fontWeight: "bold" }}>Rating</label>
                                                        </Cell>
                                                        <Cell col={8}>
                                                            <label>{item.author}</label><br />
                                                            <label>{item.price} Rs</label><br />
                                                            <label>{item.category}</label><br />
                                                            <label>{item.rating}</label>
                                                        </Cell>
                                                    </Grid>
                                                </CardText>
                                                <CardActions border>
                                                    <Button colored style={{ background: "#008080", color: "white", borderRadius: "10px" }} id={item.id} onClick={this.handleBook}
                                                    >Add Book</Button>
                                                </CardActions>
                                                <CardMenu style={{ color: '#008080' }}>
                                                    <IconButton name="share" />
                                                </CardMenu>
                                            </Card>
                                        </Cell>


                                    )

                                }

                                )}
                        </Grid> :
                        <div className="text-center">
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }
            </>

        )
    }
}
const mapStateToProps = (state) => ({
    bookData: state.bookItem.books,
    bookDataCollections: state.bookItem.bookCollections

});

export default connect(mapStateToProps, { findBook, addBook })(BookLibrary);

