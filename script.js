
function month(index)
{
	return [ "января", "февраля", "марта",
				"апреля", "мая", "июня",
				"июля", "августа", "сентября",
				"октября", "ноября", "декабря" ][index];
}
onload = function()
{
	let today = new Date();
	let text = "" + today.getDate() +
				" " + month(today.getMonth()) +
				" " + today.getFullYear() + " г.";
	document.querySelector("#date").innerHTML = text;
}
