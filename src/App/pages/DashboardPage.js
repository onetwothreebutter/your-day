import React, {Component} from 'react';
import PageLayout from '../pages/PageLayout'
import Dashboard from '../components/Dashboard/Dashboard';

class DashboardPage extends Component {

  render(){

    return (
      <PageLayout>
        <Dashboard/>
      </PageLayout>
    )
  }
}

export default DashboardPage