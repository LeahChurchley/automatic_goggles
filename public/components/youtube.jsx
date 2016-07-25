'use strict';

import React from 'react';
import $ from 'jquery';
import YouTube from 'react-youtube';


/* YoutubeController
 *
 * A widget that shows the top video hit for a given YouTube search term.
 *
 */

export default class YoutubeController extends React.Component {

  render(){
    return(
      <iframe width="560" height="315" src={this.state.data} frameBorder="0"></iframe>
     );
    };

  constructor(props){
    super(props);
    this.state = {data: '', loading: false};
  }

  componentWillReceiveProps(newProps){
    this.setState({data: '', loading: true});
    $.ajax({
      type: 'POST',
      url: '/api/youtube',
      data: {search_term: newProps.term},
      dataType: 'json',
      success: function(videoURL){
        this.setState({data: videoURL, loading: false});
      }.bind(this),
      error: function(err) { console.error('error', err) }.bind(this)
    });
  }


}
