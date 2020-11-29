
document.body.addEventListener('input',updateCalc);
 
function updateCalc() {
	var bill = Number(document.getElementById("yourbill").value);

   
	var tipPercent = Number(document.getElementById("tipInput").value);
    var split = document.getElementById("splitInput").value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) /split;
    var tipEach = tipValue / split;

    document.getElementById("tipPercent").innerHTML = Math.floor(tipPercent) + " %";
    document.getElementById("tipValue").innerHTML = Math.floor(tipValue);
    document.getElementById("totalWithTip").innerHTML = Math.floor(bill + tipValue);
    document.getElementById("splitValue").innerHTML = Math.floor(split) + " person";
    document.getElementById("billEach").innerHTML = Math.floor(newBillEach);
    document.getElementById("tipEach").innerHTML = Math.floor(tipEach);
    document.getElementById("recptotal").innerHTML = Math.floor(bill + tipValue);
    document.getElementById("recpEach").innerHTML = Math.floor(newBillEach);
}
