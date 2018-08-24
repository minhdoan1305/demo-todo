import React, { Component } from 'react';
import {itemRef} from './firebase-config';
import Logo from './logo';
import Input from './input';
import Loading from './loading';
import List from './list';
import Tab from "./tab";

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            list: [],
            listActive: [],
            listCompleted: [],
            isLoading: true,
            status: "all",
        }
    }

    componentDidMount() {
        itemRef.once("value", (data) => {
            let newData = data.val();
            if(newData !== null) {
                let arrayValue = Object.keys(newData).map((k) => (newData[k]));
                let array = [];
                for(let i = 0; i < arrayValue.length; i++){
                    array.push({
                        id: Object.keys(newData)[i],
                        name: arrayValue[i].name,
                        checked: arrayValue[i].checked
                    })
                }
                this.setState({list: array, isLoading: false})
            }
            else{
                this.setState({list: [], isLoading: false});
            }
        })
    }

    onNewTodo = (name) => {
            itemRef.push({
                name: name,
                checked: false,
            }).then((data) => {
                let id = data.key.toString();
                this.setState({
                    list: [...this.state.list, {id: id, name: name, checked: false}],
                    listActive: [...this.state.listActive, {id: id, name: name, checked: false}]});
            })
        console.log(name);
    }

    onChangeText = (event) => {
        this.setState({name: event.target.value})
    }

    default = () => {
        this.setState({name: ""});
    }

    onCheck = (id, name, checked) => {
        let list = this.state.list;
        for(let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list[i].checked = !list[i].checked;
            }
        }
        this.setState({
            list: list,
            listActive: this.state.list.filter((item) => (item.checked === false)),
            listCompleted: this.state.list.filter((item) => (item.checked === true))})
        itemRef.child(id).set({
            name: name,
            checked: !checked,
        })
    }

    onDelete = (id) => {
        this.setState({
            list: this.state.list.filter((item) => (item.id !== id)),
            listActive: this.state.listActive.filter((item) => (item.id !== id)),
            listCompleted: this.state.listCompleted.filter((item) => (item.id !== id))});
        itemRef.child(id).remove();
    }

    onActiveMenu = (status) => {
        itemRef.once("value", (data) => {
            let newData = data.val();
            if(newData !== null) {
                let arrayValue = Object.keys(newData).map((k) => (newData[k]));
                let array = [];
                for(let i = 0; i < arrayValue.length; i++){
                    array.push({
                        id: Object.keys(newData)[i],
                        name: arrayValue[i].name,
                        checked: arrayValue[i].checked
                    })
                }
                if (status === "active") {
                    let list = array.filter((item) => (item.checked === false));
                    this.setState({listActive: list, status})
                }
                else if (status === "completed") {
                    let list = array.filter((item) => (item.checked === true));
                    this.setState({listCompleted: list, status})
                }
                else {
                    this.setState({list: array, status});
                }
            }
            else{
                this.setState({list: [], status});
            }
        })
    }

    onClearCompleted = () => {
        itemRef.once("value", (data) => {
            let newData = data.val();
            if(newData !== null) {
                let arrayValue = Object.keys(newData).map((k) => (newData[k]));
                let array = [];
                for(let i = 0; i < arrayValue.length; i++) {
                    array.push({
                        id: Object.keys(newData)[i],
                        name: arrayValue[i].name,
                        checked: arrayValue[i].checked
                    })
                }
                this.setState({list: array.filter((item) => (item.checked === false))});
                let idClear = array.filter((item) => (item.checked === true));
                for(let i = 0; i < idClear.length; i++) {
                    itemRef.child(idClear[i].id).remove();
                }
            }
            else{
                this.setState({list: []});
            }
        });
        this.onActiveMenu("all");
    }

    render() {
        return (
            <div>
                <Logo/>
                <Input
                    name={this.state.name}
                    onChangeText={this.onChangeText}
                    onNewTodo={this.onNewTodo}
                    default={this.default}/>
                {
                    this.state.isLoading ?
                        <Loading isLoading={this.state.isLoading}/> :
                        <List
                            status={this.state.status}
                            list={this.state.list}
                            listActive={this.state.listActive}
                            listCompleted={this.state.listCompleted}
                            onCheck={this.onCheck}
                            onDelete={this.onDelete}
                            onClearCompleted={this.onClearCompleted}/>
                }
                <Tab
                    status={this.state.status}
                    onActiveMenu={this.onActiveMenu}
                    onClearCompleted={this.onClearCompleted}/>
            </div>
        );
    };
}
