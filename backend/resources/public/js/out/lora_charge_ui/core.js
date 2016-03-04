// Compiled by ClojureScript 0.0-2371
goog.provide('lora_charge_ui.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
lora_charge_ui.core.session_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
lora_charge_ui.core.header = (function header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Lora Charge"], null);
});
lora_charge_ui.core.get_all_sessions = (function get_all_sessions(){return cljs.core.PersistentVector.EMPTY;
});
lora_charge_ui.core.session_row = (function session_row(s){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"device","device",1817743352))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"rfid","rfid",-1302128844))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"volume","volume",1900330799))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"duration","duration",1444101068))], null)], null);
});
lora_charge_ui.core.sessions = (function sessions(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Device"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Rfid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Volume"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Duration"], null)], null),(function (){var iter__4379__auto__ = (function iter__5409(s__5410){return (new cljs.core.LazySeq(null,(function (){var s__5410__$1 = s__5410;while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5410__$1);if(temp__4425__auto__)
{var s__5410__$2 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5410__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5410__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5412 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5411 = (0);while(true){
if((i__5411 < size__4378__auto__))
{var s = cljs.core._nth.call(null,c__4377__auto__,i__5411);cljs.core.chunk_append.call(null,b__5412,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lora_charge_ui.core.session_row,s], null));
{
var G__5413 = (i__5411 + (1));
i__5411 = G__5413;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5412),iter__5409.call(null,cljs.core.chunk_rest.call(null,s__5410__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5412),null);
}
} else
{var s = cljs.core.first.call(null,s__5410__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lora_charge_ui.core.session_row,s], null),iter__5409.call(null,cljs.core.rest.call(null,s__5410__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,lora_charge_ui.core.get_all_sessions.call(null));
})()], null)], null);
});
lora_charge_ui.core.main = (function main(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lora_charge_ui.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lora_charge_ui.core.sessions], null)], null);
});
lora_charge_ui.core.run = (function run(){return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lora_charge_ui.core.main], null),document.getElementById("app"));
});
goog.exportSymbol('lora_charge_ui.core.run', lora_charge_ui.core.run);

//# sourceMappingURL=core.js.map