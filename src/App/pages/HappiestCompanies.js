import React, {Component} from 'react';
import PageLayout from './PageLayout'

class HappiestCompanies extends Component {

  render(){
    return (
      <>
        <PageLayout auth={this.props.auth}>
          <h1>Happiest Companies</h1>
        </PageLayout>
      </>
    )
  }
}
// 40% of Family Fued responsdents said "work" when asked what place felt like a prison

export default HappiestCompanies;