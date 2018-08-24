import React, { Component } from 'react';
import styled from 'styled-components';


export default class Input extends Component {
    onEnterKeyPress = (event) => {
        if(event.keyCode === 13 && this.props.name !== "") {
           this.props.onNewTodo(this.props.name);
           this.props.default();
        }
    }

    render() {
        return (
            <Wrapper>
                <InputBar
                    placeholder="What needs to be done ?"
                    value={this.props.name}
                    onChange={(event) => this.props.onChangeText(event)}
                    onKeyDown={this.onEnterKeyPress}/>
            </Wrapper>
        );
    };
}

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
`
const InputBar = styled.input`
    width: 70%;
    border: none;
    border-radius: 5px;
    padding: 10px;
`
