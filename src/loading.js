import React, { Component } from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';


export default class Loading extends Component {
    render() {
        return (
            <ModalLoading>
                <ModalLoadingContent>
                    <ClipLoader
                        size={100}
                        color={'white'}
                        loading={this.props.isLoading} />
                </ModalLoadingContent>
            </ModalLoading>
        );
    };
}

const ModalLoading = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalLoadingContent = styled.div`
    margin: 5% auto;
    padding: 20px;
    width: 30%;
    text-align: center;
`