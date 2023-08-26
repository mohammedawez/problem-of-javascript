let ratingData = [  
    {restaurant: 'KFC', rating:5}, 
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3}, 
    {restaurant: 'Domino', rating:1}, 
    {restaurant: 'Subway', rating:4}, 
    {restaurant: 'Pizza Hut', rating:5},
    {restaurant: 'KFC', rating:6}
    ];

    // a) Calculate the Average rating for all the restaurants. 

    // set :- gives unique values from a given list

    const uniquerestaurants = Array.from(new set(ratingData.map(({restaurant}) => restaurant)));  
      // this will give me the output of unique resturants names.

    var arr = [];

    uniquerestaurants.map(restaurantName => {
        const filteredratingData = ratingData.filter(obj => obj.restaurant == restaurantName);    
    //array object[{restaurant: 'KFC', rating:5},{restaurant: 'KFC', rating:3}]

        let outputobj = {
            restaurant: restaurantName,
            averagerating:filteredratingData.reduce((prev,next) => prev+next.rating)/filteredratingData.length
        }
        arr.push(outputobj);
    });

    console.log(arr);

    // b.) List of all restaurants with average rating greater than or equal to 4. 
    
    
    const secondoutput = arr.filter(item => item.averagerating >= 4 );
    
    console.log(secondoutput);
