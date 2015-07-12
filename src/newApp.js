var LunchPicker = React.createClass({
    getInitialState: function() {
        return {
			randomRestaurant: null
		};
    },

	getRestaurantFromAPI: function() {
		var restaurantList = [
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

		return restaurantList;
	},

	generateRandomRestaurant: function() {
		var restaurantList = this.getRestaurantFromAPI(),
			generateRandomNumber = Math.floor(Math.random()*restaurantList.length),
			randomRestaurant = restaurantList[generateRandomNumber];

        this.setState({
        	// if value of randomRestaurant is truthy, get the value of randomRestaurant
        	randomRestaurant: randomRestaurant
        });
	},

	render: function() {
		var randomRestaurant = this.state.randomRestaurant;
		var randomRestaurantInfo;
		if(randomRestaurant) {
			randomRestaurantInfo = (
				<div className="restaurant-name-wrapper">
	                <h2>{randomRestaurant.name}</h2>
	                <p>Address: <span>{randomRestaurant.address}</span></p>
	                <p>Phone: <span>{randomRestaurant.phone}</span></p>
	                <p>Type: <span>{randomRestaurant.type}</span></p>
				</div>
			);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="button-wrapper">
							<h1>What the f*%$ should ATTCK eat for lunch!?</h1>
							<button onClick={this.generateRandomRestaurant }>Find me something</button>
						</div>
						{ randomRestaurantInfo }
					</div>
				</div>
			</div>
		);
	}
});


React.render (
	<LunchPicker />,
	document.body
);