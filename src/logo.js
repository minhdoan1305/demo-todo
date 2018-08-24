import React, { Component } from 'react';
import styled from 'styled-components';

const logoURL = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/15697887_172038056605790_9204508296954685379_n.jpg?_nc_cat=0&oh=bc2ac13c8b409da2c57569af1dda46e7&oe=5BF9CE68";

export default class Logo extends Component {
    render() {
        return (
            <Wrapper className="logo">
                <Image
                    alt=""
                    className="img-responsive"
                    src={logoURL} />
            </Wrapper>
        );
    };
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`

const Image = styled.img`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
`