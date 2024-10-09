import { createRouter, createWebHistory } from "vue-router";
import MyStrategies from "../Views/MyStrategies.vue";
import Home from "../Views/Home.vue";
import Orders from "../Views/Orders.vue";
import Position from "../Views/Position.vue";
import Videos from "../Views/Videos.vue";
import Brokers from "../Views/Brokers.vue";

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