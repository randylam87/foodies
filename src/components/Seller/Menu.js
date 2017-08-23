
import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import AddMenuItemButton from "./AddMenuItemButton";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  createMenuItems() {
    let menuList;
    menuList = this.props.menu.map((menuItem, i) => {
      console.log(i);
      return <MenuItem key={ i } index={ i } item={ menuItem.name } description={ menuItem.description } price={ menuItem.price } availability={ menuItem.availability }
               edit={ this.props.edit } updateState={ this.props.updateState } removeFromStateArray={ this.props.removeFromStateArray } />
    });
    return menuList;
  }

  render() {
    if (this.props.menu.length > 0) {
      return (
        <div>
          <div className="row">
            <h4>Menu</h4>
            <AddMenuItemButton edit={ this.props.edit } addToStateArray={ this.props.addToStateArray } />
          </div>
          <div>
            { this.createMenuItems() }
          </div>
        </div>
        );
    }
    return (
      <div>
        <h4>No Items</h4>
        <AddMenuItemButton edit={ this.props.edit } addToStateArray={ this.props.addToStateArray } />
      </div>
      );
  }
}

export default Menu;
