var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function(){
        return (
            <div>
                <h4 className={this.props.item.favorite ? "" : "strikethrough"}>
                    {this.props.item.id}. {this.props.item.text} - {this.props.item.category}
                </h4>
            </div>
        )
    }
});