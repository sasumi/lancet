export const showDialog = ({
	title,
	content,
	closeButton = true,
	width = 500
}) => {
	let dialog = document.createElement('div');
	dialog.className = 'qwc-dialog';
	document.body.appendChild(dialog);
	dialog.innerHTML = `
		<div class="dialog-title">${title}</div>
		${closeButton ? '<span class="dialog-top-close"></span>':''}
		<div class="dialog-content">${content}</div>
	`;
	dialog.style.width = width + 'px';
	if (closeButton) {
		dialog.querySelector('.dialog-top-close').addEventListener('click', e => {
			dialog.parentNode.removeChild(dialog)
		});
	}
	dialog.style.display = 'block';
	return dialog;
}
