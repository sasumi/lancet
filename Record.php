<?php
class Record {
	public static function getSaveDir(){
		$tmp_dir = sys_get_temp_dir();
		$store_dir = $tmp_dir.'/lancet_result';
		if(!is_dir($store_dir)){
			mkdir($store_dir, 0777, true);
		}
		return $store_dir;
	}

	public static function generateID(){
		static $id;
		if(!$id){
			session_start();
			if($_SESSION['id']){
				$id = $_SESSION['id'];
				return $id;
			}
			$id = substr(md5(time().rand()), 16);
			$_SESSION['id'] = $id;
		}
		return $id;
	}

	public static function save($id, $data){
		$dir = self::getSaveDir();
		$file = $dir."/$id.html";
		if(stripos(realpath($file), realpath($dir)) !== 0){
			throw new Exception('File access deny:'.$file);
		}
		if(!is_file($file)){
			throw new Exception('File no exists');
		}
		file_put_contents($file, $data);
	}

	public static function getClientIp(){
		if(!empty($_SERVER['HTTP_CLIENT_IP'])){
			//ip from share internet
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		}elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
			//ip pass from proxy
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		}else{
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		return $ip;
	}

	public static function readRecord($id){
		$dir = self::getSaveDir();
		$file = $dir."/$id.html";
		if(stripos(realpath($file), realpath($dir)) !== 0){
			throw new Exception('File access deny:'.$file);
		}
		if(!is_file($file)){
			throw new Exception('File no exists');
		}
		return [$id, filemtime($file), file_get_contents($file)];
	}

	public static function isMime(){
		return $_GET['id'] === self::generateID();
	}

	public static function createRecord($content = ''){
		$id = self::generateID();
		$file = self::getSaveDir()."/$id.html";
		if(is_file($file)){
			return [$id, filemtime($file)];
		}
		file_put_contents($file, $content);
		return [$id, time()];
	}
}
