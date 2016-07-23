'use strict';

import React from 'react';
import $ from 'jquery';


/* WikipediaController
 *
 * A widget that presents the title and first paragraph of a Wikipedia article
 * matching a given search term.
 *
 */

export default class WikipediaController extends React.Component {

  render(){
    return(
      <div>
        <h2>{this.state.data.title}</h2>
        <p>{this.state.data.body}</p>
      </div>
    )
  }

  constructor(props){
    super(props);
    this.state = {data: {}, loading: false};
  }

  componentWillReceiveProps(newProps){
    this.setState({data: {}, loading: true});
    $.ajax({
      type: 'POST',
      url: '/api/wikipedia',
      data: {search_term: newProps.term},
      dataType: 'json',
      success: function(wikiData){
        this.setState({data: wikiData, loading:false});
      }.bind(this),
      error: function(err) { console.error('error', err) }.bind(this)
    });
  }


}
