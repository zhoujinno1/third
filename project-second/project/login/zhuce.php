<?php
header('content-type:text/html;charset=utf8');
$connect=mysqli_connect('localhost','root','root','user',3306);
if(mysqli_connect_error()){
	die("服务器连接失败");
}
$un=$_REQUEST['unpname'];
$uw=$_REQUEST['unpkey'];
$sql1="INSERT INTO info (username,password) VALUES ('$un','$uw')";
	$result1=mysqli_query($connect,$sql1);
	if($result1){
		setcookie('username',$un,time()+24*3600);
		setcookie('password',$uw,time()+24*3600);
		echo 1;
	}else{
		echo 0;
	}
	
	?>