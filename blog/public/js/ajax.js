function xhr(url, status){
	this.status = status || true;
	this.url = url;
	this.xhr = new XMLHttpRequest();
	return this.xhr;
	
	this.post = function(){
		this.xhr.open('post', this.url, this.status);
		this.xhr.send();
		this.xhr.onreadystatechange = function(){
			if(this.xhr.readyState == 4 && this.xhr.status == 200){
				return this.xhr.responseText;
			}
		}
	}
	
	this.get = function(){
		this.xhr.open('get', this.url, this.status);
		this.xhr.send();
		this.xhr.onreadystatechange = function(){
			if(this.xhr.readyState == 4 && this.xhr.status == 200){
				return this.xhr.responseText;
			}
		}
	}	
}