class myCompany {
    constructor(name,price,brand, worner){
        this.name =name ;
        this.price = price;
        this.brand= brand;
        this.worner= worner;

    }
    fung(){
        console.log(`ami ${this.brand} ar dekhasona kori ai companyr malik ${this.worner}`);
    }
}
const iphon = new myCompany("iphon", "12344",'apple',"s jobs") 
console.log(iphon);
iphon.fung()
const samesung = new myCompany("samesung", "12344",'samsung',"janina") 
console.log(samesung);
samesung.fung();