console.log("Sucsessfuly Imported StuffNThingsJS Library")

function copy(text)
{
	// Coppies the specified text to the user's clipboard
	// text = the text to be copied
	// PLEASE NOTE: MUST BE TRIGGERED BY USER ACTION, OR IT WILL NOT WORK
	var copyTextArea = document.createElement('textarea');
	copyTextArea.value = text;
	document.body.appendChild(copyTextArea);
	copyTextArea.select();
	document.execCommand('copy');
	document.body.removeChild(copyTextArea);
}