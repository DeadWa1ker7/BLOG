$(function(){
	$(".subArt").click(function(){
		
		var vals = {
			'artTit': $(".artTit").val(),
			'artAuthor': $(".artAuthor").val(), 
			'artDate': (new Date()),
			'artPic': 'images/upload/test.png',
			'artDes': $(".artAuthor").html(),
			'artCon': $(".artAuthor").html(),
			'artTags': [],
			'artCount': 0
		};
		
		$.post('write', vals, function(data){
			if(data == 'OK'){
				alert('成功！');
			}
		})
	})
})