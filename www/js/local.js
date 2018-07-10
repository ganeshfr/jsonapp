function convertCurrency(){
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var xmlhttp = new XMLHttpRequest();
        var url = "http://data.fixer.io/api/latest?access_key=0d94045b9d6588e9d890bdd73ce10b17&symbols="+from+","+to;
        xmlhttp.open("GET",url,true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        console.log(xmlhttp);
        var result = xmlhttp.responseText;
        console.log(result);
        var obResult = JSON.parse(result);
        console.log(obResult);
        var oneUnit = obResult.rates[to]/obResult.rates[from];
        var amt = document.getElementById("fromAmount").value;
        document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
}
}
}
