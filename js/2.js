const refs = {
confirm: document.querySelector('.js-confirmed'),
crit: document.querySelector('.js-critical'),
death: document.querySelector('.js-deaths'),
recov: document.querySelector('.js-recovered'),
date: document.querySelector('.js-date')
}

 function splitDecade (str) {
	 return str.toString().split("").reverse().join("").match(/.{1,3}/g).reverse().join(" ")
 }

//  console.log(splitDecade(123456765434))

fetch("https://covid-19-data.p.rapidapi.com/totals", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fecd9af26fmshc58e6fa02978f5ep12936fjsn34149f58aa30",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then(res => {
	return res.json()
})
.then( data => {
	refs.confirm.textContent = splitDecade(data[0].confirmed);
	refs.crit.textContent = splitDecade(data[0].critical);
	refs.death.textContent = splitDecade(data[0].deaths);
	refs.recov.textContent = splitDecade(data[0].recovered);
	
	const date = data[0].lastChange.split("T")[0]
	const time = data[0].lastChange.slice(11, 19)
	refs.date.textContent = date + ' ' + time
})
.catch(err => {
	console.error(err);
});

