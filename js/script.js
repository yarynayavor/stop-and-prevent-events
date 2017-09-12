var onClick = function (e) {
	var $el = e.target;
	e.stopPropagation();
	alert('CLICK!');
	$el.style.backgroundColor = 'yellow';
}

box1=document.querySelector(".box1");
box2=document.querySelector(".box2");
box3=document.querySelector(".box3");
box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;