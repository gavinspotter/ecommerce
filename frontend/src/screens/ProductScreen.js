import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import axios from "axios"
import Rating from "../components/Rating"

const ProductScreen = ({ match }) => {


    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }

        fetchProducts()
    }, [match])

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
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'in stock' : 'out of stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type='button' disabled={product.countInStock === 0}>
                                    add to cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
