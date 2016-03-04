// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.dom.server');
goog.require('reagent.dom');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.dom.server');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
goog.require('reagent.dom');
reagent.core.is_client = reagent.impl.util.is_client;
reagent.core.react = reagent.impl.util.react;
/**
* Create a native React element, by calling React.createElement directly.
* 
* That means the second argument must be a javascript object (or nil), and
* that any Reagent hiccup forms must be processed with as-element. For example
* like this:
* 
* (r/create-element "div" #js{:className "foo"}
* "Hi " (r/as-element [:strong "world!"])
* 
* which is equivalent to
* 
* [:div.foo "Hi" [:strong "world!"]]
* @param {...*} var_args
*/
reagent.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (type){return create_element.call(null,type,null);
});
var create_element__2 = (function (type,props){if(!(cljs.core.map_QMARK_.call(null,props)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))))));
}
return (reagent.core.react["createElement"])(type,props);
});
var create_element__3 = (function (type,props,child){if(!(cljs.core.map_QMARK_.call(null,props)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))))));
}
return (reagent.core.react["createElement"])(type,props,child);
});
var create_element__4 = (function() { 
var G__5405__delegate = function (type,props,child,children){if(!(cljs.core.map_QMARK_.call(null,props)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))))));
}
return cljs.core.apply.call(null,(reagent.core.react["createElement"]),type,props,child,children);
};
var G__5405 = function (type,props,child,var_args){
var children = null;if (arguments.length > 3) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__5405__delegate.call(this,type,props,child,children);};
G__5405.cljs$lang$maxFixedArity = 3;
G__5405.cljs$lang$applyTo = (function (arglist__5406){
var type = cljs.core.first(arglist__5406);
arglist__5406 = cljs.core.next(arglist__5406);
var props = cljs.core.first(arglist__5406);
arglist__5406 = cljs.core.next(arglist__5406);
var child = cljs.core.first(arglist__5406);
var children = cljs.core.rest(arglist__5406);
return G__5405__delegate(type,props,child,children);
});
G__5405.cljs$core$IFn$_invoke$arity$variadic = G__5405__delegate;
return G__5405;
})()
;
create_element = function(type,props,child,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return create_element__1.call(this,type);
case 2:
return create_element__2.call(this,type,props);
case 3:
return create_element__3.call(this,type,props,child);
default:
return create_element__4.cljs$core$IFn$_invoke$arity$variadic(type,props,child, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$lang$maxFixedArity = 3;
create_element.cljs$lang$applyTo = create_element__4.cljs$lang$applyTo;
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
create_element.cljs$core$IFn$_invoke$arity$3 = create_element__3;
create_element.cljs$core$IFn$_invoke$arity$variadic = create_element__4.cljs$core$IFn$_invoke$arity$variadic;
return create_element;
})()
;
/**
* Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
*/
reagent.core.as_element = (function as_element(form){return reagent.impl.template.as_element.call(null,form);
});
/**
* Returns an adapter for a native React class, that may be used
* just like a Reagent component function or class in Hiccup forms.
*/
reagent.core.adapt_react_class = (function adapt_react_class(c){if(cljs.core.truth_(c))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null))))));
}
return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
* Returns an adapter for a Reagent component, that may be used from
* React, for example in JSX. A single argument, props, is passed to
* the component, converted to a map.
*/
reagent.core.reactify_component = (function reactify_component(c){if(cljs.core.truth_(c))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null))))));
}
return reagent.impl.component.reactify_component.call(null,c);
});
/**
* Render a Reagent component into the DOM. The first argument may be
* either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.core.render = (function() {
var render = null;
var render__2 = (function (comp,container){return reagent.dom.render.call(null,comp,container);
});
var render__3 = (function (comp,container,callback){return reagent.dom.render.call(null,comp,container,callback);
});
render = function(comp,container,callback){
switch(arguments.length){
case 2:
return render__2.call(this,comp,container);
case 3:
return render__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$2 = render__2;
render.cljs$core$IFn$_invoke$arity$3 = render__3;
return render;
})()
;
/**
* Remove a component from the given DOM node.
*/
reagent.core.unmount_component_at_node = (function unmount_component_at_node(container){return reagent.dom.unmount_component_at_node.call(null,container);
});
/**
* Turns a component into an HTML string.
*/
reagent.core.render_to_string = (function render_to_string(component){return reagent.dom.server.render_to_string.call(null,component);
});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
* Turns a component into an HTML string, without data-react-id attributes, etc.
*/
reagent.core.render_to_static_markup = (function render_to_static_markup(component){return reagent.dom.server.render_to_static_markup.call(null,component);
});
/**
* Force re-rendering of all mounted Reagent components. This is
* probably only useful in a development environment, when you want to
* update components in response to some dynamic changes to code.
* 
* Note that force-update-all may not update root components. This
* happens if a component 'foo' is mounted with `(render [foo])` (since
* functions are passed by value, and not by reference, in
* ClojureScript). To get around this you'll have to introduce a layer
* of indirection, for example by using `(render [#'foo])` instead.
*/
reagent.core.force_update_all = (function force_update_all(){return reagent.dom.force_update_all.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
* Create a component, React style. Should be called with a map,
* looking like this:
* {:get-initial-state (fn [this])
* :component-will-receive-props (fn [this new-argv])
* :should-component-update (fn [this old-argv new-argv])
* :component-will-mount (fn [this])
* :component-did-mount (fn [this])
* :component-will-update (fn [this new-argv])
* :component-did-update (fn [this old-argv])
* :component-will-unmount (fn [this])
* :reagent-render (fn [args....])   ;; or :render (fn [this])
* }
* 
* Everything is optional, except either :reagent-render or :render.
*/
reagent.core.create_class = (function create_class(spec){return reagent.impl.component.create_class.call(null,spec);
});
/**
* Returns the current React component (a.k.a this) in a component
* function.
*/
reagent.core.current_component = (function current_component(){return reagent.impl.component._STAR_current_component_STAR_;
});
/**
* Returns an atom containing a components state.
*/
reagent.core.state_atom = (function state_atom(this$){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
return reagent.impl.component.state_atom.call(null,this$);
});
/**
* Returns the state of a component, as set with replace-state or set-state.
* Equivalent to (deref (r/state-atom this))
*/
reagent.core.state = (function state(this$){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
* Set state of a component.
* Equivalent to (reset! (state-atom this) new-state)
*/
reagent.core.replace_state = (function replace_state(this$,new_state){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null))))))));
}
return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
* Merge component state with new-state.
* Equivalent to (swap! (state-atom this) merge new-state)
*/
reagent.core.set_state = (function set_state(this$,new_state){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null))))))));
}
return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
* Force a component to re-render immediately.
* 
* If the second argument is true, child components will also be
* re-rendered, even is their arguments have not changed.
*/
reagent.core.force_update = (function() {
var force_update = null;
var force_update__1 = (function (this$){return force_update.call(null,this$,false);
});
var force_update__2 = (function (this$,deep){return reagent.impl.util.force_update.call(null,this$,deep);
});
force_update = function(this$,deep){
switch(arguments.length){
case 1:
return force_update__1.call(this,this$);
case 2:
return force_update__2.call(this,this$,deep);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
force_update.cljs$core$IFn$_invoke$arity$1 = force_update__1;
force_update.cljs$core$IFn$_invoke$arity$2 = force_update__2;
return force_update;
})()
;
/**
* Returns the props passed to a component.
*/
reagent.core.props = (function props(this$){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
return reagent.impl.component.get_props.call(null,this$);
});
/**
* Returns the children passed to a component.
*/
reagent.core.children = (function children(this$){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
return reagent.impl.component.get_children.call(null,this$);
});
/**
* Returns the entire Hiccup form passed to the component.
*/
reagent.core.argv = (function argv(this$){if(reagent.impl.component.reagent_component_QMARK_.call(null,this$))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))));
}
return reagent.impl.component.get_argv.call(null,this$);
});
/**
* Returns the root DOM node of a mounted component.
*/
reagent.core.dom_node = (function dom_node(this$){return reagent.dom.dom_node.call(null,this$);
});
/**
* Utility function that merges two maps, handling :class and :style
* specially, like React's transferPropsTo.
*/
reagent.core.merge_props = (function merge_props(defaults,props){return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
* Render dirty components immediately to the DOM.
* 
* Note that this may not work in event handlers, since React.js does
* batching of updates there.
*/
reagent.core.flush = (function flush(){return reagent.impl.batching.flush.call(null);
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* Reagent components that derefs one of these are automatically
* re-rendered.
* @param {...*} var_args
*/
reagent.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return reagent.ratom.atom.call(null,x);
});
var atom__2 = (function() { 
var G__5407__delegate = function (x,rest){return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
};
var G__5407 = function (x,var_args){
var rest = null;if (arguments.length > 1) {
  rest = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5407__delegate.call(this,x,rest);};
G__5407.cljs$lang$maxFixedArity = 1;
G__5407.cljs$lang$applyTo = (function (arglist__5408){
var x = cljs.core.first(arglist__5408);
var rest = cljs.core.rest(arglist__5408);
return G__5407__delegate(x,rest);
});
G__5407.cljs$core$IFn$_invoke$arity$variadic = G__5407__delegate;
return G__5407;
})()
;
atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Takes a function and optional arguments, and returns a derefable
* containing the output of that function. If the function derefs
* Reagent atoms (or track, etc), the value will be updated whenever
* the atom changes.
* 
* In other words, @(track foo bar) will produce the same result
* as (foo bar), but foo will only be called again when the atoms it
* depends on changes, and will only trigger updates of components when
* its result changes.
* 
* track is lazy, i.e the function is only evaluated on deref.
* @param {...*} var_args
*/
reagent.core.track = (function() { 
var track__delegate = function (f,args){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return reagent.ratom.make_track.call(null,f,args);
};
var track = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return track__delegate.call(this,f,args);};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = (function (arglist__5409){
var f = cljs.core.first(arglist__5409);
var args = cljs.core.rest(arglist__5409);
return track__delegate(f,args);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* An eager version of track. The function passed is called
* immediately, and continues to be called when needed, until stopped
* with dispose!.
* @param {...*} var_args
*/
reagent.core.track_BANG_ = (function() { 
var track_BANG___delegate = function (f,args){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return reagent.ratom.make_track_BANG_.call(null,f,args);
};
var track_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return track_BANG___delegate.call(this,f,args);};
track_BANG_.cljs$lang$maxFixedArity = 1;
track_BANG_.cljs$lang$applyTo = (function (arglist__5410){
var f = cljs.core.first(arglist__5410);
var args = cljs.core.rest(arglist__5410);
return track_BANG___delegate(f,args);
});
track_BANG_.cljs$core$IFn$_invoke$arity$variadic = track_BANG___delegate;
return track_BANG_;
})()
;
/**
* Stop the result of track! from updating.
*/
reagent.core.dispose_BANG_ = (function dispose_BANG_(x){return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
* Provide a combination of value and callback, that looks like an atom.
* 
* The first argument can be any value, that will be returned when the
* result is deref'ed.
* 
* The second argument should be a function, that is called with the
* optional extra arguments provided to wrap, and the new value of the
* resulting 'atom'.
* 
* Use for example like this:
* 
* (wrap (:foo @state)
* swap! state assoc :foo)
* 
* Probably useful only for passing to child components.
* @param {...*} var_args
*/
reagent.core.wrap = (function() { 
var wrap__delegate = function (value,reset_fn,args){if(cljs.core.ifn_QMARK_.call(null,reset_fn))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"reset-fn","reset-fn",949643977,null)))))));
}
return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
};
var wrap = function (value,reset_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return wrap__delegate.call(this,value,reset_fn,args);};
wrap.cljs$lang$maxFixedArity = 2;
wrap.cljs$lang$applyTo = (function (arglist__5411){
var value = cljs.core.first(arglist__5411);
arglist__5411 = cljs.core.next(arglist__5411);
var reset_fn = cljs.core.first(arglist__5411);
var args = cljs.core.rest(arglist__5411);
return wrap__delegate(value,reset_fn,args);
});
wrap.cljs$core$IFn$_invoke$arity$variadic = wrap__delegate;
return wrap;
})()
;
/**
* Provide a cursor into a Reagent atom.
* 
* Behaves like a Reagent atom but focuses updates and derefs to
* the specified path within the wrapped Reagent atom. e.g.,
* (let [c (cursor ra [:nested :content])]
* ... @c ;; equivalent to (get-in @ra [:nested :content])
* ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
* ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
* )
* 
* The first parameter can also be a function, that should look something
* like this:
* 
* (defn set-get
* ([k] (get-in @state k))
* ([k v] (swap! state assoc-in k v)))
* 
* The function will be called with one argument – the path passed to
* cursor – when the cursor is deref'ed, and two arguments (path and new
* value) when the cursor is modified.
* 
* Given that set-get function, (and that state is a Reagent atom, or
* another cursor) these cursors are equivalent:
* (cursor state [:foo]) and (cursor set-get [:foo]).
*/
reagent.core.cursor = (function cursor(src,path){return reagent.ratom.cursor.call(null,src,path);
});
/**
* Swaps the value of a to be (apply f current-value-of-atom args).
* 
* rswap! works like swap!, except that recursive calls to rswap! on
* the same atom are allowed – and it always returns nil.
* @param {...*} var_args
*/
reagent.core.rswap_BANG_ = (function() { 
var rswap_BANG___delegate = function (a,f,args){if((function (){var G__5415 = a;if(G__5415)
{var bit__4304__auto__ = (G__5415.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4304__auto__) || (G__5415.cljs$core$IAtom$))
{return true;
} else
{if((!G__5415.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__5415);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__5415);
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"a","a",-482876059,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(cljs.core.truth_(a.rswapping))
{(function (){var or__3640__auto__ = a.rswapfs;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return a.rswapfs = [];
}
})().push((function (p1__5412_SHARP_){return cljs.core.apply.call(null,f,p1__5412_SHARP_,args);
}));
} else
{a.rswapping = true;
try{cljs.core.swap_BANG_.call(null,a,(function (state){var s = cljs.core.apply.call(null,f,state,args);while(true){
var temp__4427__auto__ = (function (){var G__5416 = a.rswapfs;var G__5416__$1 = (((G__5416 == null))?null:G__5416.shift());return G__5416__$1;
})();if((temp__4427__auto__ == null))
{return s;
} else
{var sf = temp__4427__auto__;{
var G__5417 = sf.call(null,s);
s = G__5417;
continue;
}
}
break;
}
}));
}finally {a.rswapping = false;
}}
return null;
};
var rswap_BANG_ = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rswap_BANG___delegate.call(this,a,f,args);};
rswap_BANG_.cljs$lang$maxFixedArity = 2;
rswap_BANG_.cljs$lang$applyTo = (function (arglist__5418){
var a = cljs.core.first(arglist__5418);
arglist__5418 = cljs.core.next(arglist__5418);
var f = cljs.core.first(arglist__5418);
var args = cljs.core.rest(arglist__5418);
return rswap_BANG___delegate(a,f,args);
});
rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = rswap_BANG___delegate;
return rswap_BANG_;
})()
;
/**
* Run f using requestAnimationFrame or equivalent.
* 
* f will be called just before components are rendered.
*/
reagent.core.next_tick = (function next_tick(f){return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
* Run f using requestAnimationFrame or equivalent.
* 
* f will be called just after components are rendered.
*/
reagent.core.after_render = (function after_render(f){return reagent.impl.batching.do_after_render.call(null,f);
});
/**
* Works just like clojure.core/partial, except that it is an IFn, and
* the result can be compared with =
* @param {...*} var_args
*/
reagent.core.partial = (function() { 
var partial__delegate = function (f,args){return (new reagent.impl.util.partial_ifn(f,args,null));
};
var partial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partial__delegate.call(this,f,args);};
partial.cljs$lang$maxFixedArity = 1;
partial.cljs$lang$applyTo = (function (arglist__5419){
var f = cljs.core.first(arglist__5419);
var args = cljs.core.rest(arglist__5419);
return partial__delegate(f,args);
});
partial.cljs$core$IFn$_invoke$arity$variadic = partial__delegate;
return partial;
})()
;
reagent.core.component_path = (function component_path(c){return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map