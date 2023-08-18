let price = 12500,
    onepricepc = 500,
    onepricesv = 1000,
    pc__count = 25,
    ser_count = 0,
    pricePC = 12500,
    priceSER = 0,
    percentSER = 0.95,
    percentPC = 0.98;

document.getElementById('countpc').oninput = function () {
    document.getElementById('pc_outcount').innerHTML = this.value;
    pc_count = this.value;
    if(this.value > 35){
        pricePC = (onepricepc * pc_count)*percentPC;
    }
    else{
        pricePC = (onepricepc * pc_count);
    }
    resultPricePC();
};
document.getElementById('countser').oninput = function () {
    document.getElementById('ser_outcount').innerHTML = this.value;
    ser_count = this.value;
    if(ser_count > 5){priceSER = (onepricesv*ser_count)*percentSER;}
    else{ priceSER = (onepricesv*ser_count);}
    resultPricePC();
};



function resultPricePC() {
    
        price = pricePC+priceSER;
        document.getElementById('price_outcount').innerHTML = price;
 }