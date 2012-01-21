// TopShelf - Accordion ~ Copyright (c) 2011 - 2012 David Craig, https://github.com/flashbackzoo/TopShelf-Accordion
// Released under MIT license, http://www.opensource.org/licenses/mit-license.php

(function ($) {
	$.fn.tsAccordion = function (options) {
		// default settings
		var settings = $.extend({
			"transition":"simple"
			, "multipleOpen":false
		}, options);

		return this.each(function () {
			// create an accordion object
			var accordion = {
				container: this
				, settings: settings
				, panels: $(this).find("[data-ui='accordion-panel']")
				, handles: $(this).find("[data-ui='accordion-handle']")
			};

			////////////
			// MODELS //
			////////////

			var simple = function () {
				// default transitions
				var fx = {};
				
				(function () {
					fx.tranOut = function (o, callback) {
						(function (o, callback) {
							$(o.outgoing).animate({
								"height":$(o.outgoing).find("[data-ui='accordion-handle']").outerHeight()
							}, 300, function () {
								if (typeof callback === "function") {
									callback(o);
								}
							});
						})(o, callback);
					};

					fx.tranIn = function (o) {
						var i = 0
							, els = $(o.incoming).children()
							, l = els.length
							, panelHeight = 0;
						
						for (i = 0; i < l; i += 1) {
							panelHeight += $(els[i]).outerHeight(true);
						}
						$(o.incoming).animate({
							"height":panelHeight
						}, 300);
					};

					fx.init = function (o) {
						var i = 0
							, l = o.panels.length;
						
						for (i = 0; i < l; i += 1) {
							$(o.panels[i]).css({
								"height":$(o.panels[i]).find("[data-ui='accordion-handle']").outerHeight()
							});
						}
					};
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
					ctr.change = function (panel) {
						var o = {};
						
						o.incoming = panel[0];
						
						if ($(o.incoming).hasClass("current")) {
							o.outgoing = panel[0];
							$(o.incoming).removeClass("current");
							fx.tranOut(o);
						} else {
							if (accordion.settings.multipleOpen) {
								$(o.incoming).addClass("current");
								fx.tranIn(o);
							} else {
								o.outgoing = $(accordion.container).find("[data-ui='accordion-panel'].current")[0];
								$(accordion.panels).removeClass("current");
								$(o.incoming).addClass("current");
								fx.tranOut(o, fx.tranIn);
								if (!o.outgoing) {
									fx.tranIn(o);
								}
							}
						}
					};
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
					evt.handles = function () {
						var i = 0
							, l = accordion.handles.length;
						
						for (i = 0; i < l; i += 1) {
							$(accordion.handles[i]).bind("click", function(e) {
								e.preventDefault();
								ctr.change($(this).closest("[data-ui='accordion-panel']"));
							});
						}
					};
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
				fx.init(accordion);
				
				// bind events
				evt.handles();
			})();
		});
	};
})(jQuery);