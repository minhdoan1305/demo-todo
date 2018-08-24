import React, { Component } from 'react';
import styled from 'styled-components';

const IconDelete = "https://png.icons8.com/metro/1600/delete-sign.png";

export default class Item extends Component {
    render() {
        return (
            <Wrapper>
                <Checkbox
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={() => this.props.onCheck(this.props.id, this.props.name, this.props.checked)}/>
                <Title style={this.props.checked ? {textDecoration: "line-through", color: "#cbcbcb"} : null}>
                    {this.props.name}
                </Title>
                <Delete
                    alt=""
                    src={IconDelete}
                    onClick={() => this.props.onDelete(this.props.id)}/>
            </Wrapper>
        );
    };
}

const Wrapper = styled.div`
    width: 70%;
    background: white;
    margin: auto;
    list-style: none;
    padding: 5px;
    border: solid 1px #cbcbcb;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Checkbox = styled.input`
    margin: 0px !important;
`

const Title = styled.p`
    margin: 0px;
`

const Delete = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`
