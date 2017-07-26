import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import UserConlangsIndex from './user_conlangs/user_conlangs_index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestUserProfile(this.props.userId);
  }

  render() {
    const user = this.props.userProfile;
    if (!user.id) { return null; }

    return (
      <section className="main-section user-profile-section">
        <div className="user-profile-header">
          <h2 className="user-profile-name">{user.username}</h2>
        </div>
        <UserConlangsIndex conlangs={user.conlangs} />
      </section>
    );
  }
}

export default UserProfile;

// Find a way to make the index component DRYer
