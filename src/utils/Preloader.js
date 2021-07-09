import {Container, Row} from "react-bootstrap";
import ReactLoading from "react-loading";
import React from "react";

export const Preloader = () => {
    return(
        <Container>
            <Row className="min-vh-100 justify-content-center align-items-center">
                <ReactLoading type={"spinningBubbles"} color={"#000000"} width={100}/>
            </Row>
        </Container>
    )
}