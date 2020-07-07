import React, { Component } from 'react'
import HomePic1 from "../images/book20.jpg"
import HomePic2 from "../images/book26.jpg"
import HomePic3 from "../images/book31.jpg"
import Carousel from 'react-bootstrap/Carousel'
export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={HomePic1} style={{ height: "700px" }} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide</h3>
                            <p>A reader lives a thousand lives before he dies . . . </p>
                            <p>The man who never reads lives only one.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={HomePic2} style={{ height: "700px" }} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Second slide</h3>
                            <p>Books are a uniquely portable magic.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={HomePic3} style={{ height: "700px",opacity:"1" }} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide</h3>
                            <p>Read the best books first, or you may not have a chance to read them at all.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}
