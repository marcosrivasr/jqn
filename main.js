
class El{

    constructor(selector){
        if(typeof selector === 'object'){
            this.selector = null;
            this.element = selector;
        }else if(typeof selector === 'string'){
            this.selector = selector;
            this.element = document.querySelector(selector);
        }else if(!selector){
            throw new Error('no selector specified at the constructor');
        }
    }
    
    all(){
        if(this.selector === null){
            throw new Error('Error trying to get a nodeList from a single element');
        }
        this.element = document.querySelectorAll(this.selector);
        return this.element;
    }
    
    on(event, handler){
        this.element.addEventListener(event, handler);
        return this;
    }

    hide(){
        this.element.style.display = 'none';
        return this;
    }

    show(display = 'block'){
        this.element.style.display = display;
        return this;
    }

    fadeIn(time = 3000){
        this.element.style.display = '';
        this.element.style.display = 'block';
        this.element.style.opacity = '1';
        this.element.style.transitionProperty = 'opacity !important';
        this.element.style.transitionDuration = (time/1000) + 's';
        return this;
    }
    fadeOut(time = 3000){
        this.element.style.display = '';
        this.element.style.display = 'block';
        this.element.style.opacity = '0';
        this.element.style.transitionProperty = 'opacity !important';
        this.element.style.transitionDuration = (time/1000) + 's';
        return this;
    }

    addClass(className = ''){
        if(className === '') throw new Error('no class name specified');

        this.element.classList.add(className);
        return this;
    }

    removeClass(className = ''){
        if(className === '') throw new Error('no class name specified');

        this.element.classList.remove(className);
        return this;
    }

    toggle(className = ''){
        if(className === '') throw new Error('no class name specified');

        this.element.classList.toggle(className);
        return this;
    }

    animate(properties){

    }


}

function get(url, options){
    return fetch(url,options);
}

async function getJSON(url, options){
    try{
        return await fetch(url, options)
                            .then(res => res.json());
    }catch(error){
        return error;
    }
}

async function getText(url, options){
    try{
        return await fetch(url, options).then(res => res.text());
    }catch(error){
        return error;
    }
}
