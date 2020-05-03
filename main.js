
class El{

    constructor(selector){
        //console.log(selector);
        if(typeof selector === 'object'){
            this.selector = null;
            this.element = selector;
            this.height = null;
        }else if(typeof selector === 'string'){
            this.selector = selector;
            this.element = document.querySelector(selector);
            this.height = this.element.offsetHeight;
            this.element.style.height = this.height + 'px';
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

    slideUp(time = 3000){
    
        if(this.height === null) throw new Error('no height defined');

        this.element.style['overflow-y'] = 'hidden';
        this.height = this.element.offsetHeight;
        
        this.element.style.transitionProperty = 'height !important';
        this.element.style.height = '0px';
        this.element.style.transitionDuration = (time/1000) + 's';
    }

    slideDown(time = 3000){
        if(this.height === null) throw new Error('no height defined');

        this.element.style['overflow-y'] = 'hidden';
        
        this.element.style.transitionProperty = 'height !important';
        this.element.style.height = this.height + 'px';
        this.element.style.transitionDuration = (time/1000) + 's';
    }

    animate(properties, time = 3000){
        const keys = Object.keys(properties);
        const values = Object.values(properties);

        for(let i=0; i<keys.length; i++){

            this.element.style[keys[i]] = values[i];
            this.element.style.transitionProperty = keys[i] + ' !important';
            this.element.style.transitionDuration = (time/1000) + 's';
        }
    }


}

function get(url, options){
    return fetch(url,options);
}

async function getJSON(url, options){
    try{
        return await fetch(url, options).then(res => res.json());
    }catch(error){
        return error;
    }
}

async function getText(url, options){
    try{
        const response = fetch(url, options);
        const text = await response.then(data => data.text());
        //return text
    }catch(error){
        return error;
    }
}
