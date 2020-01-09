window.onload=function(){
	var span01=document.getElementsByTagName('span')[1]
		var span02=document.getElementsByTagName('span')[2]
		var inpname=document.getElementsByClassName('inputfs')[0]
		var inpkey=document.getElementsByClassName("inputss")[0]
		var forms=document.getElementsByClassName("forms")[0]
		var h5 = document.getElementsByTagName('h5')[0]
		var formps=document.getElementsByClassName("formps")[0]
		
		formps.onclick=function(){
			if(inpname.value==""||inpkey.value==""){
				
				h5.innerHTML="请先验证用户名和密码";
				h5.style.display= 'block';
			}else{
				var username=inpname.value;
				    var password =inpkey.value;
				    var xhr=new XMLHttpRequest;
				    xhr.open("post","./zhuce.php")
				    xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
				    xhr.send('unpname='+username+'&unpkey='+password);
				    xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if(xhr.status==200){
							if(xhr.response==1){
								h5.innerHTML="注册成功，点击返回登录页面";
							   h5.style.display= 'block';
							   h5.onclick=function(){
							   location.href="./login.html";
								}	
							}
						}
					}
				
				
			}
}
		}
		inpname.onchange=function(){
			var reg=/^([\u4e00-\u9fa5\w]){2,}$/;
			if(reg.test(inpname.value)){
				span01.innerHTML="用户名输入正确请继续完成操作";
				
			}else{
				span01.innerHTML="用户名输入错误请继续完成操作";
			}
		}
		inpkey.onchange=function(){
			
			if(inpname.value==""){
				span02.innerHTML="请先验证用户名";
			}else{
				var exp=/^([a-zA-Z\d]){3,}$/;
				if(exp.test(inpkey.value)){
					span02.innerHTML="用户名输入正确请继续完成操作";
					
				}else{
					span02.innerHTML="用户名输入错误请继续完成操作";
				}
			}
			
		}
		
}
