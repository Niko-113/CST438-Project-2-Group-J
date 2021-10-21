import React, {Component} from 'react';
import "../styles/EditProfile.css";

class UpdateItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newusername: "",
            newpassword: "",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    newusernamehandler = (event) => {
        this.setState({
            newusername: event.target.value
        })
    }
    newpasswordhandler = (event) => {
        this.setState({
            newpassword: event.target.value
        })
    }


    //message showing data sent successfully
    handleSubmit = (event) => {
        alert(`${this.state.newusername}  User information updated`)
        console.log(this.state);
        this.setState({
            newusername: "",
            newpassword: "",

        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="UpdateItem">

                <form onSubmit={this.handleSubmit}>
                    
                    <label>New User: </label> <input type="text" value={this.state.newusername} onChange={this.newusernamehandler} placeholder="New username" /><br />
                    <label>New password: </label> <input type="link" value={this.state.newpassword} onChange={this.newpasswordhandler} placeholder="New password" /><br />
                    <input type="submit" value="Update User" />
                    <input type="submit" value="Delete User Account" />
                </form>

            </div>
            
        )
    }
}

export default UpdateItem