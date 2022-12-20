<?php

$client_ip = Record::getClientIp();
?>
<dl class="result" tabindex="1">
	<dt>网络信息</dt>
	<dd>
		<ul>
			<li>
				<label>公网出口IP</label>
				<var><?=$client_ip;?></var>
			</li>
			<li>
				<label>网络类型</label>
				<var id="network-type"></var>
			</li>
			<li>
				<label>下行速度/带宽(估算)</label>
				<var id="network-downlink"></var>
			</li>
			<li>
				<label>往返时间(估算)</label>
				<var id="network-rtt"></var>
			</li>
			<li>
				<label>打开/请求数据保护模式 <i class="info">数据保护模式主要针对</i></label>
				<var id="network-saveData"></var>
			</li>

			<script>
				let updNt = () => {
					const {rtt, downlink, effectiveType, saveData} = navigator.connection;
					document.getElementById('network-type').innerHTML = effectiveType;
					document.getElementById('network-downlink').innerHTML = downlink + 'Mb/s';
					document.getElementById('network-rtt').innerHTML = rtt + 'ms';
					document.getElementById('network-saveData').innerHTML = saveData ? '启用' : '禁用';
				};
				// navigator.connection.addEventListener('change', updNt);
				updNt();
			</script>
		</ul>
	</dd>
</dl>
