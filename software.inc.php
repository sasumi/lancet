<dl class="result" tabindex="1">
	<dt>软件信息</dt>
	<dd>
		<ul>

			<li>
				<label>Javascript</label>
				<var id="js-state"><noscript><span class="no">未启用</span></noscript></var>
				<script>
					document.querySelector('#js-state').innerHTML = yesOrNot(true, '已启用');
				</script>
			</li>
			<li>
				<label>LocalStorage</label>
				<var>
					<script>document.write(supportText(window.localStorage))</script>
				</var>
			</li>
			<li>
				<label>sessionStorage</label>
				<var>
					<script>document.write(supportText(window.sessionStorage))</script>
				</var>
			</li>
			<li>
				<label>indexedDB</label>
				<var>
					<script>document.write(supportText(window.indexedDB))</script>
				</var>
			</li>
			<li>
				<label>Cookie</label>
				<var>
					<script>document.write(supportText(navigator.cookieEnabled))</script>
				</var>
			</li>
			<li>
				<label>GEO支持</label>
				<var>
					<script>document.write(supportText(navigator.geolocation))</script>
				</var>
			</li>
			<li>
				<label>是否联网</label>
				<var id="online-state">
				</var>
				<script>
					const chkOnline = ()=>{
						let d = new Date();
						document.querySelector('#online-state').innerHTML = yesOrNot(window.navigator.onLine, '已联网', '已离线')
							+ '<span class="check-time">'
							+ d.getHours().toString().padStart(2, '0')
							+ ':' + d.getMinutes().toString().padStart(2, '0')
							+ ':' + d.getSeconds().toString().padStart(2, '0') + '</span>';
					};
					chkOnline();
				</script>
			</li>
			<li>
				<label>Flash支持</label>
				<var>
					<script>
						document.write(jscd.flashVersion ? jscd.flashVersion : yesOrNot(false, '', '不支持'));
					</script>
				</var>
			</li>
			<li>
				<label>GEO地理位置</label>
				<var id="geo-ctn"></var>
				<script>
					let GEO_CTN = document.getElementById('geo-ctn');
					if(navigator.geolocation){
						GEO_CTN.innerHTML = '<span class="button-lite" id="get-geo-btn">点击授权获取</span>';
						document.querySelector('#get-geo-btn').addEventListener('click', e=>{
							navigator.geolocation.getCurrentPosition((pos) => {
								GEO_CTN.innerHTML = `经度：${pos.coords.longitude}，纬度：${pos.coords.latitude}`;
							}, err=>{
								if(err.code === 1){
									GEO_CTN.innerHTML = '请在地址栏中允许通过GEO访问后刷新页面重试';
								}
							});
						});
					} else {
						GEO_CTN.innerHTML = '<span>GEO不支持</span>';
					}
				</script>
			</li>
			<li class="line">
				<label>UserAgent</label>
				<var>
					<script>document.write(window.navigator.userAgent)</script>
					<script>
						let SERVER_UA = <?=json_encode($_SERVER['HTTP_USER_AGENT']);?>;
						document.write(yesOrNot(window.navigator.userAgent === SERVER_UA, '与服务端一致', '与服务端不一致'+SERVER_UA));
					</script>
				</var>
			</li>
		</ul>
	</dd>
</dl>
