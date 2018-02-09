/*
    ./client/components/UserTable.jsx
*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'

class UserCol extends React.Component {
  render() {
    return (<div className="col sqs-col-1 span-1">
      <div className="sqs-block-content">
        <div className="center">
          <img className="avatar xs" src={this.props.user.avatarUrl} />
          <p>
            <a href={this.props.user.bioUrl}><strong>{this.props.user.firstname}</strong></a><br />
            <small>{this.props.user.bioTitle}</small>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers().then(response => {
      this.setState({
        users: response
      });
    });
  }

  fetchUsers() {
    const camelize = function(str) {
    return str
        .replace(/(?:\s|_)(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/(?:\s|_)/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
    }

    const camelizeObject = function(obj) {
      obj.forEach(u => {
        var attrName;
        for (attrName in u) {
          u[camelize(attrName)] = u[attrName]
          if (camelize(attrName) != attrName) {
            delete u[attrName]
          }
        }
      })
      return obj;
    }
    return fetch(`https://api.hackerhouse.paris/v1/users?q[active]=true&q[house_id]=${this.props.id}`).then(response => {
      return response.json();
    }).then(json => {
      return camelizeObject(json);
    });
  }

  render() {
    var cols = [];
    this.state.users.forEach(function(user) {
      cols.push(<UserCol user={user} />);
    });
    return (
      <div className="row sqs-row">
        {cols}
      </div>
    );
  }
}

var elem = document.getElementById('avatars');
var hh = elem.getAttribute('data-id');

if (hh != undefined) {
  ReactDOM.render(<UserTable id={hh} />, elem);
}
