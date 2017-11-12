
var sprintf   = require('yow/sprintf');
var isString  = require('yow/is').isString;
var Neopixels = require('rpi-neopixels');

var Color     = require('color');
var Sleep     = require('sleep');

function debug() {
    console.log.apply(this, arguments);
}

module.exports = class extends Neopixels.Animation {


    constructor(strip, options) {
        super(strip, options);

        this.options = Object.assign({}, {interval:1000, delay:1000}, this.options);
        this.name = 'Pulse Animation';
        this.renderFrequency = this.options.interval;
        this.color = Color('red').rgbNumber();

        if (isString(this.options.color)) {
            try {
                this.color = Color(this.options.color).rgbNumber();
            }
            catch (error) {
                console.log('Invalid color value.');

            }
        }

        debug('New color animation', this.options);

    }



    render() {
        var pixels = this.pixels;
        var strip  = this.strip;

        pixels.fill(this.color);
        pixels.render({fadeIn:this.options.delay});

        if (this.options.length && this.options.length > 0) {
            Sleep.msleep(this.options.length);
        }

        pixels.fill(0);
        pixels.render({fadeIn:this.options.delay});

    }


}
