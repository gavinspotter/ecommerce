import React from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Product from '../components/Product'
import Rating from "../components/Rating"
import products from "../products"

const ProductScreen = ({ match }) => {


    const product = products.find(p => p._id === match.params.id)

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                go back
        </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
