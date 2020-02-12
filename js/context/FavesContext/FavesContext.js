import React, {Component} from 'react';
import {saveFaves, getFaves, removeFaves} from '../../config/models';

export const MyContext = React.createContext();

class MyContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  async componentDidMount() {
    let faveIds = await getFaves();
    this.setState({faveIds});
  }

  addFaveSession = async sessionId => {
    await saveFaves(sessionId);
    let newFaves = await getFaves();
    this.setState({faveIds: newFaves});
  };

  removeFaveSession = async sessionId => {
    await removeFaves(sessionId);
    let newFaves = await getFaves();
    this.setState({faveIds: newFaves});
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
          faveIds: this.state.faveIds,
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyContextProvider;
