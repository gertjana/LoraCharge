// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.dom.server');
goog.require('cljs.core');
goog.require('cljsjs.react.dom.server');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.template');
goog.require('reagent.interop');
if(typeof reagent.dom.server.server !== 'undefined')
{} else
{reagent.dom.server.server = (function (){var or__3640__auto__ = (function (){var and__3628__auto__ = typeof ReactDOMServer !== 'undefined';if(and__3628__auto__)
{return ReactDOMServer;
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var and__3628__auto__ = typeof require !== 'undefined';if(and__3628__auto__)
{return require("react-dom/server");
} else
{return and__3628__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.server.server))
{} else
{throw (new Error(("Assert failed: Could not find ReactDOMServer\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"server","server",-1155245649,null))))));
}
/**
* Turns a component into an HTML string.
*/
reagent.dom.server.render_to_string = (function render_to_string(component){var _STAR_non_reactive_STAR_5605 = reagent.impl.util._STAR_non_reactive_STAR_;try{reagent.impl.util._STAR_non_reactive_STAR_ = true;
return (reagent.dom.server.server["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_5605;
}});
/**
* Turns a component into an HTML string, without data-react-id attributes, etc.
*/
reagent.dom.server.render_to_static_markup = (function render_to_static_markup(component){var _STAR_non_reactive_STAR_5607 = reagent.impl.util._STAR_non_reactive_STAR_;try{reagent.impl.util._STAR_non_reactive_STAR_ = true;
return (reagent.dom.server.server["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_5607;
}});

//# sourceMappingURL=server.js.map