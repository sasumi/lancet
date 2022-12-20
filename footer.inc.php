<?php
$id = $_GET['id'];
if(!$id){
	list($id) = Record::createRecord();
}
?>
</section>

<?php if(!Record::isMime()):?>
<div class="share-section">
	<div class="content-wrap">
		<a href="?" class="button button-lite" target="_blank">我也要检测</a>
	</div>
</div>
<?php endif;?>

<?php if(Record::isMime()):?>
<section class="share-section">
	<div class="content-wrap">
		<input type="button" value="重新检测" onclick="location.reload();">
		<input type="button" value="复制结果URL" id="copy-url-btn">
	</div>
</section>
<script type="module">
	import {showInfo} from "./assets/toast.js";

	document.querySelector('#copy-url-btn').addEventListener('click', e => {
		navigator.clipboard.writeText(location.href).then(e => {
			alert('链接已复制');
		});
	});

	let xhr = null;
	let timer = null;
	const reportContent = document.getElementById('report-content');
	const save = () => {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			console.log('saving result');
			let contentHtml = reportContent.innerHTML.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
			let div = document.createElement('div');
			div.innerHTML = contentHtml;
			div.querySelectorAll('.button,.button-lite,.link, form').forEach(el =>{
				el.parentNode.removeChild(el);
			});
			contentHtml = div.innerHTML;
			if(xhr){
				xhr.abort();
			}
			xhr = new XMLHttpRequest();
			xhr.open('POST', '?save=1&id=<?=$id;?>', true);
			xhr.responseType = 'json';
			xhr.onload = function(e){
				showInfo('saved');
			};
			let formData = new FormData();
			formData.append('body', contentHtml);
			xhr.send(formData);
		}, 2000);
	};
	reportContent.addEventListener('DOMSubtreeModified', e=>{
		save();
	});
	save();
</script>
<?php endif;?>
</body>

</html>
