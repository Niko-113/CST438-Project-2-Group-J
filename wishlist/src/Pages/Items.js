import React, { useState, Component } from "react";
import axios from "axios";
import "../App.css"

export default function Items() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function getItems() {
            const res = await axios.get("http://localhost:8000/polls/getItems");
            console.log("DATA: " + JSON.stringify(res.data));
            setItems((res.data));
        }
        getItems();
    }, []);

    if (!items) return null;

    return (
        <div className="itemWrapper">
        {items.length > 0 ? (
            <div className="content">
            {items.map((item) => (
                <div className="item">
                <h4>Item No. {item.id}: {item.name}</h4>
                <p>{item.description}</p>
                <img className="itemImg" src={item.url}></img>
                <hr></hr>
                </div>
            ))}
            
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
        </div>
      );
}