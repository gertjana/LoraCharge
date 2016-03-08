(ns loracharge.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [loracharge.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/status"))]
      (is (= (:status response) 200))
      (is (= (:body response) "OK"))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404))))

  (testing "get sessions"
    (let [response (app (mock/request :get "/sessions"))]
      (is (= (:status response) 200))
      (is (= (:body response "[]"))))))
