$(document).ready(function(e) {

	  $.ajax({
		  url: 'http://lcboapi.com/products? callback=loadProduct',
		  headers: {
			Authorization: 'Token Access Key'
		  }
		}).then(function(data) {
		  
		  //Loading Products
			  function loadProduct(response) {
				  //Looping through product object
				  for(var i =0; i<20;i++)
				  {//adding each product to row in table
					$('#products').append('<tr><td>'+response.result[i].name+'</td> <td>'+response.result[i].origin+'</td> <td>'+response.result[i].producer_name+'</td> <td>'+response.result[i].style+'</td> <td>'+response.result[i].alcohol_content+'</td> <td>'+response.result[i].id+'</td> <td><img class="img-responsive" src="'+response.result[i].image_thumb_url+'"/></td></tr>');
				  }
			}
	
			console.log(data);
			loadProduct(data);
		});
		
});