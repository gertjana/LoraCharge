(ns lora_charge_ui.core
  (:require [ajax.core :refer [GET POST]]
            [goog.events :as events]
            [reagent.core :as r]))

(enable-console-print!)

(def session-atom (r/atom []))

(defn header []
  [:h3 "Lora Charge"])

(defn get-all-sessions [] 
  [])
  ;(swap! session-atom (ajax/GET "/sessions")))

(defn session-row [s]
  [:tr {:key (get s :id)}
    [:td (get s :device)]
    [:td (get s :rfid)]
    [:td (get s :volume)]
    [:td (get s :duration)]])

(defn sessions [] 
  [:table
    [:tbody
      [:tr
        [:th "Device"]
        [:th "Rfid"]
        [:th "Volume"]
        [:th "Duration"]]
      (for [s (get-all-sessions)] 
        [session-row s])]])

(defn main []
  [:div
    [header]
    [sessions]])

(defn ^:export run []
  (r/render [main]
            (js/document.getElementById "app")))