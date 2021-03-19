window.onload = function() {
    countDown('clock', 0, 0);
    clearInterval(interval);
};
function countDown(timer, min, sec) {
    var p = 1,period = document.getElementById("period"),timer = document.getElementById("timer");
    dn = new Date(),date = new Date(dn.getFullYear(),dn.getMonth(),dn.getDate(),00,00,00);
    var tn = dn.getTime(),t = date.getTime();
    //var timedif = 2419200000; //+86400000(=24hours),tn-t when t=tn 2505600000
    var ms = tn-t,s = Math.floor(ms/1000),pn = Math.floor(s/180);
    p +=pn;
    // FOR PERIOD DISPLAY :
    var D=dn.getDate().toString(),M=(dn.getMonth()+1).toString(),Y=dn.getFullYear().toString();
    if(D<10) { D= "0"+ D};
    if(M<10) { M= "0"+ M};
    if (p < 10) {p = Y+M+D + "00" + p;}
    else if (p < 100) {p = Y+M+D + "0" + p;}
    else {p = Y+M+D + p;}
    period.innerHTML =p; //+"<br>t n :"+tn+"<br>tfd :"+tfd;
    var time = s%180;time = 180-time;
    var interval = setInterval(function() { 
        //make timer red on 30 seconds and below, disable game buttons and betpopup,  
        if (time > 30) {
            function enable() {
                document.getElementsByClassName("timer")[1].style.color = 'grey';
                var btns = document.getElementsByClassName("gamebtn");
                var i;for(i=0; i<btns.length; i++) {btns[i].disabled = false;}
                document.getElementsByClassName("violet")[0].style.background = "purple";
                document.getElementsByClassName("greenviolet")[0].style.backgroundImage = 'linear-gradient(to top,#28c04c,purple)';
                document.getElementsByClassName("redviolet")[0].style.backgroundImage = 'linear-gradient(to bottom,red,purple)';
                var gbtns = document.getElementsByClassName("green");
                var rbtns = document.getElementsByClassName("red");
                for(i=0; i<=4; i++){gbtns[i].style.background = "#28c04c";rbtns[i].style.background = "red";}
            }
            enable();
        }
        else {
            function disable() {
                document.getElementById("betpopup").style.display = "none";
                document.getElementsByClassName("timer")[1].style.color = 'red';
                var btns = document.getElementsByClassName("gamebtn");
                for (var i=0; i< btns.length; i++) {btns[i].disabled = true;btns[i].style.background = "grey";}
            }
            disable();
        }
        if (time < 0) {
            //display preiod end msg
            document.getElementById("periodendpopup").style.display = "block";
            document.getElementById("periodendmsgfoot").onclick = function() {
                document.getElementById("periodendpopup").style.display = "none";
            }
            //if (typeof callback === 'function') {callback.call()}
            //display result on period end
            //result(p, 
            var price = 200350, number = 5;
            document.getElementById("rperiod").innerHTML = p-1;
            document.getElementById("rprice").innerHTML = price;
            document.getElementById("rnumber").innerHTML = number;
            var result = document.getElementById("feedrow");
            var f = document.createElement("div");
            f.class = "feedrow";
            f.id = "feedrow1";
            result.innerHTML = f.innerHTML;
            var a = document.getElementById("prtablecontent");
            a.insertBefore(f, a.children[1]);
            result.style.display = "inline-block";
            setTimeout(countDown('clock', 0 , 0), 1000);
            clearInterval(interval);
            return;
        }
        // make period end popup diasapper automatically after few seconds
        else if(time <= 174) {document.getElementById("periodendpopup").style.display = "none";}
        //for timer display
        sec = time % 60,min = Math.floor( time / 60 );
        if (min < 10) {min = "0 " + min}
        if (sec < 10) {sec = "0 " + sec}
        else {sec = sec.toString().replace(/\B(?=(\d{1})+(?!\d))/g, " ");}
        var text = min + ' : ' + sec;
        timer.innerHTML = text;
        time--;
    }, 1000);
}
//countDown('clock', 3, 0);
//clearInterval(interval);

//-------------------------------------------
/*function result(period, price, number) {
    document.getElementsById("resultp").innerHTML = period;
    document.getElementsById("resultprice").innerHTML = price;
    document.getElementsById("resultnum").innerHTML = number;

    document.createElement("div").class = "feedrow";
    document.getElementById("feedrow").style.display = "inline-block";
    var i = document.getElementById('prtablecontent');
    var f = document.createElement('div').class = "feedrow";
    f.id = ("feedrow"+period);
    var p = document.createElement('div').class = "feedcontent";
    p.id = ("feedcontent"+period);
    var pr = document.createElement('div').class = "feedcontent";
    pr.id = ("feedcontent"+price);
    var n = document.createElement('div').class = "feedcontent";
    n.id = ("feedcontent"+number);
    var c = document.createElement('div').class = "feedcontent";
    c.id = ("feedcontent"+color);
    var ca = document.createElement('div').class = "boxa";
    ca.id = ("feedcontent"+color);
    var cb = document.createElement('div').class = "boxb";
    cb.id = ("feedcontent"+color);
    ca.innerHTML = "colora";
    cb.innerHTML = "colorb";
    ca.innerHTML = "";
    var p = document.getElementById('new');
    p.appendChild(d);
}*/
function change(color) {
	var pop = document.getElementById("betpopup");
    var confirm = document.getElementById("selectmoneyconfirm");
	var titlediv = document.getElementById("colorhead");
    var tba = document.getElementById("totalbetamount");
    titlediv.style.background = color;
    confirm.style.background = color;
    tba.style.color = color;
}
function join() {
	var g = document.getElementById("green");
    var v = document.getElementById("violet");
    var r = document.getElementById("red");
    var pop = document.getElementById("betpopup");
    var title = document.getElementById("colorhead");
    var cancel = document.getElementById("selectmoneycancel");
    var confirm = document.getElementById("selectmoneyconfirm");
    var st = document.head.appendChild(document.createElement("style"));
    g.onclick = function() {
    	pop.style.display = "block";
        change('rgb(15,148,44)');
        st.innerHTML = "#colorhead:after{content:'';display:block;position:absolute;width:0;height:0;right:-8px;bottom:0;border:4px solid;border-color:rgb(15,148,44) transparent transparent rgb(15,148,44)}#colorhead:before{content: '';display: block;position: absolute;width: 0;height: 0;left: -8px;bottom: 0;border: 4px solid;border-color:rgb(15,148,44) rgb(15,148,44) transparent transparent}";
        title.innerHTML = "Join Green";
    };
        v.onclick = function() {
        pop.style.display = "block";
    	change('purple');
        st.innerHTML = "#colorhead:after{content:'';display:block;position:absolute;width:0;height:0;right:-8px;bottom:0;border:4px solid;border-color:purple transparent transparent purple}#colorhead:before{content: '';display: block;position: absolute;width: 0;height: 0;left: -8px;bottom: 0;border: 4px solid;border-color: purple purple transparent transparent}";
        title.innerHTML = "Join Violet";
    };
    r.onclick = function() {
    	pop.style.display = "block";
    	change('red');
        st.innerHTML = "#colorhead:after{content:'';display:block;position:absolute;width:0;height:0;right:-8px;bottom:0;border:4px solid;border-color:red transparent transparent red}#colorhead:before{content: '';display: block;position: absolute;width: 0;height: 0;left: -8px;bottom: 0;border: 4px solid;border-color:red red transparent transparent}";
        title.innerHTML = "Join Red";
    }
    cancel.onclick = function() {
        betpopup.style.display = "none";
    }
    confirm.onclick = function() {
        betpopup.style.display = "none";
    }
}
function bidamountamountcalculate() {
    var t0 = document.getElementById("10");
    var t1 = document.getElementById("50"); 
    var t2 = document.getElementById("100"); 
    var t3 = document.getElementById("500"); 
    var t4 = document.getElementById("1000"); 
    var t5 = document.getElementById("10000");
    var p = document.getElementById("plus");
    var m = document.getElementById("minus");
    var mul = document.getElementById("multipletext");
    var tba = document.getElementById("totalbetamount");
    var betamount = 0, token=10, multiple = 1;
    betamount = token*multiple;
    mul.value = multiple;
    tba.innerHTML = "Total bet amount is : " + betamount;
    p.onclick = function() {
    	multiple+=1;
    	betamount=token*multiple;
    	mul.value=multiple;
    	tba.innerHTML = "Total bet amount is : " + betamount
    };
    m.onclick = function() {
      	if(multiple == 1) {}
        else {
    		multiple-=1;
        }
     	betamount = token*multiple;
        mul.value=multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
    };
    t0.onclick = function() {
    	token=10;
        betamount=token*multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
        t0.style.opacity = 1;
        t1.style.opacity = 0.4;
        t2.style.opacity = 0.4;
        t3.style.opacity = 0.4;
        t4.style.opacity = 0.4;
        t5.style.opacity = 0.4;
    };
    t1.onclick = function() {
    	token=50;
        betamount=token*multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
        t1.style.opacity = 1;
        t0.style.opacity = 0.4;
        t2.style.opacity = 0.4;
        t3.style.opacity = 0.4;
        t4.style.opacity = 0.4;
        t5.style.opacity = 0.4;
    };
    t2.onclick = function() {
    	token=100;
        betamount=token*multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
        t2.style.opacity = 1;
        t0.style.opacity = 0.4;
        t1.style.opacity = 0.4;
        t3.style.opacity = 0.4;
        t4.style.opacity = 0.4;
        t5.style.opacity = 0.4;
    };
    t3.onclick = function() {
    	token=500;
        betamount=token*multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
        t3.style.opacity = 1;
        t0.style.opacity = 0.4;
        t1.style.opacity = 0.4;
        t2.style.opacity = 0.4;
        t4.style.opacity = 0.4;
        t5.style.opacity = 0.4;
    };
    t4.onclick = function() {
    	token=1000;
        betamount=token*multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
        t4.style.opacity = 1;
        t0.style.opacity = 0.4;
        t1.style.opacity = 0.4;
        t2.style.opacity = 0.4;
        t3.style.opacity = 0.4;
        t5.style.opacity = 0.4;
    };
    t5.onclick = function() {
    	token=10000;
        betamount=token*multiple;
        tba.innerHTML = "Total bet amount is : " + betamount
        t5.style.opacity = 1;
        t0.style.opacity = 0.4;
        t1.style.opacity = 0.4;
        t2.style.opacity = 0.4;
        t3.style.opacity = 0.4;
        t4.style.opacity = 0.4;
    }
}