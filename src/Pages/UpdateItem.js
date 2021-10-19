import React, {useState} from 'react';
import "../styles/UpdateItem.css";

const UpdateItem = () => {
    
    const [contact, setContact] = useState();
    const [addFormData, setAddFormData] = useState({
        item:'',
        url:'',
        image:'',
        description:'',
        priority: ''

    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event)


    return (
        <div className = "updateitem-container">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>URL</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Priority</th>
                    </tr>

                </thead>
                <tbody>

                </tbody>
            </table>
            
            <h2>Add an item</h2>
            <form>
                <input
                   type="text"
                   name="item"
                   required="required"
                   placeholder="Item name"
                   onChange = {handleAddFormChange}
                />
                <input
                   type="link"
                   name="url"
                   required="required"
                   placeholder="url"
                   onChange = {handleAddFormChange}
                />
                <input
                   type="text"
                   name="image"
                   required="required"
                   placeholder="image goes here"
                   onChange = {handleAddFormChange}
                />
                <input
                   type="text"
                   name="description"
                   required="required"
                   placeholder="decription"
                   onChange = {handleAddFormChange}
                />
                <input
                   type="text"
                   name="priority"
                   value = "required"
                   placeholder=""
                   onChange = {handleAddFormChange}
                />
                <button type="Submit">Add</button>
            
            </form>
        </div>
    );
};

export default UpdateItem;