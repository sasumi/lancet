<dl class="result" tabindex="1">
	<dt>设备信息</dt>
	<dd>
		<ul>
			<li>
				<label>操作系统</label>
				<var><script>document.write(jscd.os+'('+jscd.osVersion+')')</script></var>
			</li>
			<li>
				<label>时区</label>
				<var><script>
						document.write(Intl.DateTimeFormat().resolvedOptions().timeZone + ", UTC+" + (-(new Date()).getTimezoneOffset()/60));

					</script></var>
			</li>
			<li>
				<label>浏览器</label>
				<var><script>document.write(jscd.browser+'('+jscd.browserMajorVersion+'/'+jscd.browserVersion+')')</script></var>
			</li>
			<li>
				<label>屏幕大小</label>
				<var><script>document.write(jscd.screen+'像素')</script></var>
			</li>
			<li>
				<label>屏幕DPI</label>
				<var>
					<span id="dpi"></span>
					<script>document.write(document.getElementById('dpi').offsetHeight)</script></var>
			</li>
			<li>
				<label>设备类型</label>
				<var>
					<script>document.write(jscd.mobile ? '移动设备' : '桌面设备')</script>
				</var>
			</li>
		</ul>
	</dd>
</dl>
