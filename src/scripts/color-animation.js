var isString = require('yow/is').isString;
var PixelAnimation = require('./pixel-animation.js');
var Color = require('color');

module.exports = class extends PixelAnimation {

    constructor(options) {
        var {transition = 'fade', name = 'Color Animation', duration = 100, color = 'red', ...options} = options;

        super({name:name, renderFrequency:1000, ...options});

        if (isString(color)) {
            try {
                color = Color(color).rgbNumber();
            }
            catch (error) {
                this.debug('Invalid color value.');

            }
        }

        this.color = color;
        this.transition = this.transition;
        this.duration = duration;
    }

    render() {
        this.pixels.fill(this.color);
        this.pixels.render({transition:this.transition, duration:this.duration});
    }


}
