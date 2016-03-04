(defproject loracharge "0.1.0-SNAPSHOT"
  :description "Rest API + UI for LoraCharge"
  :url "http://loracharge.addictivesoftware.net"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-json "0.1.2"]
                 [cheshire "4.0.3"]
                 [c3p0/c3p0 "0.9.1.2"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [com.h2database/h2 "1.3.168"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [cljs-ajax "0.2.6"]
                 [reagent "0.6.0-alpha"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.13"]
            [lein-pdo "0.1.1"]]  
  :ring {:handler loracharge.handler/app}
  :source-paths ["src/clj"]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}
  :cljsbuild {:builds [{:id "dev"
                      :source-paths ["src/cljs"]
                      :compiler {:output-to "resources/public/js/app.js"
                                 :output-dir "resources/public/js/out"
                                 :optimizations :none
                                 :source-map true}}]}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
