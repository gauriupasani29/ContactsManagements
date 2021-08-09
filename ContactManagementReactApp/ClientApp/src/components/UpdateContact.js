import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export class UpdateContact extends Component {
    static displayName = UpdateContact.name;

  constructor(props) {
    super(props);
    this.state=
    {
        contacts:[]
    }
  }
  async componentDidMount() {
    this.populateContactsData();
  }

  UpdateClickHandler = () => {
     const contact={
         id: this.props.match.params.id,
      firstName: $("input[id=firstName]").val(),
      lastName: $("input[id=lastName]").val(),
      email: $("input[id=email]").val(),
      phoneNumber: $("input[id=phoneNumber]").val(),
      status: $("input[id=status]").val(),
    }
 debugger;
    console.log(contact);
      axios.put('https://localhost:44340/api/edit-contact', 
      {
        contact
      })
            .then(function (response) {
                console.log(response);
                window.location.assign("/list-contacts");  
            })
            .catch(function (error) {
                console.log(error);
            });
   
   
}
  async populateContactsData() {
    var id= this.props.match.params.id;
   
  debugger;
  axios.get('https://localhost:44340/api/contacts?id=' + id)
                .then(response=>{
                  
                    if(response.status='200'){
                        this.setState({
                            contacts:response.data,                       
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
                
}

  render() {
    return (
      <div>
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
                  
                        <tr>
                            <td> <input name="firstName"  type="text" id="firstName" defaultValue={this.state.contacts.firstName}  placeholder="First Name"  maxLength="3" maxLength="30" required/></td>
                            <td><input type="text" name="lastName" id="lastName"  defaultValue={this.state.contacts.lastName} placeholder="Last Name" maxLength="3" maxLength="30" required/></td>
                            <td><input type="text" name="email" id="email"  defaultValue={this.state.contacts.email} placeholder="Email" maxLength="3"  maxLength="30" /></td>
                            <td><input type="text" name="phoneNumber" id="phoneNumber"  defaultValue={this.state.contacts.phoneNumber} placeholder="Phone Number" maxLength="3" maxLength="30"/></td>
                            <td><input type="text" name="status" id="status"  defaultValue={this.state.contacts.status} placeholder="Status" maxLength="3" maxLength="30"/></td>
                            <td><button id="btnUpdate" onClick={this.UpdateClickHandler.bind(this)}>Update</button></td>
                        </tr>
                 
                </tbody>
            </table>
           
      </div>
    );
  }
}
