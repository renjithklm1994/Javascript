var btnObj = document.getElementById("totalAmount");

      btnObj.onclick = function () {
        //first row amount calculating
        var quantity1Obj = document.getElementById("qty1").value;
        var rate1Obj = document.getElementById("rate1").value;
        var amount1Total = quantity1Obj * rate1Obj;
        document.getElementById("amount1").value = amount1Total;

        //second row amount calculating
        var quantity2Obj = document.getElementById("qty2").value;
        var rate2Obj = document.getElementById("rate2").value;
        var amount2Total = quantity2Obj * rate2Obj;
        document.getElementById("amount2").value = amount2Total;

        //third row amount calculating
        var quantity3Obj = document.getElementById("qty3").value;
        var rate3Obj = document.getElementById("rate3").value;
        var amount3Total = quantity3Obj * rate3Obj;
        document.getElementById("amount3").value = amount3Total;
    

        // fourth row amount calculating
        var quantity4Obj = document.getElementById("qty4").value;
        var rate4Obj = document.getElementById("rate4").value;
        var amount4Total = quantity4Obj * rate4Obj;
        document.getElementById("amount4").value = amount4Total;

        // fifth row amount calculating
        var quantity5Obj = document.getElementById("qty5").value;
        var rate5Obj = document.getElementById("rate5").value;
        var amount5Total = quantity5Obj * rate5Obj;
        document.getElementById("amount5").value = amount5Total;

        var TotalAmount = amount1Total + amount2Total + amount3Total + amount4Total + amount5Total;

        var discount = TotalAmount * 0.01;

        var reducedAmount = TotalAmount - discount;

        var stateTax = reducedAmount * 0.06;

        var centralTax = reducedAmount * 0.09;

        var payableAmount = reducedAmount + stateTax + centralTax;

        var invoiceNumber = Math.floor(Math.random() * 99999) + 1000;

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;


        document.getElementById("totalLabel").innerHTML = "Rs. " + TotalAmount;

        document.getElementById("discountAmount").innerHTML = "Rs. "+ discount;

        document.getElementById("taxableAmount").innerHTML = "Rs. "+ reducedAmount;

        document.getElementById("stateGst").innerHTML = "Rs. "+ stateTax;

        document.getElementById("centralGst").innerHTML = "Rs. "+ centralTax;

        document.getElementById("totalPay").innerHTML = "Rs. "+ payableAmount;

        document.getElementById("amountDisplay").innerHTML = "Rs. "+ payableAmount;

        document.getElementById("invoiceNo").innerHTML =  "Invoice No.- " +invoiceNumber;
        document.getElementById("invoiceDate").innerHTML = "Invoice Date - " + currentDate;

      };