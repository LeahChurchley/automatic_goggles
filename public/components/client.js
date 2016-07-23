'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './searchbar.jsx';
import TwitterController from './twitter.jsx';
import WikipediaController from './wikipedia.jsx';
import YoutubeController from './youtube.jsx';

ReactDOM.render(<SearchBar/>, document.querySelector("#searchform"));
ReactDOM.render(<WikipediaController/>, document.querySelector("#wiki"));
ReactDOM.render(<TwitterController/>, document.querySelector("#twitter"));
ReactDOM.render(<YoutubeController/>, document.querySelector("#video"));
