import { createRouter, createWebHistory } from "vue-router";
import MyStrategies from "../Views/mystrategies/MyStrategies.vue";
import Home from "../Views/dashboard/Home.vue";
import Orders from "../Views/orders/Orders.vue";
import Position from "../Views/position/Position.vue";
import Videos from "../Views/videos/Videos.vue";
import Brokers from "../Views/broker/Brokers.vue";

export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : "/broker",
            component : Brokers
        },
        {
            path : "/mystrategies",
            component : MyStrategies
        },
        {
            path : "/orders",
            component : Orders
        },
        {
            path : "/position",
            component : Position
        },
        {
            path : "/strategies",
            component : MyStrategies
        },
        {
            path : "/videos",
            component : Videos
        }
    ]
})