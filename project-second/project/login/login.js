window.onload=function(){
	
	var inpname=document.getElementsByClassName('inputf')[0]
	var inpkey=document.getElementsByClassName("inputs")[0]
	
	var img=document.getElementsByClassName("img")[0]
	var form=document.getElementsByClassName("form")[0]
	var formp=document.getElementsByClassName("formp")[0]
	var imgp=document.getElementsByClassName("imgp")[0]
	var h5 = document.getElementsByTagName('h5')[0]
	var free=document.getElementsByClassName("free")[0]
	var login01=document.getElementsByClassName("login01")[0]
	var login02=document.getElementsByClassName("login02")[0]
	
	login01.onclick=function(){
		img.style.display="block";
		form.style.display="none";
	}
	login02.onclick=function(){
		img.style.display="none";
		form.style.display="block";
	}
	
	
	formp.onclick=function(){
		var uname=inpname.value;
		var pw =inpkey.value;
		var xhr=new XMLHttpRequest;
		xhr.open("post","./login.php")
		xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
		xhr.send('unpname='+uname+'&unpkey='+pw);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					if(xhr.response==1){
						h5.innerHTML="登陆成功，还有2秒跳转主页"
						h5.style.display= 'block';
						setTimeout(function(){
							location.href="../suning.html";
						},2000)
						
						
					}
					else{
						h5.innerHTML="该用户没有注册，请完成注册再登录"
						h5.style.display= 'block';
					}
				}
				
			}
			
		}
	}
	free.onclick=function(){
		location.href="./zhuce.html"
	}
	
	
	
	
	
	
	
}