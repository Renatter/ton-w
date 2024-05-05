import {
    createRouter,
    createWebHistory
} from 'vue-router';
import WlecomePage from "./view/welcome-page.vue"
import CreatePage from "./view/create-page.vue"
import WalletPage from "./view/wallet-page.vue"
import HistoryPage from "./view/history-page.vue"
import SettingPage from "./view/settings-page.vue"
import RecoveryPage from "./view/recovery-page.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: WlecomePage,
        },
        {
            path: '/settings',
            component: SettingPage,
        },
        {
            path: '/create',
            component: CreatePage,
        },
        {
            path: '/recovery',
            component: RecoveryPage,
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