import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>You've had xx good days in the past 30 days and xx bad days</h2>
        <h2>You're bad days were mainly caused by:</h2>
        <div>
          Graph of bad days
        </div>

        <h2>Work happiness trend</h2>
        <div>
          Graph of ratio of good days to bad days
          (show average of other employees at your company)
          (show average across all users)
        </div>


      </div>
    )
  }
}

export default Dashboard;