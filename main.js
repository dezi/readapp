console.log('readapp');

var match = document.location.href.match(/(http|https):\/\/([^\/?]+)/);

console.log(match);

var site = document.createElement('script');

site.type = 'text/javascript'

site.src  
	= 'https://raw.github.com'
	+ '/dezi/readapp/master'
	+ '/sites/'
	+ match[ 2 ]
	+ '.js'
	;

document.body.appendChild(site);

