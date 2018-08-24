import React, { Component } from 'react';
import Item from './item';

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.status === "all" ?
                    this.props.list.map((item) => (
                        <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        checked={item.checked}
                        onCheck={this.props.onCheck}
                        onDelete={this.props.onDelete}/>
                    )) :
                        this.props.status === "active" ?
                            this.props.listActive.map((item) => (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    checked={item.checked}
                                    onCheck={this.props.onCheck}
                                    onDelete={this.props.onDelete}/>
                            )) :
                            this.props.listCompleted.map((item) => (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    checked={item.checked}
                                    onCheck={this.props.onCheck}
                                    onDelete={this.props.onDelete}/>
                            ))
                }
            </div>
        );
    };
}
