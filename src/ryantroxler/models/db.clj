(ns ryantroxler.models.db
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [ryantroxler.models.schema :as schema]))

(defdb db schema/db-spec)

(defentity users)
(defentity blogposts)

(defn create-user [user]
  (insert users
          (values user)))

(defn update-user [id first-name last-name email]
  (update users
  (set-fields {:first_name first-name
               :last_name last-name
               :email email})
  (where {:id id})))

(defn get-user [id]
  (first (select users
                 (where {:id id})
                 (limit 1))))

(defn save-blogpost
  [blogtitle message]
  (insert blogposts
          (values {:blogtitle blogtitle
                   :message message
                   :timestamp (new java.util.Date)})))

(defn get-blogposts []
  (select blogposts))
