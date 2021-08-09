import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery'

export class AddContact extends Component {
    static displayName = AddContact.name;

  constructor(props) {
    super(props);
   
  }
  async componentDidMount() {
    debugger;
    
  }

  AddHandler = () => {
    debugger;
    const contact={
      firstName: $("input[id=firstName]").val(),
      lastName: $("input[id=lastName]").val(),
      email: $("input[id=email]").val(),
      phoneNumber: $("input[id=phoneNumber]").val(),
      status: $("input[id=status]").val(),
    }
    console.log(contact);
      axios.post('https://localhost:44340/api/add-contact', 
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
                            <td> <input name="firstName"  type="text" id="firstName"   placeholder="First Name"  maxLength="3" maxLength="30" required/></td>
                            <td><input type="text" name="lastName" id="lastName"  placeholder="Last Name" maxLength="3" maxLength="30" required/></td>
                            <td><input type="text" name="email" id="email" placeholder="Email" maxLength="3"  maxLength="30" /></td>
                            <td><input type="text" name="phoneNumber" id="phoneNumber"  placeholder="Phone Number" maxLength="3" maxLength="30"/></td>
                            <td><input type="text" name="status" id="status"  placeholder="Status" maxLength="3" maxLength="30"/></td>
                            <td><button id="btnAdd" onClick={this.AddHandler.bind()}>Add New record</button></td>
                             </tr>
                 
                </tbody>
            </table>
      </div>
    );
  }
}
