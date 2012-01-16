// TopShelf - Accordion ~ Copyright (c) 2011 - 2012 David Craig, http://flashbackzoo.net
// Released under MIT license, http://www.opensource.org/licenses/mit-license.php

(function ($) {
	$.fn.tsSlideshow = function (options) {
		// default settings
		var settings = $.extend({
			"transition":"simple"
		}, options);

		return this.each(function () {
			// create an accordion object
			var accordion = {
				container: this
				, settings: settings
				, panels: getParts($(this).find("[data-ui='accordion-panel']"), this)
				, handles: getParts($(this).find("[data-ui='accordion-handle']"), this)
			};
			
			// returns elements in context of the passed accordion. used for nesting.
			function getParts (els, context) {
				var i = 0
					, l = els.length
					, parts = [];
				
				for (i = 0; i < l; i += 1 ) {
					if ($(els[i]).closest("[data-ui='accordion']")[0] === context) {
						parts[parts.length] = els[i];
					}
				}
				
				return parts;
			}

			////////////
			// MODELS //
			////////////

			var simple = function () {
				// default transitions
				var fx = {};
				
				(function () {
					fx.tranOut = function (o) {};

					fx.tranIn = function (o) {};

					fx.init = function () {};
				})();
				return fx;
			};

			//////////////
			// CONTROLS //
			//////////////

			var controls = function (fx) {
				// manage state, call models
				var ctr = {};
				
				(function () {
					ctr.open = function () {};

					ctr.close = function () {};
				})();
				return ctr;
			};

			////////////
			// EVENTS //
			////////////

			var events = function (ctr) {
				// events bound to controls
				var evt = {};
				
				(function () {
					evt.handles = function () {};
				})();
				return evt;
			};

			//////////////
			// LIFT OFF //
			//////////////

			(function () {
				// initialize model, control, and binding objects
				var fx = simple(accordion);
				var ctr = controls(fx);
				var evt = events(ctr);
				
				// set initial model state
				fx.init();
				
				// bind events
				evt.handles();
			})();
		});
	};
})(jQuery);