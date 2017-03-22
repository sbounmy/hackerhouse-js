/*
    ./client/components/UserTable.jsx
*/
import React from 'react';

class UserCol extends React.Component {
  render() {
    return (<div className="col sqs-col-2 span-2">
      <div className="sqs-block-content">
        <div className="center">
          <img className="avatar xs" src={this.props.user.avatarUrl} />
          <p>
            <strong>{this.props.user.firstname}</strong><br /><small>{this.props.user.title}</small>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default class UserTable extends React.Component {
  render() {
    var cols = [];
    this.props.users.forEach(function(user) {
      cols.push(<UserCol user={user} />);
    });
    return (
      <div className="row sqs-row">
        {cols}
      </div>
    );
  }
}