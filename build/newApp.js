var LunchPicker = React.createClass({displayName: "LunchPicker",
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
		    "type": "Mexican",
		    "link": "http://www.seamless.com/food-delivery/choza-new-york-city.18160.r?a=966"
		},
		{
		    "name": "Dos Toros",
		    "address": "295 Park Ave South, New York, NY 10010",
		    "phone": "347-946-6225",
		    "type": "Mexican",
		    "link": "http://www.dostoros.com/"
		},
		{
		    "name": "DiDi Dumpling",
		    "address": "38 Lexington Avenue, New York, NY 10010",
		    "phone": "212-466-6618",
		    "type": "Chinese",
		    "link": "http://www.dididumplings.com/"
		},
		{
		    "name": "Mamagyro",
		    "address": "820 Broadway, New York, NY 10003",
		    "phone": "212-477-1717",
		    "type": "Greek",
		    "link": "http://www.seamless.com/food-delivery/mamagyro-new-york-city.17908.r"

		},
		{
		    "name": "Tiffin Wallah",
		    "address": "127 E 28th Street, New York, NY 10016",
		    "phone": "212-685-7301",
		    "type": "Indian",
		    "link": "http://www.seamless.com/food-delivery/tiffin-wallah-new-york-city.8113.r?a=966"
		},
		{
		    "name": "Sophie's Cuban Cuisine",
		    "address": "28 E 23rd Street, New York, NY 10010",
		    "phone": "212-260-8884",
		    "type": "Cuban",
		    "link": "http://www.seamless.com/food-delivery/sophie-cuban-cuisine-23rd-st-new-york-city.11353.r?a=966"
		},
		{
		    "name": "Chop't",
		    "address": "18 E 23rd St, New York, NY 10010",
		    "phone": "646-755-7837",
		    "type": "Salad Bar",
		    "link": "http://www.seamless.com/food-delivery/chop-t-creative-salad-co-flatiron-new-york-city.22115.r"
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
		var restaurantInfo;
		if(randomRestaurant) {
			restaurantInfo = (
				React.createElement("div", {className: "restaurant-info"}, 
	                React.createElement("h2", {className: "restaurant-name"}, randomRestaurant.name), 
	                React.createElement("p", null, React.createElement("strong", {className: "info-label"}, "Address:"), " ", React.createElement("span", null, randomRestaurant.address)), 
	                React.createElement("p", null, React.createElement("strong", {className: "info-label"}, "Phone:"), " ", React.createElement("span", null, randomRestaurant.phone)), 
	                React.createElement("p", null, React.createElement("strong", {className: "info-label"}, "Type:"), " ", React.createElement("span", null, randomRestaurant.type)), 
	                React.createElement("p", null, React.createElement("a", {className: "order-link", href: randomRestaurant.link, target: "_blank"}, "ORDER THAT SHIT!"))
				)
			);
		}

		return (
			React.createElement("div", {className: "container lunchpicker-container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-12"}, 
						React.createElement("div", {className: "wtf-wrapper"}, 
							React.createElement("h1", null, 
								"What the f&*k should ", React.createElement("br", null), 
								React.createElement("img", {src: "img/attck_logo.png", className: "attck-logo"}), " ", React.createElement("br", null), 
								"eat for lunch!?"
							), 
							React.createElement("button", {className: "btn", onClick: this.generateRandomRestaurant}, 
								"Find me something"
							)
						), 
						React.createElement("div", {className: "restaurant-info-wrapper"}, 
							 restaurantInfo 
						)
					)
				)
			)
		);
	}
});

React.render (
	React.createElement(LunchPicker, null),
	document.body
);