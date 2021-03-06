(ns ryantroxler.handler
  (:require [compojure.core :refer [defroutes]]
            [ryantroxler.routes.auth :refer [auth-routes]]
            [ryantroxler.routes.home :refer [home-routes]]
            [noir.util.middleware :as middleware]
            [compojure.route :as route]
            [ryantroxler.models.schema :as schema]
            [taoensso.timbre :as timbre]
            [com.postspectacular.rotor :as rotor]))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn init
  "runs when the application starts and checks if the database
   schema exists, calls schema/create-tables if not."
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info
     :enabled? true
     :async? false ; should be always false for rotor
     :max-message-per-msecs nil
     :fn rotor/append})
  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "ryantroxler.log" :max-size (* 512 1024) :backlog 10})
  (if-not (schema/initialized?) (schema/create-tables))
  (timbre/info "ryantroxler started successfully"))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  [] 
  (timbre/info "ryantroxler is shutting down..."))

(def app (middleware/app-handler
           ;;add your application routes here
           [auth-routes home-routes app-routes]
           ;;add custom middleware here           
           :middleware []
           ;;add access rules here
           ;;each rule should be a vector
           :access-rules []))

(def war-handler (middleware/war-handler app))
