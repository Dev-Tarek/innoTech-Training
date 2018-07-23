// Add the stopwatch methods to its prototype.
// This is not needed since we don't need more than one stopwatch.

function Stopwatch(){
    let duration = 0, started = false, a = 0, b = 0;
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; },
        set: function(val){ duration = val; }
    });
    Object.defineProperty(this, 'started', {
        get: function(){ return started; },
        set: function(val){ started = val; }
    });
    Object.defineProperty(this, 'a', {
        get: function(){ return a; },
        set: function(val){ a = val; }
    });
    Object.defineProperty(this, 'b', {
        get: function(){ return b; },
        set: function(val){ b = val; }
    });
}

Stopwatch.prototype.start = function(){
    if(this.started) throw new Error('Already running.');
    this.a = new Date().getTime();
    this.started = true;
}
Stopwatch.prototype.stop = function(){
    if(!this.started) throw new Error('Already stopped.');
    this.b = new Date().getTime();
    this.duration += (this.b - this.a) / 1000;
    this.started = false;
}
Stopwatch.prototype.reset = function(){
    this.a = 0;
    this.b = 0;
    this.started = 0;
    this.duration = 0;
}
