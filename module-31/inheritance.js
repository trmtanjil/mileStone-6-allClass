class vahical  {
    constructor  (name, price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('ami move korte pari');
    }

}

class bus extends vahical{
    constructor (name, price, set){
        super(name, price);
        this.set=set;
    }
    visit(){
        console.log(' narsindi to dhakato ');
    }
}
const greenline = new bus('greenLine','1200', '34');
console.log(greenline);


class trac extends vahical{
    constructor (name, price, load){
        super(name,price);
        this.load= load;
    }
    company(){
        console.log('thermaxGroup of company');
    }
}