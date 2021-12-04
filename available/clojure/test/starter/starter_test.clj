(ns starter.starter-test)

(require
 '[starter.starter :as starter]
 '[clojure.test :as t])

(t/deftest adder-test
  (t/is (= "Hello Alice!" (starter/say-hello "Alice")))
  (t/is (= "Hello World!" (starter/say-hello))))
