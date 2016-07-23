'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import TwitterController from './twitter.jsx';
import WikipediaController from './wikipedia.jsx';
import YoutubeController from './youtube.jsx';


/* SearchBar
 *
 * A search bar that updates the Twitter, Wikipedia, and Youtube components
 * in response to a user's query
 *
 */

export default class SearchBar extends React.Component{

  render(){
    return(
      <form role="search" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" placeholder="research this" ref="myInput"/>
        </div>
        <button type="submit">search</button>
      </form>
    );
  }

  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.term = this.refs.myInput.value;
    ReactDOM.render(<WikipediaController term={this.state.term}/>, document.querySelector("#wiki"));
    ReactDOM.render(<TwitterController term={this.state.term}/>, document.querySelector("#twitter"));
    ReactDOM.render(<YoutubeController term={this.state.term}/>, document.querySelector("#video"));
  }

}
