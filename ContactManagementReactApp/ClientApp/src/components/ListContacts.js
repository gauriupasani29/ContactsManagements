import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery'

export class ListContacts extends Component {
    static displayName = ListContacts.name;

    constructor(props) {
        super(props);
        this.state = { contacts: [], loading: true };
    }

    async componentDidMount() {
        this.populateContactsData();
    }
    async componentDidUpdate()
    {
        this.populateContactsData();
    }


    DeleteClickHandler = (id) => {
        if(window.confirm('Are you sure you want to delete '+ id+'?'))
        {
            axios.delete('https://localhost:44340/api/delete-contact?id=' + id)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
              
        }
       
    }
    DeactivateClickHandler = (id) => {
        if(window.confirm('Are you sure you want to deactivate '+ id+'?'))
        {
        axios.put('https://localhost:44340/api/deactivate-contact?id='+id)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
          
        }
    }
    UpdateClickHandler = (contact) => { 
        window.location.assign("/contact/"+contact.id);      
    }
    CreateClickHandler = () => { 
        window.location.assign("/add-contact");      
    }

   renderContacts(contacts) {
        return (
            <React.Fragment>
            <button id="btnNew" onClick={this.CreateClickHandler} >Add New</button>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact =>
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.status}</td>
                            <td><button id="btnUpdate" onClick={this.UpdateClickHandler.bind(this,contact)}>Update</button></td>
                            <td><button id="btnDelete" onClick={this.DeleteClickHandler.bind(this,contact.id)}>Delete</button></td>
                            <td><button id="btnDeactivate" onClick={this.DeactivateClickHandler.bind(this,contact.id)}>Deactivate</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </React.Fragment>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderContacts(this.state.contacts);

        return (
            <div>
                <h1 id="tabelLabel" >List of Contacts</h1>

                {contents}
            </div>
        );
    }

    async populateContactsData() {

        const response = await axios.get('https://localhost:44340/api/list-contacts');
        const data = await response.data;
        this.setState({ contacts: data, loading: false });
        console.log("fetchdata:" + this.contacts);
    }
}
