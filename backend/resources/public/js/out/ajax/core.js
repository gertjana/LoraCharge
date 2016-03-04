// Compiled by ClojureScript 0.0-2371
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
ajax.core.AjaxImpl = (function (){var obj5539 = {};return obj5539;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3628__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj5541 = {};return obj5541;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (ajax.core._abort[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (ajax.core._abort["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__5542){var map__5543 = p__5542;var map__5543__$1 = ((cljs.core.seq_QMARK_.call(null,map__5543))?cljs.core.apply.call(null,cljs.core.hash_map,map__5543):map__5543);var timeout = cljs.core.get.call(null,map__5543__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));var G__5544 = (new goog.net.XhrIo());goog.events.listen(G__5544,goog.net.EventType.COMPLETE,handler);
G__5544.setTimeoutInterval((function (){var or__3640__auto__ = timeout;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
})());
G__5544.send(uri,method,body,headers);
return G__5544;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__5545){var map__5546 = p__5545;var map__5546__$1 = ((cljs.core.seq_QMARK_.call(null,map__5546))?cljs.core.apply.call(null,cljs.core.hash_map,map__5546):map__5546);var id = cljs.core.get.call(null,map__5546__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var timeout = cljs.core.get.call(null,map__5546__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));var priority = cljs.core.get.call(null,map__5546__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));var max_retries = cljs.core.get.call(null,map__5546__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__5547){var map__5549 = p__5547;var map__5549__$1 = ((cljs.core.seq_QMARK_.call(null,map__5549))?cljs.core.apply.call(null,cljs.core.hash_map,map__5549):map__5549);var prefix = cljs.core.get.call(null,map__5549__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));var keywords_QMARK_ = cljs.core.get.call(null,map__5549__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),((function (map__5549,map__5549__$1,prefix,keywords_QMARK_){
return (function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
});})(map__5549,map__5549__$1,prefix,keywords_QMARK_))
,new cljs.core.Keyword(null,"description","description",-1428560544),("JSON"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?(" prefix '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"'"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null)))], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = (function (){var or__3640__auto__ = xhrio.getResponseHeader("Content-Type");if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return "";
}
})();var detect = ((function (ct){
return (function detect(s){return (ct.indexOf(s) >= (0));
});})(ct))
;
return cljs.core.update_in.call(null,((detect.call(null,"application/json"))?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):((detect.call(null,"application/edn"))?ajax.core.edn_response_format.call(null):((detect.call(null,"text/plain"))?ajax.core.raw_response_format.call(null):((detect.call(null,"text/html"))?ajax.core.raw_response_format.call(null):ajax.core.edn_response_format.call(null)
)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null),((function (ct){
return (function (p1__5550_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5550_SHARP_)+" (default)");
});})(ct))
);
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",-1857649168));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null));
} else
{throw (new Error(("unrecognized format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));

}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__5551,xhrio){var map__5553 = p__5551;var map__5553__$1 = ((cljs.core.seq_QMARK_.call(null,map__5553))?cljs.core.apply.call(null,cljs.core.hash_map,map__5553):map__5553);var description = cljs.core.get.call(null,map__5553__$1,new cljs.core.Keyword(null,"description","description",-1428560544));var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"response","response",-1068424192),null], null);var status_text = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)+"  Format should have been "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(description));var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",368289415),true,new cljs.core.Keyword(null,"original-text","original-text",744448452),xhrio.getResponseText());if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return parse_error;
} else
{return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.call(null,(-1),status))
{if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request aborted by client.",new cljs.core.Keyword(null,"aborted?","aborted?",448075047),true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request timed out.",new cljs.core.Keyword(null,"timeout?","timeout?",-1570063160),true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));var parse = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = parse.call(null,xhrio);if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null)], null);
}
}catch (e5557){if((e5557 instanceof Object))
{var e = e5557;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else
{throw e5557;

}
}}
}catch (e5556){if((e5556 instanceof Object))
{var e = e5556;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(0),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),e.message,new cljs.core.Keyword(null,"response","response",-1068424192),null], null)], null);
} else
{throw e5556;

}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.params_to_str.call(null,params)));
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__5558,p__5559){var map__5563 = p__5558;var map__5563__$1 = ((cljs.core.seq_QMARK_.call(null,map__5563))?cljs.core.apply.call(null,cljs.core.hash_map,map__5563):map__5563);var format = map__5563__$1;var write = cljs.core.get.call(null,map__5563__$1,new cljs.core.Keyword(null,"write","write",-1857649168));var content_type = cljs.core.get.call(null,map__5563__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));var map__5564 = p__5559;var map__5564__$1 = ((cljs.core.seq_QMARK_.call(null,map__5564))?cljs.core.apply.call(null,cljs.core.hash_map,map__5564):map__5564);var params = cljs.core.get.call(null,map__5564__$1,new cljs.core.Keyword(null,"params","params",710516235));var headers = cljs.core.get.call(null,map__5564__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));if(cljs.core._EQ_.call(null,method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else
{var map__5565 = format;var map__5565__$1 = ((cljs.core.seq_QMARK_.call(null,map__5565))?cljs.core.apply.call(null,cljs.core.hash_map,map__5565):map__5565);var write__$1 = cljs.core.get.call(null,map__5565__$1,new cljs.core.Keyword(null,"write","write",-1857649168));var content_type__$1 = cljs.core.get.call(null,map__5565__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));var body = write__$1.call(null,params);var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.call(null,(function (){var or__3640__auto__ = headers;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__5566){var map__5568 = p__5566;var map__5568__$1 = ((cljs.core.seq_QMARK_.call(null,map__5568))?cljs.core.apply.call(null,cljs.core.hash_map,map__5568):map__5568);var handler = cljs.core.get.call(null,map__5568__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));var get_default_format = cljs.core.get.call(null,map__5568__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888));if(cljs.core.truth_(handler))
{return ((function (map__5568,map__5568__$1,handler,get_default_format){
return (function (xhrio){return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__3640__auto__ = get_default_format;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return ajax.core.no_format;
}
})()));
});
;})(map__5568,map__5568__$1,handler,get_default_format))
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__5569){var map__5572 = p__5569;var map__5572__$1 = ((cljs.core.seq_QMARK_.call(null,map__5572))?cljs.core.apply.call(null,cljs.core.hash_map,map__5572):map__5572);var opts = map__5572__$1;var uri = cljs.core.get.call(null,map__5572__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));var method = cljs.core.get.call(null,map__5572__$1,new cljs.core.Keyword(null,"method","method",55703592));var format = cljs.core.get.call(null,map__5572__$1,new cljs.core.Keyword(null,"format","format",-1306924766));var manager = cljs.core.get.call(null,map__5572__$1,new cljs.core.Keyword(null,"manager","manager",-818607470));var format__$1 = ajax.core.get_format.call(null,format);var method__$1 = ajax.core.normalize_method.call(null,method);var vec__5573 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.call(null,vec__5573,(0),null);var body = cljs.core.nth.call(null,vec__5573,(1),null);var headers = cljs.core.nth.call(null,vec__5573,(2),null);var handler = ajax.core.base_handler.call(null,format__$1,opts);return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__5574__delegate = function (uri,method,args){var f = cljs.core.first.call(null,args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,args):f);return ajax_request.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method));
};
var G__5574 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5574__delegate.call(this,uri,method,args);};
G__5574.cljs$lang$maxFixedArity = 2;
G__5574.cljs$lang$applyTo = (function (arglist__5575){
var uri = cljs.core.first(arglist__5575);
arglist__5575 = cljs.core.next(arglist__5575);
var method = cljs.core.first(arglist__5575);
var args = cljs.core.rest(arglist__5575);
return G__5574__delegate(uri,method,args);
});
G__5574.cljs$core$IFn$_invoke$arity$variadic = G__5574__delegate;
return G__5574;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__5577 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__5577) {
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
throw (new Error(("unrecognized request format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));

}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else
{var G__5580 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__5580) {
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
default:
return null;

}

}
}
});
ajax.core.transform_handler = (function transform_handler(p__5582){var map__5587 = p__5582;var map__5587__$1 = ((cljs.core.seq_QMARK_.call(null,map__5587))?cljs.core.apply.call(null,cljs.core.hash_map,map__5587):map__5587);var handler = cljs.core.get.call(null,map__5587__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));var error_handler = cljs.core.get.call(null,map__5587__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));var finally$ = cljs.core.get.call(null,map__5587__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));return ((function (map__5587,map__5587__$1,handler,error_handler,finally$){
return (function easy_handler(p__5588){var vec__5590 = p__5588;var ok = cljs.core.nth.call(null,vec__5590,(0),null);var result = cljs.core.nth.call(null,vec__5590,(1),null);var temp__4423__auto___5591 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4423__auto___5591))
{var h_5592 = temp__4423__auto___5591;h_5592.call(null,result);
} else
{}
if(cljs.core.fn_QMARK_.call(null,finally$))
{return finally$.call(null);
} else
{return null;
}
});
;})(map__5587,map__5587__$1,handler,error_handler,finally$))
});
ajax.core.transform_format = (function transform_format(p__5593){var map__5595 = p__5593;var map__5595__$1 = ((cljs.core.seq_QMARK_.call(null,map__5595))?cljs.core.apply.call(null,cljs.core.hash_map,map__5595):map__5595);var opts = map__5595__$1;var format = cljs.core.get.call(null,map__5595__$1,new cljs.core.Keyword(null,"format","format",-1306924766));var response_format = cljs.core.get.call(null,map__5595__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));var rf = ajax.core.keyword_response_format.call(null,response_format,opts);if((format == null))
{return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else
{return format;

}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888),ajax.core.get_default_format);
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__5596){var vec__5598 = p__5596;var opts = cljs.core.nth.call(null,vec__5598,(0),null);return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
};
var GET = function (uri,var_args){
var p__5596 = null;if (arguments.length > 1) {
  p__5596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__5596);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__5599){
var uri = cljs.core.first(arglist__5599);
var p__5596 = cljs.core.rest(arglist__5599);
return GET__delegate(uri,p__5596);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__5600){var vec__5602 = p__5600;var opts = cljs.core.nth.call(null,vec__5602,(0),null);return ajax.core.ajax_request.call(null,uri,"HEAD",ajax.core.transform_opts.call(null,opts));
};
var HEAD = function (uri,var_args){
var p__5600 = null;if (arguments.length > 1) {
  p__5600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__5600);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__5603){
var uri = cljs.core.first(arglist__5603);
var p__5600 = cljs.core.rest(arglist__5603);
return HEAD__delegate(uri,p__5600);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__5604){var vec__5606 = p__5604;var opts = cljs.core.nth.call(null,vec__5606,(0),null);return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
};
var POST = function (uri,var_args){
var p__5604 = null;if (arguments.length > 1) {
  p__5604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__5604);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__5607){
var uri = cljs.core.first(arglist__5607);
var p__5604 = cljs.core.rest(arglist__5607);
return POST__delegate(uri,p__5604);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__5608){var vec__5610 = p__5608;var opts = cljs.core.nth.call(null,vec__5610,(0),null);return ajax.core.ajax_request.call(null,uri,"PUT",ajax.core.transform_opts.call(null,opts));
};
var PUT = function (uri,var_args){
var p__5608 = null;if (arguments.length > 1) {
  p__5608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__5608);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__5611){
var uri = cljs.core.first(arglist__5611);
var p__5608 = cljs.core.rest(arglist__5611);
return PUT__delegate(uri,p__5608);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__5612){var vec__5614 = p__5612;var opts = cljs.core.nth.call(null,vec__5614,(0),null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__5612 = null;if (arguments.length > 1) {
  p__5612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__5612);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__5615){
var uri = cljs.core.first(arglist__5615);
var p__5612 = cljs.core.rest(arglist__5615);
return DELETE__delegate(uri,p__5612);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__5616){var vec__5618 = p__5616;var opts = cljs.core.nth.call(null,vec__5618,(0),null);return ajax.core.ajax_request.call(null,uri,"OPTIONS",ajax.core.transform_opts.call(null,opts));
};
var OPTIONS = function (uri,var_args){
var p__5616 = null;if (arguments.length > 1) {
  p__5616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__5616);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__5619){
var uri = cljs.core.first(arglist__5619);
var p__5616 = cljs.core.rest(arglist__5619);
return OPTIONS__delegate(uri,p__5616);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__5620){var vec__5622 = p__5620;var opts = cljs.core.nth.call(null,vec__5622,(0),null);return ajax.core.ajax_request.call(null,uri,"TRACE",ajax.core.transform_opts.call(null,opts));
};
var TRACE = function (uri,var_args){
var p__5620 = null;if (arguments.length > 1) {
  p__5620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__5620);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__5623){
var uri = cljs.core.first(arglist__5623);
var p__5620 = cljs.core.rest(arglist__5623);
return TRACE__delegate(uri,p__5620);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;

//# sourceMappingURL=core.js.map