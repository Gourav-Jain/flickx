import React from 'react'
import { Container, Segment, Header } from 'semantic-ui-react'
import "../../index.css";
export const HeaderBar = () => (
    <Segment inverted color="black">
        <Container>
            <Header as="h1" textAlign='center' inverted >
                Flick X
            </Header>
        </Container>
    </Segment >
)

export default HeaderBar;
