

function addData() {
	let city = document.querySelector('#city').value
	let country = document.querySelector('#country').value
	city.value = "";
	country.value = "";


		
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&&appid=f8353b0401b9173d0f83f654b1866b66`)
	.then(response => response.json())
	.then(data => {
		
		if (document.body.children[1].className === 'loaded') {
			let p = document.querySelector('.loaded');
			p.parentNode.removeChild(p);
		};
		let el = document.createElement('div');
		el.innerHTML = `<p>${data.name} is ${data.main.temp} degrees!</p>`;
		document.body.appendChild(el);
		document.querySelector('p').classList.add('loaded');
	})
	
}



