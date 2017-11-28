var React = require('react');
var createReactClass = require('create-react-class');
var action = require('./../actions/QuibbleActionCreator.jsx');

module.exports = createReactClass({
    getInitialState:function() {
        return {id:0, text:'', category:'', favorite:false};
    },
    handleInputText:function(e) {
        this.setState({text : e.target.value});
    },
    handleInputCategory:function(e) {
        this.setState({category : e.target.value});
    },
    handleInputFavorite:function(e) {
        // console.log(e.target.checked, e.target.name);
        this.setState({favorite : e.target.checked});
    },
    addQuibble:function(e) {
        e.preventDefault();
        // console.log("Adding quibble!", this.state.text);
        action.add({
            id:0,
            text:this.state.text,
            category:this.state.category,
            favorite:this.state.favorite
        });
        
        this.setState({
            id:0,
            text:'',
            category:'',
            favorite:false
        });
    },
    render:function(){
        return (
            <div className='add-quibble'>
                <form onSubmit={this.addQuibble}>
                    <div>
                        <input 
                            placeholder='Enter text' 
                            value={this.state.text}
                            type='text'
                            onChange={this.handleInputText} 
                            required />
                    </div>
                    <div>
                        <input 
                            placeholder='Enter category' 
                            value={this.state.category}
                            type='text'
                            onChange={this.handleInputCategory} />
                    </div>
                    <div>
                        Favorite ? <input
                                        type="checkbox" 
                                        name="favoriteCheckBox"
                                        onChange={this.handleInputFavorite} 
                                        defaultChecked={this.state.favorite} />
                    </div>
                    <div>
                        <button className="button-primary"> Add Quibble </button>
                    </div>
                </form>
            </div>
        )
    }
});