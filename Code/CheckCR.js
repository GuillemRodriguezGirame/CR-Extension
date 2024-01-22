
function CheckForNews()
{
	console.log('CR-> This is a ooooooooooooooooooooooooooooooo!');
	
	var elements = document.getElementsByClassName('diff-line added-line');
	console.log("CR->Console Elements: ", elements);
	console.log("CR->Console Elements Length: ", elements.length);
	
	var ArrayElements = [...elements];
	console.log("CR->Console Elements: ", ArrayElements);

	for (var i = 0; i < elements.length; i++) 
	{
		// Obtener el contenido del elemento
		var contenido = elements[i].textContent || elements[i].innerText;
		console.log("CR-> Contenido: ", contenido);

		// Buscar la palabra "new" dentro del contenido
		if (contenido.includes('new')) {
			// Realizar alguna acción con el elemento que contiene la palabra "new"
			console.log('CR->Element encontrado:', elements[i]);
		}
	}
}

// check if "diff-view" has the word "new"
// then add style before and after to change the style of the word.

//També es podria fer amb el "diff-line added-line" i el "diff-line removed-line"

// CheckForNews();

window.addEventListener('load', function() {
    CheckForNews();
});