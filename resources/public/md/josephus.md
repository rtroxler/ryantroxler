### Josephus Problem

First attempt at this Rosetta Code problem.

    (defn kill
      ([n k] (kill n k 0))
      ([n k m]
        (loop [a (+ m 1) m 0]
          (if (> a n)
            m
            (recur (inc a) (mod (+ m k) a))))))
