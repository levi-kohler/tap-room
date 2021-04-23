import React from 'react';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default KegControl;