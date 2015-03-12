# ReactJS Hello World Example

This repository is a simple template repository
that sets up react, reactify, and wzrd to easily
build and view your ReactJS Components.

## Usage

``` sh
git clone git@github.com:twilson63/reactjs-example.git
cd reactjs-example
npm install
```

Edit app.js

``` js
var React = require('react');

React.render(
  <h1>Hello, ReactJS</h1>,
  document.body
);
```

Run Server

``` sh
npm start
```

Open to http://localhost:9966

## Setup

So this project is using `browserify`, `wzrd`, and `reactify` to make it
very simple to get up and running.  To setup this project from scratch
you can do the following:

``` sh
npm i json -g
mkdir <project>
cd <project>
npm init
npm i react --save
npm i reactify wzrd --save
json -I -f package.json \
-e 'this.scripts.start="wzrd app.js -- -t reactify"'
```

