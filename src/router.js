import {
    createRouter,
    createWebHistory
} from 'vue-router';
import WlecomePage from "./view/welcome-page.vue"
import CreatePage from "./view/create-page.vue"
import WalletPage from "./view/wallet-page.vue"
import HistoryPage from "./view/history-page.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: WlecomePage,
        },
        {
            path: '/create',
            component: CreatePage,
        },
        {
            path: '/wallet',
            component: WalletPage,
        },
        {
            path: '/history',
            component: HistoryPage,
        },

    ],
})

export default router;