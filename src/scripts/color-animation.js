var Color = require('color');
var Animation = require('./animation.js');

module.exports = class extends Animation {

    constructor(options) {
        var {fade = undefined, color = 'red', ...options} = options;

        super(options);

        this.color = Color(color).rgbNumber();
        this.fade = fade;
    }

    render() {
        this.pixels.fill(this.color);

        if (this.fade)
            this.pixels.render({transition:'fade', duration:fade});
        else
            this.pixels.render();

    }


}
