<?php
include_once __DIR__.'/Record.php';

if($_GET['save']){
	Record::save($_GET['id'], $_POST['body']);
	echo json_encode(['code' => 0, 'msg' => 'success']);
	exit;
}

include "header.inc.php";
if(Record::isMime()){
	include "device.inc.php";
	include "software.inc.php";
	include "network.inc.php";
	include "domain.inc.php";
	include "speed.inc.php";
}else{
	list($id, $mktime, $html) = Record::readRecord($_GET['id']);
	echo $html;
}
include "footer.inc.php";
