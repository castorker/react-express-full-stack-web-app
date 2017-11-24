var React = require('react');
var createReactClass = require('create-react-class');
var QuibbleEntity = require('./QuibbleEntity.jsx');

module.exports = createReactClass({
    render:function(){
        return (
            <div>
                <h1>List of Quibbles</h1>
                <div>
                    {this.props.items.map(function(item, index) {
                        return (
                            <QuibbleEntity item={item} key={"item" + index} />
                        )})
                    }
                </div>
            </div>
        )
    }
});