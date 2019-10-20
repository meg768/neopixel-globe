var Command = require('../scripts/command.js');

class QuoteCommand extends Command {

	constructor() {
		var defaults = {
		};

		super({module:module, name: 'quotes', description:'Test quotes', defaults:defaults});


	}

	defineArgs(args) {
	}


	run(argv) {
		var Quotes = require('../scripts/quotes.js');
		var quotes = new Quotes(argv);

		quotes.startMonitoring();

		quotes.on('quote', () => {
			this.log('Got quote.');
			this.log(JSON.stringify(quote), null, '    ');
		});
		
		quotes.on('marketClosed', () => {
			this.log(`Market closed for symbol ${quotes.symbol}...`);
			this.log(JSON.stringify(quote), null, '    ');
		});

	}
}

new QuoteCommand();


