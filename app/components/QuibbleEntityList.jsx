var React = require('react');
var createReactClass = require('create-react-class');
var QuibbleEntity = require('./QuibbleEntity.jsx');
var AddQuibble = require('./AddQuibble.jsx');

module.exports = createReactClass({
    render:function(){
        return (
            <div>
                <h1>List of Quibbles</h1>
                <div>
                    {this.props.quibbles.map(function(quibble, index) {
                        return (
                            <QuibbleEntity quibble={quibble} key={"quibble" + index} />
                        )})
                    }
                </div>
                <AddQuibble />
            </div>
        )
    }
});