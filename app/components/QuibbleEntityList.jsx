var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render:function(){
        return (
            <div>
                <h1>List of Quibbles</h1>
                <div>
                    {this.props.items.map(function(item, index) {
                        return (
                            <div>{item.id}.  {item.text} - {item.category}</div>
                        )})
                    }
                </div>
            </div>
        )
    }
});