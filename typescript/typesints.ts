interface Book{
    title:string,
    author:string,
    isbn:string
    displayInfo():void;
}

type Product =
{
    id:number,
    name:String,
    description?:string;
    displayInfo():void;
}
interface Book{
    bookPrice:number;
}
//Using andpercent & here instead of extends
type NewProduct = Product &{
    price:number;
    stock:number;
    value:any;
}
//When using interface use the extends keyword
interface newBook extends Book{
    publisher:string;
}

var myBook: Book = {
    title : 'a',
    author :'b',
    isbn : 'c',
    displayInfo(){
        console.log('book1')
    },
    bookPrice:23
    

}

var myProduct: Product = {

    id:123,
    name:"p1",
    description:"something",
    displayInfo(){
        console.log('product1')
    }
}