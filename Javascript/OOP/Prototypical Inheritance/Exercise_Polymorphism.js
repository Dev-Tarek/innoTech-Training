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
    this.render = function(){
        let options = '<select>\n';
        for(let item of this.items)
            options += '\t<option>'+item+'</option>\n'
        options += '</select>';
        return options;
    }

    this.render2 = function(){
        return `
<select>${this.items.map(item =>`
    <option>${item}</option>`).join('')}
</select>`;
    }
}

function HtmlImageElement(source){
    this.src = source;
    this.render = function(){
        return '<img src="'+this.src+'" />'
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlSelectElement;

let elements = [
    new HtmlImageElement('http://test.com/imgs/one.jpg'), 
    new HtmlSelectElement([1,2,3])
];

//console.log(elements[1].render2());

for(element of elements)
    console.log(element.render());
