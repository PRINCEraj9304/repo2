
var eth = document.getElementById("Etherium");
var doge = document.getElementById("Dogecoin");
var teth = document.getElementById("Tether");

var settings = {
    "async": true,
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cdogecoin%2Ctether&vs_currencies=usd",
    "method" :"GET",
    "header": {}
}

$.ajax(settings).done(function(response){

      eth.innerHTML = response.Etherium.usd;
      doge.innerHTML = response.Dogecoin.usd;
      teth.innerHTML = response.Tether.usd;

});

