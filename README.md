# MetaNews

Single page application designed to let news readers get background info on the subject of their reading and help them tap into a unified conversation.

It takes as input data a search term and gives back a single page of results that includes:

1. a relevant wiki article
2. a relevant short video
3. tweets relevant to the event.


## Installation

To use MetaNews, you will need API keys for YouTube and Twitter. Once you have signed up for these, save them in a file `api/keys.js` with the following format.

```js
module.exports = {
  twitter: {
    consumer_key: YOUR_KEY,
    consumer_secret: YOUR_SECRET,
    access_token_key: YOUR_ACCESS_KEY,
    access_token_secret: YOUR_ACCESS_SECRET
  },
  youtube: YOUR_KEY
}

```

One you have done this, running MetaNews is very easy:

```
npm install
node server.js
```

For maximum portability, you can also have MetaNews run in a Docker container.
For convenience, we have documented the appropriate Docker commands in the `Makefile`.
