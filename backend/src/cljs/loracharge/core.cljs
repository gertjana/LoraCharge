(ns loracharge.core
  (:require [goog.events :as events]
            [clojure.string :as string]
            [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]))

(enable-console-print!)

(defonce session-state (atom []))

; API Calls

(defn get-all-sessions [] 
 (GET "/sessions" {:handler (fn [value] (reset! session-state value))}))

; Components

(defn header []
  [:h3 "Lora Sessions"])

(defn session-row [s]
  [:tr {:key (str (first (vals s)))}
    (for [v (vals s)] ^{:key (str s v)}
       [:td v])])

(defn sessions []
  [:table
    [:tbody
      [:tr
        (for [h (keys (first @session-state))] ^{:key h} 
          [:th (string/capitalize h)])]
      (for [s @session-state] ^{:key s} 
        [session-row s])]])

(defn main []
  [:div
    [header]
    [sessions]])

; Main entry point
(defn ^:export run []
  (get-all-sessions)
  (r/render [main]
    (js/document.getElementById "app")))