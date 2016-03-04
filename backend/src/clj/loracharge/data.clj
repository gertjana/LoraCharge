(ns loracharge.data
	(:import com.mchange.v2.c3p0.ComboPooledDataSource)
      (:require [clojure.java.jdbc :as sql]))

(def db-config
      {:classname "org.h2.Driver"
       :subprotocol "h2"
       :subname "mem:loracharge" ; :subname "/tmp/loracharge"
       :user ""
       :password ""})

(defn pool
  [config]
  (let [cpds (doto (ComboPooledDataSource.)
               (.setDriverClass (:classname config))
               (.setJdbcUrl (str "jdbc:" (:subprotocol config) ":" (:subname config)))
               (.setUser (:user config))
               (.setPassword (:password config))
               (.setMaxPoolSize 1)
               (.setMinPoolSize 1)
               (.setInitialPoolSize 1))]
    {:datasource cpds}))

(def pooled-db (delay (pool db-config)))

(defn db-connection [] @pooled-db)

(sql/with-connection (db-connection)
;  (sql/drop-table :sessions) ; no need to do that for in-memory databases
  (sql/create-table :sessions [:id "varchar(256)" "primary key"]
                              [:device "varchar(10)"]
                              [:rfid "varchar(10)"]
                              [:volume "int(11)"]
                              [:duration "int(11)"]
                              [:start "varchar(30)"]
                              [:stop "varchar(30)"]
                              ))

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn get-all-sessions []
  (sql/with-connection (db-connection)
    (sql/with-query-results results
      ["select * from sessions"]
      (into [] results))))

(defn get-session [id]
  (sql/with-connection (db-connection)
    (sql/with-query-results results
      ["select * from sessions where id = ?" id]
      (cond
        (empty? results) nil
        :else (first results)))))

(defn create-new-session [ses]
  ; (println ses)
  ; (println (type ses)))
  (let [id (uuid)]
    (sql/with-connection (db-connection)
      (let [session (assoc ses "id" id)]
        (sql/insert-record :sessions session)))
    (get-session id)))

(defn update-session [id ses]
    (sql/with-connection (db-connection)
      (let [session (assoc ses "id" id)]
        (sql/update-values :sessions ["id=?" id] session)))
    (get-session id))

(defn delete-session [id]
  (sql/with-connection (db-connection)
    (sql/delete-rows :sessions ["id=?" id]))
  nil)



