(ns starter.starter-test)

(require
 '[starter.starter :as starter]
 '[clojure.test :as t])

(t/deftest adder-test
  (t/is (= 4 (starter/adder 2 2)))
  (t/is (= 10 (starter/adder 8 2))))
