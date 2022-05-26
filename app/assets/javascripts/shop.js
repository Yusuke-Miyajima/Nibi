window.onload=function(){
	const path="images/";
	const images=["illust1.jpg","illust2.jpg","illust3.jpg"];
	let index=0;
	const ele=document.getElementById("maingImage");
	ele.addEventListener("click",function(){
		this.src=path+images[++index % images.length];
	});
};
