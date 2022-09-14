
async function include(resource, selector)
{
	let response = await fetch(resource);
	let text = await response.text();
	let parent = document.querySelector(selector);
	parent.insertAdjacentHTML("beforeend", text);
}

async function template(source, selector)
{
	let text = document.querySelector(source).innerHTML;
	let parent = document.querySelector(selector);
	parent.insertAdjacentHTML("beforeend", text);
}

function month(index)
{
	return ["января", "февраля", "марта",
			"апреля", "мая", "июня",
			"июля", "августа", "сентября",
			"октября", "ноября", "декабря"][index];
}
