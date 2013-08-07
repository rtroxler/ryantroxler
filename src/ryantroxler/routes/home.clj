(ns ryantroxler.routes.home
  (:use compojure.core)
  (:require [ryantroxler.views.layout :as layout]
            [ryantroxler.util :as util]
            [ryantroxler.models.db :as db]))

(defn home-page []
  (layout/render
    "home.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
  (layout/render "about.html"))

(defn todo-page [] 
  (layout/render "todo.html"
                 {:content (util/md->html "/md/todo.md")}))

(defn blog-page [& [blogtitle message error]]
  (layout/render "blog.html"
                 {:error error
                  :blogtitle blogtitle
                  :message message
                  :messages (db/get-blogposts)}))

(defn save-blogpost [blogtitle message]
  (cond

    (empty? blogtitle)
    (blog-page blogtitle message "No Title")

    (empty? message)
    (blog-page blogtitle message "Got something to say, punk?")

    :else
    (do
      (db/save-blogpost blogtitle message)
      (blog-page))))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (GET "/todo" [] (todo-page))
  (GET "/blog" [] (blog-page))
  (POST "/blog" [blogtitle message] (save-blogpost blogtitle message)))

