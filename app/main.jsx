var React = require('react');
var ReactDOM = require('react-dom');
var QuibbleEntityList = require('./components/QuibbleEntityList.jsx');
var quibbleStore = require('./stores/QuibbleStore.jsx');

console.log("Hello, transpiling JSX!");

var init = quibbleStore.getAll();

function render() {
    ReactDOM.render(<QuibbleEntityList quibbles={init} />, app);
}
quibbleStore.onChange(function(quibbles) {
    init = quibbles;
    render();
});
render();