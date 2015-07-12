var ListContainer = React.createClass({

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
                return <ListItem name={item.name} type={item.type} address={item.address}/>;
            });
        }

        return (
            <div>
                <Button createSelectedIndex={this.createSelectedIndex} />
                <button onClick={ this.toggleListVisibility }> Show the list</button>
                <Spinner show={this.state.listVisible}/>
                {nameList}
            </div>
        )
    }

});

var Button = React.createClass({

    render: function() {
        return(
            <div>
                <p>What the f&amp;*k should ATTCK eat for lunch!?</p>
                <button onClick={this.props.createSelectedIndex}>Find me something</button>
            </div>

        )
    }

});

var Spinner = React.createClass({

    render: function() {

    var showClass = this.props.show? "show":"hide";
        return(
            <div className={"spinner"+ " " + showClass}>
            </div>
        )
    }

});

var ListItem =  React.createClass({
    render: function() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.type}</p>
                <p>{this.props.address}</p>
            </div>
        )
    }
});



React.render(
<ListContainer />,
document.body
);