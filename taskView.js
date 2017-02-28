
$.ajax({
	url:"http://jsonplaceholder.typicode.com/posts", 
	method:"GET", dataType:"json", 
	success: function (myData) {
		//for loop, get title of first post of user id 2
		for(i = 0; i <= 10; i++)
		{
			userId2 = myData[i].title;

		}
		console.log(userId2);
	}
});
