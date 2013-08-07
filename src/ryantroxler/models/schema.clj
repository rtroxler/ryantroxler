(ns ryantroxler.models.schema
  (:require [clojure.java.jdbc :as sql]
            [noir.io :as io]))

(def db-store "site.db")

(def db-spec {:classname "org.h2.Driver"
              :subprotocol "h2"
              :subname (str (io/resource-path) db-store)
              :user "sa"
              :password ""
              :naming {:keys clojure.string/lower-case
                       :fields clojure.string/upper-case}})
(defn initialized?
  "checks to see if the database schema is present"
  []
  (.exists (new java.io.File (str (io/resource-path) db-store ".h2.db"))))

(defn create-users-table
  []
  (sql/with-connection db-spec
    (sql/create-table
      :users
      [:id "varchar(20) PRIMARY KEY"]
      [:first_name "varchar(30)"]
      [:last_name "varchar(30)"]
      [:email "varchar(30)"]
      [:admin :boolean]
      [:last_login :time]
      [:is_active :boolean]
      [:pass "varchar(100)"])))


(defn create-blogposts-table
  []
  (sql/with-connection db-spec
    (sql/create-table
      :blogposts
      [:id "INTEGER PRIMARY KEY AUTO_INCREMENT"]
      [:timestamp :timestamp]
      [:blogtitle "varchar(30)"]
      [:message "varchar(200)"])
    (sql/do-commands
      "CREATE INDEX timestamp_index ON blogposts (timestamp)")))

(defn create-tables
  "creates the database tables used by the application"
  []
  (create-users-table)
  (create-blogposts-table))
