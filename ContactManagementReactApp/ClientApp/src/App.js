import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { AddContact } from './components/AddContact';
import {ContactById} from './components/ContactById'
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        
            <Route path='/add-contact' component={AddContact} />
            <Route path='/' component={FetchData} />
            <Route path='/contact/:id' component={ContactById} />
      </Layout>
    );
  }
}
