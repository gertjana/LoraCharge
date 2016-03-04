// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){var ks = cljs.core.js_keys.call(null,o);var len = ks.length;var m = cljs.core.PersistentArrayMap.EMPTY;var i = (0);while(true){
if((i < len))
{var k = (ks[i]);{
var G__5457 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__5458 = (i + (1));
m = G__5457;
i = G__5458;
continue;
}
} else
{return m;
}
break;
}
});
reagent.impl.component.extract_props = (function extract_props(v){var p = cljs.core.nth.call(null,v,(1),null);if(cljs.core.map_QMARK_.call(null,p))
{return p;
} else
{return null;
}
});
reagent.impl.component.extract_children = (function extract_children(v){var p = cljs.core.nth.call(null,v,(1),null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));if((cljs.core.count.call(null,v) > first_child))
{return cljs.core.subvec.call(null,v,first_child);
} else
{return null;
}
});
reagent.impl.component.props_argv = (function props_argv(c,p){var temp__4427__auto__ = (p["argv"]);if((temp__4427__auto__ == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else
{var a = temp__4427__auto__;return a;
}
});
reagent.impl.component.get_argv = (function get_argv(c){return reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
reagent.impl.component.get_props = (function get_props(c){var p = (c["props"]);var temp__4427__auto__ = (p["argv"]);if((temp__4427__auto__ == null))
{return reagent.impl.component.shallow_obj_to_map.call(null,p);
} else
{var v = temp__4427__auto__;return reagent.impl.component.extract_props.call(null,v);
}
});
reagent.impl.component.get_children = (function get_children(c){var p = (c["props"]);var temp__4427__auto__ = (p["argv"]);if((temp__4427__auto__ == null))
{return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(reagent.impl.util.react["Children"]["toArray"])((p["children"])));
} else
{var v = temp__4427__auto__;return reagent.impl.component.extract_children.call(null,v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent_class_QMARK_(c){return (cljs.core.fn_QMARK_.call(null,c)) && (cljs.core.some_QMARK_.call(null,(function (){var G__5462 = c;var G__5462__$1 = (((G__5462 == null))?null:G__5462.prototype);var G__5462__$2 = (((G__5462__$1 == null))?null:(G__5462__$1["reagentRender"]));return G__5462__$2;
})()));
});
reagent.impl.component.react_class_QMARK_ = (function react_class_QMARK_(c){return (cljs.core.fn_QMARK_.call(null,c)) && (cljs.core.some_QMARK_.call(null,(function (){var G__5466 = c;var G__5466__$1 = (((G__5466 == null))?null:G__5466.prototype);var G__5466__$2 = (((G__5466__$1 == null))?null:(G__5466__$1["render"]));return G__5466__$2;
})()));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){return cljs.core.some_QMARK_.call(null,(c["reagentRender"]));
});
reagent.impl.component.cached_react_class = (function cached_react_class(c){return (c["cljsReactClass"]);
});
reagent.impl.component.cache_react_class = (function cache_react_class(c,constructor){return (c["cljsReactClass"] = constructor);
});
reagent.impl.component.state_atom = (function state_atom(this$){var sa = (this$["cljsState"]);if(!((sa == null)))
{return sa;
} else
{return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
reagent.impl.component.as_element = (function as_element(x){return reagent.impl.template.as_element(x);
});
reagent.impl.component.wrap_render = (function wrap_render(c){while(true){
var f = (c["reagentRender"]);var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))))})());var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv.call(null,c);var n = cljs.core.count.call(null,v);var G__5468 = n;switch (G__5468) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());if(cljs.core.vector_QMARK_.call(null,res))
{return reagent.impl.component.as_element.call(null,res);
} else
{if(cljs.core.ifn_QMARK_.call(null,res))
{var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__5470__delegate = function (args){return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__5470 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5470__delegate.call(this,args);};
G__5470.cljs$lang$maxFixedArity = 0;
G__5470.cljs$lang$applyTo = (function (arglist__5471){
var args = cljs.core.seq(arglist__5471);
return G__5470__delegate(args);
});
G__5470.cljs$core$IFn$_invoke$arity$variadic = G__5470__delegate;
return G__5470;
})()
;})(c,f,_,res))
:res);(c["reagentRender"] = f__$1);
{
var G__5472 = c;
c = G__5472;
continue;
}
} else
{return res;

}
}
break;
}
});
reagent.impl.component.do_render = (function do_render(c){var _STAR_current_component_STAR_5474 = reagent.impl.component._STAR_current_component_STAR_;try{reagent.impl.component._STAR_current_component_STAR_ = c;
var ok = [false];try{var res = reagent.impl.component.wrap_render.call(null,c);(ok[(0)] = true);
return res;
}finally {if(cljs.core.truth_((ok[(0)])))
{} else
{if(cljs.core.truth_(reagent.debug.has_console))
{(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Error rendering component"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))))));
} else
{}
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_5474;
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function render(){var c = this;if(reagent.impl.util._STAR_non_reactive_STAR_)
{return reagent.impl.component.do_render.call(null,c);
} else
{var rat = (c["cljsRatom"]);reagent.impl.batching.mark_rendered.call(null,c);
if((rat == null))
{return reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){return reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else
{return rat._run();
}
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__5478 = (((key instanceof cljs.core.Keyword))?key.fqn:null);switch (G__5478) {
case "getDefaultProps":
throw (new Error(("Assert failed: getDefaultProps not supported\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));


break;
case "getInitialState":
return ((function (G__5478){
return (function getInitialState(){var c = this;return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__5478))

break;
case "componentWillReceiveProps":
return ((function (G__5478){
return (function componentWillReceiveProps(nextprops){var c = this;return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__5478))

break;
case "shouldComponentUpdate":
return ((function (G__5478){
return (function shouldComponentUpdate(nextprops,nextstate){var or__3640__auto__ = reagent.impl.util._STAR_always_update_STAR_;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var c = this;var old_argv = (c["props"]["argv"]);var new_argv = (nextprops["argv"]);var noargv = ((old_argv == null)) || ((new_argv == null));if((f == null))
{return (noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv));
} else
{if(noargv)
{return f.call(c,c,reagent.impl.component.get_argv.call(null,c),reagent.impl.component.props_argv.call(null,c,nextprops));
} else
{return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__5478))

break;
case "componentWillUpdate":
return ((function (G__5478){
return (function componentWillUpdate(nextprops){var c = this;return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__5478))

break;
case "componentDidUpdate":
return ((function (G__5478){
return (function componentDidUpdate(oldprops){var c = this;return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__5478))

break;
case "componentWillMount":
return ((function (G__5478){
return (function componentWillMount(){var c = this;(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));
if((f == null))
{return null;
} else
{return f.call(c,c);
}
});
;})(G__5478))

break;
case "componentDidMount":
return ((function (G__5478){
return (function componentDidMount(){var c = this;return f.call(c,c);
});
;})(G__5478))

break;
case "componentWillUnmount":
return ((function (G__5478){
return (function componentWillUnmount(){var c = this;var G__5480_5482 = (c["cljsRatom"]);var G__5480_5483__$1 = (((G__5480_5482 == null))?null:reagent.ratom.dispose_BANG_.call(null,G__5480_5482));reagent.impl.batching.mark_rendered.call(null,c);
if((f == null))
{return null;
} else
{return f.call(c,c);
}
});
;})(G__5478))

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);if(cljs.core.truth_((function (){var and__3628__auto__ = wrap;if(cljs.core.truth_(and__3628__auto__))
{return f;
} else
{return and__3628__auto__;
}
})()))
{if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Expected function in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
} else
{}
var or__3640__auto__ = wrap;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){return cljs.core.reduce_kv.call(null,(function (m,k,v){return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){var renders_5486 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));var render_fun_5487 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_5486));if((cljs.core.count.call(null,renders_5486) > (0)))
{} else
{throw (new Error(("Assert failed: Missing reagent-render\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"renders","renders",-925348398,null))))))));
}
if(((1) === cljs.core.count.call(null,renders_5486)))
{} else
{throw (new Error(("Assert failed: Too many render functions supplied\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"renders","renders",-925348398,null))))))));
}
if(cljs.core.ifn_QMARK_.call(null,render_fun_5487))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Render must be a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,render_fun_5487))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null)))))));
}

var render_fun = (function (){var or__3640__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();var legacy_render = (render_fun == null);var render_fun__$1 = (function (){var or__3640__auto__ = render_fun;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();var name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3640__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})()));var name__$1 = (function (){var G__5485 = name;switch (G__5485) {
case "":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent")));

break;
default:
return name;

}
})();var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
});
reagent.impl.component.map_to_js = (function map_to_js(m){return cljs.core.reduce_kv.call(null,(function (o,k,v){var G__5490 = o;(G__5490[cljs.core.name.call(null,k)] = v);
return G__5490;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function create_class(body){if(cljs.core.map_QMARK_.call(null,body))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null)))))));
}
return (reagent.impl.util.react["createClass"])(reagent.impl.component.cljsify.call(null,body));
});
reagent.impl.component.component_path = (function component_path(c){var elem = (function (){var G__5496 = (function (){var or__3640__auto__ = (function (){var G__5498 = c;var G__5498__$1 = (((G__5498 == null))?null:(G__5498["_reactInternalInstance"]));return G__5498__$1;
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return c;
}
})();var G__5496__$1 = (((G__5496 == null))?null:(G__5496["_currentElement"]));return G__5496__$1;
})();var name = (function (){var G__5499 = elem;var G__5499__$1 = (((G__5499 == null))?null:(G__5499["type"]));var G__5499__$2 = (((G__5499__$1 == null))?null:(G__5499__$1["displayName"]));return G__5499__$2;
})();var path = (function (){var G__5500 = elem;var G__5500__$1 = (((G__5500 == null))?null:(G__5500["_owner"]));var G__5500__$2 = (((G__5500__$1 == null))?null:component_path.call(null,G__5500__$1));var G__5500__$3 = (((G__5500__$2 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5500__$2)+" > "));return G__5500__$3;
})();var res = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
});
reagent.impl.component.comp_name = (function comp_name(){var c = reagent.impl.component._STAR_current_component_STAR_;var n = (function (){var or__3640__auto__ = reagent.impl.component.component_path.call(null,c);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var G__5502 = c;var G__5502__$1 = (((G__5502 == null))?null:G__5502.constructor);var G__5502__$2 = (((G__5502__$1 == null))?null:reagent.impl.util.fun_name.call(null,G__5502__$1));return G__5502__$2;
}
})();if(!(cljs.core.empty_QMARK_.call(null,n)))
{return (" (in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+")");
} else
{return "";
}

});
reagent.impl.component.fn_to_class = (function fn_to_class(f){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Expected a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(!(!((reagent.impl.component.react_class_QMARK_.call(null,f)) && (!(reagent.impl.component.reagent_class_QMARK_.call(null,f))))))
{if(cljs.core.truth_(reagent.debug.has_console))
{(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(("Warning: Using native React classes directly in Hiccup forms is not supported. Use create-element or adapt-react-class instead: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = reagent.impl.util.fun_name.call(null,f);if(cljs.core.empty_QMARK_.call(null,n))
{return f;
} else
{return n;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))));
} else
{}
} else
{}
if(reagent.impl.component.reagent_class_QMARK_.call(null,f))
{return reagent.impl.component.cache_react_class.call(null,f,f);
} else
{var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);var res = reagent.impl.component.create_class.call(null,withrender);return reagent.impl.component.cache_react_class.call(null,f,res);
}
});
reagent.impl.component.as_class = (function as_class(tag){var temp__4427__auto__ = reagent.impl.component.cached_react_class.call(null,tag);if((temp__4427__auto__ == null))
{return reagent.impl.component.fn_to_class.call(null,tag);
} else
{var cached_class = temp__4427__auto__;return cached_class;
}
});
reagent.impl.component.reactify_component = (function reactify_component(comp){if(reagent.impl.component.react_class_QMARK_.call(null,comp))
{return comp;
} else
{return reagent.impl.component.as_class.call(null,comp);
}
});

//# sourceMappingURL=component.js.map