var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function(){
        return (
            <div>
                <h4 className={this.props.quibble.favorite ? "" : "strikethrough"}>
                    {this.props.quibble.id}. {this.props.quibble.text} -&nbsp;
                    {(this.props.quibble.category.trim() == "") || (this.props.quibble.category.trim().length == 0)
                        ? "Generic" : this.props.quibble.category}
                </h4>
            </div>
        )
    }
});