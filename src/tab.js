import React, { Component } from 'react';
import styled from 'styled-components';


export default class Tab extends Component {
    render() {
        return (
            <Wrapper>
                <TabMenu
                    style={this.props.status === "all" ? {fontWeight: "bold", color: "white"} : null}
                    onClick={() => this.props.onActiveMenu("all")}>
                    All
                </TabMenu>
                <TabMenu
                    style={this.props.status === "active" ? {fontWeight: "bold", color: "white"} : null}
                    onClick={() => this.props.onActiveMenu("active")}>
                    Active
                </TabMenu>
                <TabMenu
                    style={this.props.status === "completed" ? {fontWeight: "bold", color: "white"} : null}
                    onClick={() => this.props.onActiveMenu("completed")}>
                    Completed
                </TabMenu>
                <TabMenu onClick={this.props.onClearCompleted}>
                    Clear Completed
                </TabMenu>
            </Wrapper>
        );
    };
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background: transparent;
    color: rgba(255, 255, 255, 0.3);
    width: 70%;
    margin: auto;
    list-style: none;
    padding: 5px;
    border: none;
    border-radius: 5px;
    text-align: center;
`

const TabMenu = styled.div`
    text-align: center;
    padding: auto;
    cursor: pointer;
        
     &:hover {
        color: white;
     }
`
