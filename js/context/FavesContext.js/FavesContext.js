import React, {Component} from 'react';
export const FavesContext = React.createContext();
import {saveFaves, getFaves, removeFaves} from '../../config/models';

class FavesProvider extends React.Component {
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
    await addFave(sessionId);
    let newFaves = await getFaves();
    this.setState({faveIds: newFaves});
  };

  removeSession = async sessionId => {
    await removeFave(sessionId);
    let newFaves = await getFaves();
    this.setState({faveIds: newFaves});
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          addFaveSession: this.addFaveSession,
          removeSession: this.removeFaveSession,
          faveIds: this.state.faveIds,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
