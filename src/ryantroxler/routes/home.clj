(ns ryantroxler.routes.home
  (:use compojure.core)
  (:require [ryantroxler.views.layout :as layout]
            [ryantroxler.util :as util]))

(defn home-page []
  (layout/render
    "home.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
  (layout/render "about.html"))

(defn todo-page [] 
  (layout/render "todo.html"
                 {:content (util/md->html "/md/todo.md")}))

(defn blog-page []
  (layout/render "blog.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (GET "/todo" [] (todo-page))
  (GET "/blog" [] (blog-page)))

