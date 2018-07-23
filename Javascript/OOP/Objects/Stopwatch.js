// Exercise

function Stopwatch(){
    let duration = 0;
    let started = false;
    let a = 0;
    let b = 0;
    this.start = function(){
        if(started) throw new Error('Already running.');
        a = new Date().getTime();
        started = true;
    }
    this.stop = function(){
        if(!started) throw new Error('Already stopped.');
        b = new Date().getTime();
        duration += (b - a)/1000;
        started = false;
    }
    this.reset = function(){
        a = 0;
        b = 0;
        started = 0;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    })
}

let s = new Stopwatch();