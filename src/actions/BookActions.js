import { FETCH_BOOK } from "./Types";
import { ADD_BOOK } from "./Types";
import { REMOVE_BOOK } from "./Types";
import { VIEW_BOOK } from "./Types";
import { SUBMIT_BOOK } from "./Types";
import axios from 'axios';

export const findBook = () => (dispatch) => {
    fetch("https://my-json-server.typicode.com/Vivekch05/e-book-json-server/books")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch({ type: FETCH_BOOK, payload: data });
        });
};

export const addBook = (bookItems, e,cartItem) => (dispatch) => {
    let productAlreadyInCart = false;
    let id = e.target.id;
    cartItem.forEach((cp) => {
        if (cp.id === id) {
          productAlreadyInCart = true;
        }
      });
    if(!productAlreadyInCart)
    {
    const currentItems = bookItems.filter((a) => a.id === id)
    console.log(currentItems);
    dispatch({ type: ADD_BOOK, payload: currentItems });
    }
    else{
        alert("This item is already present in your cart!:)");
    }
};

export const removeBook = (bookItems, e) => (dispatch) => {
    console.log(bookItems);
    let id = e.target.id;
    const cartItems = bookItems.filter((a) => a.id !== id);
    console.log(cartItems);
    dispatch({ type: REMOVE_BOOK, payload: cartItems });
};

export const viewBook=(bookItems,e)=>(dispatch)=>{
    let id = e.target.id;
    const currentItems = bookItems.filter((a) => a.id === id)
    console.log(currentItems);
    let stLink=currentItems[0].book_reader;
    console.log(stLink);
    dispatch({ type: VIEW_BOOK, payload: stLink });
}


export const submitBook =(state)=>(dispatch) => {
    //const axios = require('axios');

    const book = {
        id:state.id,
        title: state.title,
        author: state.author,
        cover_url: state.cover_url,
        price: state.price,
        pages:state.pages,
        category: state.category,
        year: state.year,
        rating: state.rating,
        book_reader: state.book_reader,
    };
    console.log(book);
    const resp1= axios.post("https://localhost:3000/books", book);
    const resp2=resp1.then(response => {
            console.log(response);
            console.log(resp2);
        })
        dispatch({type:SUBMIT_BOOK,payload:resp2});

}




