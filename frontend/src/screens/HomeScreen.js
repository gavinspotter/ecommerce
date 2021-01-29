import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from "../products"

const HomeScreen = () => {
    return (
        <>
            <h1> latest products</h1>
            <Row>
                {products.map(product => 
                    <Col sm={12} md={6} lg={3}>
                    <h3>{product.name}</h3>
                    </Col>
                    )}
            </Row>
        </>
    )
}

export default HomeScreen
