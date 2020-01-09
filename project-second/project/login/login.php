<?php
header('content-type:text/html;charset=utf8');
$connect=mysqli_connect('localhost','root','root','user',3306);
if(mysqli_connect_error()){
	die("服务器连接失败");
}
$un=$_REQUEST['unpname'];
$uw=$_REQUEST['unpkey'];
$sql="SELECT * FROM info WHERE username='$un' AND password='$uw'";
$result=mysqli_query($connect,$sql);
$rows = mysqli_num_rows($result);
if($rows>0){
	setcookie('username',$un,time()+24*3600,"/project-second");
	setcookie('password',$uw,time()+24*3600);
	echo 1;
}else{
	
	echo 0;
   
}

?>