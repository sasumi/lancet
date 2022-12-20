
<form action="" class="url-form hide">
	<label>检测域名</label>
	<input type="search" name="" id="">
	<input type="submit" value="提交检测">
</form>

<dl class="result" tabindex="1">
	<dt>
		域名检测
		<span class="button button-text" id="add-domain-check-button"><span class="iconfont icon-plus"></span>提交检测</span>
	</dt>
	<dd>
		<ul id="domain-check-list">
			<li>
				<script>document.write(checkDomainWrite('http://www.xiaoe-tech.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://www.xiaoe-tech.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('http://admin.xiaoe-tech.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://admin.xiaoe-tech.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/khwyrhmg0bshiiavgi9w.png'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/khwyrhmg0bshiiavgi9w.png'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://www.baidu.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://www.qq.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://i.qq.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://wx.qq.com'));</script>
			</li>
			<li>
				<script>document.write(checkDomainWrite('https://cloud.tencent.com/'));</script>
			</li>
		</ul>
	</dd>
</dl>

<script type="module">
	import {showDialog} from "./assets/dialog.js";
	import {showInfo, showToast} from "./assets/toast.js";
	const domainCheckList = document.querySelector('#domain-check-list');
	document.getElementById('add-domain-check-button').addEventListener('click', e=>{
		let dlg = showDialog({
			title: '添加测试域名',
			content: `
					<div style="padding:0 2em 2em;">
						<input type="text" placeholder="请输入需要检测的域名，格式如：http://domain.com" style="width:80%">
						<input type="submit" value="添加">
					</div>
				`
		});
		dlg.querySelector('input[type=submit]').addEventListener('click', e=>{
			let txt = dlg.querySelector('input[type=text]');
			let url = txt.value.trim();
			if(url.length === 0){
				showInfo('请输入域名');
				return;
			}

			let a = document.createElement('a');
			a.href = url;
			let hostText = a.protocol + '//' + a.hostname;
			let id = 'id_' + (new Date()).getTime() + '_' + Math.random();
			let li = document.createElement('li');
			li.innerHTML = `<label title="${hostText}">${hostText}</label><var id="${id}" class="nowrap"><span class="loading">检测中</span></var>`;
			domainCheckList.appendChild(li);
			let n = document.getElementById(id);
			let start = (new Date()).getTime();
			let pass = () => {
				n.innerHTML = yesOrNot(true, '通过') + timeCostHtml(start);
			};
			loadImage(url, pass, pass, () => {
				n.innerHTML = yesOrNot(false, '', '检测失败') + timeCostHtml(start);
			}, 10000);
			showToast('添加成功');
			dlg.style.display = 'none';
		});
	})
</script>
