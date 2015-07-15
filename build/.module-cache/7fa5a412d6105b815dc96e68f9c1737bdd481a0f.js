var ListContainer = React.createClass({displayName: "ListContainer",

    createSelectedIndex: function() {
        var randomRestaurant = Math.floor(Math.random() * dummyData.length);

    },

    render: function() {

        var dummyData = [
        {
            "name": "Choza",
            "address": "66 Madison Avenue, New York, NY 10016",
            "phone": "212-213-0708",
            "type": "Mexican"
        },

        {
            "name": "Dos Toros",
            "address": "295 Park Ave South, New York, NY 10010",
            "phone": "347-946-6225",
            "type": "Mexican"
        },

        {
            "name": "DiDi Dumpling",
            "address": "38 Lexington Avenue, New York, NY 10010",
            "phone": "212-466-6618",
            "type": "Chinese"
        },

        {
            "name": "Mamagyro",
            "address": "820 Broadway, New York, NY 10003",
            "phone": "212-477-1717",
            "type": "Greek"

        },

        {
            "name": "Tiffin Wallah",
            "address": "127 E 28th Street, New York, NY 10016",
            "phone": "212-685-7301",
            "type": "Indian"
        }
        ];

        var nameList;

        if(this.state.listVisible){
            nameList = dummyData.map(function(item, i) {
                return React.createElement(ListItem, {name: item.name, type: item.type, address: item.address});
            });
        }

        return (
            React.createElement("div", null, 
                React.createElement(Button, {createSelectedIndex: this.createSelectedIndex}), 
                React.createElement("button", {onClick:  this.toggleListVisibility}, " Show the list"), 
                React.createElement(Spinner, {show: this.state.listVisible}), 
                nameList
            )
        )
    }

});

var Button = React.createClass({displayName: "Button",

    render: function() {
        return(
            React.createElement("div", null, 
                React.createElement("p", null, "What the f&*k should ATTCK eat for lunch!?"), 
                React.createElement("button", {onClick: this.props.createSelectedIndex}, "Find me something")
            )

        )
    }

});

var Spinner = React.createClass({displayName: "Spinner",

    render: function() {

    var showClass = this.props.show? "show":"hide";
        return(
            React.createElement("div", {className: "spinner"+ " " + showClass}
            )
        )
    }

});

var ListItem =  React.createClass({displayName: "ListItem",
    render: function() {
        return(
            React.createElement("div", null, 
                React.createElement("h1", null, this.props.name), 
                React.createElement("p", null, this.props.type), 
                React.createElement("p", null, this.props.address)
            )
        )
    }
});



React.render(
React.createElement(ListContainer, null),
document.body
);