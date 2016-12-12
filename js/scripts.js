// plik scripts.js

function Telefon (marka, cena, kolor, internet) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.internet = internet;
};

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + " oraz internet w abonamencie " + this.internet + ".");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "2G");
var iPhone5 = new Telefon("Apple", 1287, "czarny", "3G");
var Samsung = new Telefon ("Samsung", 230, "niebieski", "1G"); 

iPhone5.printInfo ();
iPhone6S.printInfo();
Samsung.printInfo();


