var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hello, transpiling JSX!");

var QuibbleEntityList = require('./components/QuibbleEntityList.jsx');

var init = [{
    id: 1,
    text: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
    category: "Chemistry",
    favorite: true
},{
    id: 2,
    text: "Why don't programmers like nature? It has too many bugs.",
    category: "Technology", 
    favorite: false
},{
    id: 3,
    text: "Sign on the door of an internet hacker. 'Gone Phishing'.",
    category: "Internet",
    favorite: true
},{
    id: 4,
    text: "A crazy programmer with a cold is a coughing hacker.",
    category: "Technology", 
    favorite: false
}];

ReactDOM.render(<QuibbleEntityList items={init}/>, app);