  var img = document.getElementsByTagName('img');
	var scr=document.getElementById("score");
	var hi=document.getElementById("hint");
	var me=document.getElementById("message");
	var choice =document.getElementsByName("choice")
	win = new Audio('image/win.mp3');
	click = new Audio('image/click.mp3');
	correct = new Audio('image/correct.mp3');
	lose = new Audio('image/lose.mp3');
	var a=[];	var num=0;  var arr=[];	var a1=0;	var a2=1;  var arr1=[]; var ch=0; var sc=0;
    do
    {
	    var r = Math.trunc(Math.random() * 48);
	    var arrr=0;
	    while(arrr<=a2)
	    {
	      if(arr1[arrr]==r)
	      {
	        r = Math.trunc(Math.random() * 48) ;
	        arrr =-1;
	      }
	      arrr++;
	    }
	    arr1[a2-1]=r;
      a2++;
		}while(a2<=48);
	var ran=10;
		for (var i =0; i <ran; i++)	img[arr1[i]].setAttribute("style","opacity:1 ; ");
	var h=3;
	function hint()
	{
			if(ran<=47 && h>0){	
				img[arr1[ran]].setAttribute("style","opacity:1 ; ");
				ran++;	h--;
				hi.innerHTML="&nbsp&nbsp"+h;
			}
	}
  var	d=0;
	startTimer(120);
	function startTimer(seconds)
	{
	  const timer = document.getElementById('timer');
		let tim=  setInterval(() => 
		{
	    timer.innerText = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
	    seconds--;
	    if(d==1)	clearInterval(tim);
			if (seconds <= -1) 
			{ 
				me.innerText="you Lose";
				me.classList.add("text-danger")
				lose.play();
				seconds=-1;
				d=1;
				clearInterval(tim);
				alertme();
			}	
	  }, 1000);
	}
	function chosse(x,y) {
    if(me.innerText=="chosse correct!") {me.innerText=" ";}
		for(i=0;i<arr.length;i++)   	if(arr[i]==y) var c=0;
    var c1=0;
    for(i=0;i<ran;i++)  	if(arr1[i]==y)	   c1=1;
		if(ch==5 || (arr.length==arr1.length)||d==1)	return 0;
		if (c==0 || c1!=1 ) {
			me.innerText="chosse correct!"
			return 0;
		}
		if(ran<=44)  img[arr1[ran+1]].setAttribute("style","opacity:0.8 ; ");
		if(ran<=47)   img[arr1[ran]].setAttribute("style","opacity:1 ; ");
		click.play();
		ran++;
		arr[a1]=y;
		a1++;
		img[y].setAttribute("src","image/h.png ");
		choice[ch].setAttribute("src","image/"+x+".jpg")
		a[ch]=x;
		ch++;
		for(i=2;i<=a.length;i++)
		{
			if(a[i]==a[i-1] && a[i]== a[i-2])
			{
				choice[i].setAttribute("src"," ")
				choice[i-1].setAttribute("src"," ")
				choice[i-2].setAttribute("src"," ")
				ch=i-2;
				if(a[i]!=0 || a[i-1]!=0 || a[i-2]!=0)
				{	sc+=5;
					correct.play()
					scr.innerText="Score : "+sc;
				}
				a[i]=0;
				a[i-1]=0;
				a[i-2]=0;
				if(i==2 || i==3) break;
			}
		}
		if(ch==5)
		{ lose.play()
			d=1;
			me.innerText="You Lose"
			me.classList.add("text-danger")
		  alertme();
		}
		else if((arr.length)==arr1.length)
		{	win.play();
			d=1;
			me.innerText="You Win"
			me.classList.add("text-warning")
		 	alertme();
		}
}
function alertme(){
	 setTimeout(()=>{
			var conf=confirm("your Score is ="+sc+"\nyour timing is left ="+timer.innerText+"\nyou play agian")
			if(conf==true)	location.reload()
			else		alert("bye bye...\n Thanks for Playing game")
		},3000);	
}
