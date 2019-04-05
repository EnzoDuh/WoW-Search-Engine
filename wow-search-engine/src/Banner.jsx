import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import wowbanner from "./assets/images/wowBanner.svg";

class Banner extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>
                            {/* TODO: Fix responsiveness */}
                            {/* TODO : Create a card on Trello */}
                            <Image src={wowbanner} alt="image" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Banner;
