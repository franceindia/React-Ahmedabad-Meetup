# React-Ahmedabad-Meetup
A repo for resources from the React Ahmedabad Meetups

## Part 1
### Getting started with React
##### Kiran Kumar Abburi, React Bangalore Meetup Founder, http://webrafter.com, https://github.com/akiran
#### Topics covered in this talk
* Basic principles of React
* Composition of react component
* Props Vs State
* Communication between react components

Few useful Links 
* [react-router](https://github.com/reactjs/react-router)
* [react-boostrap](https://github.com/react-bootstrap/react-bootstrap)
* [material-ui](https://github.com/callemall/material-ui)


## Part 2
### Handling Data Gracefully
##### (Jeff Friesen, Co-Founder [Snugg Home](http://snuggpro.com), https://github.com/jefffriesen)
Passing down callback functions or global event listeners get tedious. Facebook developered the Flux library, which was more of a pattern of data flow than a library. Dan Abramov (@dan_abramov) built a great implementation of the flux architecture called [Redux](http://redux.js.org).

Demo based on a repo that has already been set up. You can clone it and play with it yourself. The repo has React, Redux, tests, React Router, Babel, Webpack, SASS, Mocha and others:
https://github.com/coryhouse/react-slingshot

If you haven't worked with those libraries, using a starter project like this is a great way to play with them.

Covered in demo:
* Basic
  * How views access data from the store
  * How views call dispatchers to update the store (through a reducer function)
  * How the store is populated with default data
  * Using constants in place of strings for action names

* Slightly Advanced
  * Why the reducer *always* needs to return a new value (reference) instead of mutating it
  * How storing state in [Immutable.js](http://facebook.github.io/immutable-js/) can make life easier and more fun
  * [MobX](http://mobxjs.github.io/mobx/) as an alternative to Redux and why MobX should *not* using immutable data in the store

* Fun diversions
  * What is immutable data and how it can be so efficient: https://www.youtube.com/watch?v=SiFwRtCnxv4
  * Clojurescript wrappers around React: 
    * Om Next: https://www.youtube.com/watch?v=ByNs9TG30E8 
    * https://reagent-project.github.io
  * Rick Hickey created Clojure and has been pushing the entire functional programming (and programming) world forward. Watch any one of these talks: https://changelog.com/rich-hickeys-greatest-hits/

#### React starter project
Huge list of start projects: http://andrewhfarmer.com/starter-project/
Electron: https://github.com/chentsulin/electron-react-boilerplate
Repo used in demo: https://github.com/coryhouse/react-slingshot

Steps for most getting most starter project going:
1. git clone git@github.com:jefffriesen/react-slingshot.git
2. cd react-slingshot
3. npm i
4. npm start


#### Tutorials
Start with this (free): https://egghead.io/series/getting-started-with-redux
More in depth (Immutable, tests): http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-1/

Awesome people to follow on Twitter
* David Nolen, Functional Programming, OM Next, Clojurescript: [@swannodette](https://twitter.com/swannodette)
* Dan Abramov, Redux, React: [@dan_abramov](https://twitter.com/dan_abramov)
* Michel Weststrate, MobX [@mweststrate](https://twitter.com/mweststrate)
* Vjeux, React, React Native, Inline Styles in React [@Vjeux](https://twitter.com/Vjeux)
* ReactJS News [@ReactJSNews](https://twitter.com/ReactJSNews)
* James Long, React, Redux, lots of other stuff [@jlongster](https://twitter.com/jlongster)


## Part 3
### Stylin' React 
##### (Ben Mailian, Co-Founder [Snugg Home](http://snuggpro.com), founder of [Working Company](http://workingco.in) in Ahmedebad)
**Some cool talks on inline styling**
http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html
https://www.youtube.com/watch?v=ERB1TJBn32c

**Repos used in my demo**
These are installed using npm with the --save-dev flag
• Boiler plate: https://github.com/gaearon/react-transform-boilerplate
* CSS & style loaders for webpack: https://github.com/webpack/css-loader   https://github.com/webpack/style-loader
* ES7 decorators (@Radium) babel-plugin-transform-decorators-legacy
* Radium - better inline styling: https://github.com/FormidableLabs/radium
* Color manipulation: https://github.com/Qix-/color

In your webpack.config.js file under modules, add:
```
    { test: /\.css$/,
      loader: 'style-loader!css-loader' }
```
In .babelrc, add: 
```
  "plugins": ["transform-decorators-legacy"],
```

