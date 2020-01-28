import React, {Component} from 'react';
export const FavesContext = React.createContext();

class FavesProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  render() {
    const {faveIds} = this.faveIds;
    console.log(faveIds);
    return (
      <FavesContext.Provider value={{...this.state}}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
