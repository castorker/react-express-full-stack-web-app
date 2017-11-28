var React = require('react');
var createReactClass = require('create-react-class');
var action = require('./../actions/QuibbleActionCreator.jsx');

module.exports = createReactClass({
    toggleFavorite:function(e) {
        e.preventDefault();
        
        if (this.props.quibble.favorite) {
            action.unfavorite(this.props.quibble);
        } else {
            action.favorite(this.props.quibble);
        }
    },
    delete:function(e) {
        e.preventDefault();
        action.delete(this.props.quibble);
    },
    render: function(){
        return (
            <div className="add-quibble row">
                <div className="six columns">
                    <h4 className={this.props.quibble.favorite ? "" : "strikethrough"}>
                        {this.props.quibble.id}. {this.props.quibble.text} -&nbsp;
                        {(this.props.quibble.category.trim() == "") || (this.props.quibble.category.trim().length == 0)
                            ? "Generic" : this.props.quibble.category}
                    </h4>
                </div>

                <form className="three columns" onSubmit={this.toggleFavorite}>
                    <button className={this.props.quibble.favorite ? "favorite-false" : "favorite-true"}>{this.props.quibble.favorite ? "UnFavorite" : "Favorite"}</button>
                </form>

                <form className="three columns" onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
            </div>
        )
    }
});