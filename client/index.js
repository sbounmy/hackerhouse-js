/*
    ./client/index.js
    which is the webpack entry file
*/

import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from './components/UserTable.jsx';

var USERS = [
  {firstname: 'Stephane',      lastname: 'Bounmy',    login: 'stephane', title: 'Growth Hacker', avatarUrl: 'http://hackerhouse.paris/s/stephane2.jpg'},
  {firstname: 'Nicolas',       lastname: 'Wagner',    login: 'n1c0', title: 'Blockchain Hacker', avatarUrl: 'http://hackerhouse.paris/s/nico.jpg' },
  {firstname: 'Edmond-Xavier', lastname: 'Collot',    login: 'didix', title: 'Ruby dev', avatarUrl: 'http://hackerhouse.paris/s/didix.jpg' },
  {firstname: 'Arthur',        lastname: 'Langlais',  login: 'michaelscott', title: 'Fintech', avatarUrl: 'http://hackerhouse.paris/s/arthur.jpg' },
  {firstname: 'Emmanuel',      lastname: 'Solom',     login: 'muesli', title: 'IBM Engineer', avatarUrl: 'http://hackerhouse.paris/s/emmanuel.jpg' }
];

ReactDOM.render(<UserTable users={USERS} />, document.getElementById('root'));