import React, { useState, Component } from "react";
import axios from "axios";




export default class Items extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get("http://localhost:8000/polls/getItems").then(res => {
            const items = res.data;
            this.setState({ items});
        })
    }
    
    render(){
        return (
            <div> help </div>
        );
    }
    
}