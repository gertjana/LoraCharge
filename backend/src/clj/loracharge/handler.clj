  (ns loracharge.handler
      (:use compojure.core)
      (:use cheshire.core)
      (:use ring.util.response)
      (:require [compojure.handler :as handler]
                [ring.middleware.json :as middleware]
                [compojure.route :as route]
                [loracharge.data :as data]))

    (defn get-status []
        {:status 200 :body "OK"})

    (defn start-session [ses]
      (data/create-new-session ses))

    (defn stop-session [ses]
      (let [opensession (data/get-open-session (get ses :rfid) (get ses :device))]
        (data/update-session (get opensession :id) (dissoc (merge opensession ses) :id))))

    (defn process-session [body]
      (if (= "start" (get body :type))
        (start-session (dissoc body :type))
        (stop-session (dissoc body :type)))) 

    (defroutes app-routes
      (GET "/"                  []             (resource-response "index.html" {:root "public"}))
      (GET "/status"            []             (get-status))
      (context "/sessions"      []             (defroutes sessions-routes
        (GET  "/"               []              (response (data/get-all-sessions)))
        (POST "/"               {body :body}    (response (process-session body)))
        (context "/:id"         [id]            (defroutes session-routes
          (GET "/"              []                (response (data/get-session id)))
          (PUT "/"              []                (response (data/update-session id)))
          (DELETE "/"           []                (response (data/delete-session id)))))))
      (route/resources "/")
      (route/not-found "Not Found"))

    (def app
        (-> (handler/api app-routes)
            (middleware/wrap-json-body {:keywords? true :bigdecimals? true})
            (middleware/wrap-json-response)))
