import React, { useState, Component } from "react";
import axios from "axios";

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
        <div className="wrapper">
        {items.length > 0 ? (
            <div className="content">
            {items.map((item) => (
                <div className="item">
                <h2>Item No. {item.id}: {item.name}</h2>
                <p>{item.description}</p>
                <img src={item.url}></img>
                </div>
            ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
        </div>
      );
}