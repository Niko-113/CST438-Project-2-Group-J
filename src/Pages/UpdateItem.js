import React, {Component} from 'react';
import "../styles/UpdateItem.css";

class UpdateItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: "",
            url: "",
            image: "",
            description: "",
            priority: "",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    itemhandler = (event) => {
        this.setState({
            item: event.target.value
        })
    }
    urlhandler = (event) => {
        this.setState({
            url: event.target.value
        })
    }
    imagehandler = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    descriptionhandler = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    priorityhandler = (event) => {
        this.setState({
            priority: event.target.value
        })
    }

    //message showing data sent successfully
    handleSubmit = (event) => {
        alert(`${this.state.item}  item added Successfully !`)
        console.log(this.state);
        this.setState({
            item: "",
            url: "",
            image: "",
            description: "",
            priority: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="UpdateItem">

                <form onSubmit={this.handleSubmit}>
                    
                    <label>Item: </label> <input type="text" value={this.state.item} onChange={this.itemhandler} placeholder="item name" /><br />
                    <label>URL: </label> <input type="link" value={this.state.url} onChange={this.urlhandler} placeholder="URL" /><br />
                    <label>Image: </label> <input type="image" value={this.state.image} onChange={this.imagehandler} placeholder="image" /><br />
                    <label>Description: </label> <input type="text" value={this.state.description} onChange={this.descriptionhandler} placeholder="Type description of item" /><br />

                    <label>Priority: </label><select onChange={this.priorityhandler} defaultValue="Select priority">
                        <option defaultValue>Select Priority</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br />
                    <input type="submit" value="Update Item" />
                </form>

            </div>
            
        )
    }
}

export default UpdateItem