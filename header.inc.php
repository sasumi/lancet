<?php

$id = $_GET['id'];
if(!$id){
	list($id, $check_timestamp) = Record::createRecord();
	header("Location: "."?id=$id");
	exit;
}
list($id, $check_timestamp) = Record::readRecord($id);
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>XET Lancet</title>
	<link rel="stylesheet" href="assets/style.css">
	<link rel="stylesheet" href="assets/dialog.css">
	<link rel="apple-touch-icon" sizes="180x180" href="assets/logo.png">
	<link rel="icon" type="image/png" sizes="32x32" href="assets/logo.png">
	<link rel="icon" type="image/png" sizes="16x16" href="assets/logo.png">

	<script src="assets/jscd.js"></script>
	<script src="assets/common.js"></script>
</head>
<body>
<header>
	<div class="content-wrap">
		<h1>小鹅通网络检测</h1>
	</div>
</header>
<div class="content-wrap">
	<ul class="base-info">
		<li>
			<label><?=Record::isMime() ? '当前系统' : '';?>检测ID</label>
			<var><?=$id;?></var>
		</li>
		<li>
			<label>检测时间</label>
			<var>
				<script>
					let d = new Date(<?=$check_timestamp*1000;?>);
					let text = d.getFullYear() + '年'
						+ d.getMonth().toString().padStart(2, '0') + '月'
						+ d.getDate().toString().padStart(2, '0') + '日 '
						+ d.getHours().toString().padStart(2, '0') + '时'
						+ d.getMinutes().toString().padStart(2, '0') + '分'
						+ d.getSeconds().toString().padStart(2, '0') + '秒';
					document.write(text);
				</script>
			</var>
		</li>
	</ul>
</div>
	<section class="content content-wrap" id="report-content">
