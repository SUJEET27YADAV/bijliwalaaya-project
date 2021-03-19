<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function deleteRow(row)
        {
            var i=row.parentNode.parentNode.rowIndex;
            if(i == 1){
                console.log="hi";
            }
            else {
                document.getElementById('marketTimerTable').deleteRow(i);
            }
        }
        function insRow()
            {
                if(itemNameField.value == "" || noticeField.value == "") { 
                    var div = document.getElementById('errorMessage');
                    div.innerHTML = "*Please fill in the fields*";
                    div.style.color = 'red';
                    document.body.appendChild(div);
                }
                else {
		            var div = document.getElementById('errorMessage');
		            div.innerHTML = "";
                    var x=document.getElementById('marketTimerTable');
                    var new_row = x.rows[1].cloneNode(true);
                    var len = x.rows.length;
                    
                    var inp1 = new_row.cells[1].getElementsByTagName('div')[0];
                    inp1.id += len;
                    inp1.innerHTML = itemNameField.value;
                    itemNameField.value = "";
                    var inp2 = new_row.cells[2].getElementsByTagName('div')[0];
                    inp2.id += len;
                    inp2.innerHTML = noticeField.value;
                    noticeField.stepUp(10);
                    var inp3 = new_row.cells[3].getElementsByTagName('div')[0];
                    inp3.id += len;
                    inp3.innerHTML = noticeField.value;
                    noticeField.stepUp(5);
                    var inp4 = new_row.cells[4].getElementsByTagName('div')[0];
                    inp4.id += len;
                    inp4.innerHTML = noticeField.value;
                    var inp5 = new_row.cells[5].getElementsByTagName('div')[0];
                    inp5.id += len;
                    noticeField.stepDown(15);
                    var noticeTime = noticeField.value.split(":");
                    var originalTime = noticeField.value.split(":");
                    const interval = setInterval(function(){
                    var currentDate = (new Date());
                    noticeTime[1] = originalTime[1] - currentDate.getMinutes() + 10;
                    noticeTime[1] = noticeTime[1] + (originalTime[0] * 60) - (currentDate.getHours() * 60);
                    if( noticeTime[1] < -5 ) { 
                    inp5.innerHTML = "EXPIRED";  
                    inp5.style.color = "red";
                }
                else if ( noticeTime[1] < 1 && noticeTime[1] > -6) { 
                    inp5.innerHTML = "BID PHASE"; 
                    inp5.style.color = "green";
                }
                else {
                    inp5.innerHTML = noticeTime[1] + "M";
                    inp5.style.color = "black";
                }
                if (currentDate.getSeconds() === 1 && document.getElementById('alarmSet').checked && noticeTime[1].toString() === document.getElementById('alarmTime').value) {
                        alert(inp1.innerHTML + " is about to enter bid phase!");
                } 
                if(noticeTime[1] === 0) {
                    clearInterval(interval);
                }
            },1000)
            noticeField.value = "";
            x.appendChild( new_row );
        }
    }
    setTimeout("location.reload()", 86400000);
            /*  var noticeTime = noticeField.value.split(":");
                const interval = setInterval(function(){
                var currentDate = (new Date());
                var diffInHours = currentDate.getHours() - noticeTime[0];
                var diffInMinutes = currentDate.getMinutes() - noticeTime[1];
                inp5.innerHTML = diffInHours + ":" + diffInMinutes;
                if(diffInHours === 0 && diffInMinutes === 0) {
                clearInterval(interval);
                }
                },1000)
            */
    </script>
</head>
<body>    
<table>
<tr><td>Item Name</td>
<td><input type="text" id="itemNameField" placeholder=""/></td><tr></tr>
<tr><td>Time of Notice</td>
<td><input type="time" id="noticeField" /></td></tr>
<tr><td>
<input type="button" id="addButton" value="Add Timer" onclick="insRow()"/></td><td><div id="errorMessage"></div></td></tr></table><br>
Please alert me <input type="number" id="alarmTime" min="1" max="10"> minutes before bid starts <input type="checkbox" id="alarmSet">
    <hr> 

<div id ="marketTimerTableDiv">  <table id="marketTimerTable" style="width:100%;border-bottom:1px solid black;">
        <tr>
            <th></th>
            <th>Item Name</th>
            <th>Time of Notice</th>
            <th>Bid Start</th>
             <th>Bid End</th>
             <th>Countdown</th>
            <th></th>
        </tr>
        <tr>
            <td></td>
            <td><div id="itembox"/> Example Item</td>
            <td><div id="noticebox" />12:52</td>
            <td><div id="bidstartbox" />13:02</td>
            <td><div id="bidendbox" />13:07</td>
            <td><div id="countdownbox" /> ---</td>
            <td><input type="button" id="delbutton" value="X" onclick="deleteRow(this)"/></td>
        </tr>
    </table>

</body>
</html>