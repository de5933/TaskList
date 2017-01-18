$(document).ready(function(){
	$.ajax({url:"http://jsonplaceholder.typicode.com/posts", method:"GET", dataType:"json", data:{myTitle}})
    .done(function (myTitle)
         {
			var myTitle = [31].title;
             return myTitle;
             
         });
});

