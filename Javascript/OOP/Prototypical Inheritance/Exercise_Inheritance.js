function HtmlElement(){
    this.click = function(){
        console.log('click');
    }
}
HtmlElement.prototype.focus = function(){
    console.log('focus');
}

function HtmlSelectElement(values){
    if(Array.isArray(values)) this.items = [...values];
    else this.items = [];
    this.addItem = function(item){
        this.items.push(item);
    };
    this.removeItem = function(item){
        if(this.items.indexOf(item)<0)
            throw new Error('Item does not exist.');
        this.items.splice(this.items.indexOf(item),1);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

let h = new HtmlElement();
let s = new HtmlSelectElement([1,2]);