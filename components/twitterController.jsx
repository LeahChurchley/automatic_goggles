'use strict';

import React from 'react';
import $ from 'jquery';


/* Twitter
 *
 * A widget that lists popular tweets with a given hashtag
 *
 */

export default class TwitterController extends React.Component {

  render(){
    // Loop over all tweets in this.state.data and render an li for each
    return(
      <ul>
        {this.state.data.map(function(tweet, i) {
          return <li dangerouslySetInnerHTML={{__html: tweet.html }} key={i} />;
        })}
      </ul>
    )
  }

  constructor(props){
    super(props);
    this.state = {data: [], loading: false};
  }

  componentWillReceiveProps(newProps){
    this.setState({data: [], loading: true});
    $.ajax({
      type: 'POST',
      url: '/api/twitter',
      data: {search_term: newProps.term},
      dataType: 'json',
      success: function(tweets){
        this.setState({data: tweets, loading: false});
      }.bind(this),
      error: function(err) { console.error('error', err) }.bind(this)
    });
  }

}

