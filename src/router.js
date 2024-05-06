import {
  createRouter,
  createWebHistory
} from 'vue-router';
import WlecomePage from './view/welcome-page.vue';
import CreatePage from './view/create-page.vue';
import WalletPage from './view/wallet-page.vue';
import HistoryPage from './view/history-page.vue';
import SettingPage from './view/settings-page.vue';
import ToncPage from './view/ton-coin-page.vue';
import UsdtcPage from './view/usdt-coin-page.vue';
import RecoveryPage from './view/recovery-page.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/welcome',
      component: WlecomePage,
    },
    {
      path: '/settings',
      component: SettingPage,
    },
    {
      path: '/ton-coin',
      component: ToncPage,
    },
    {
      path: '/usdt-coin',
      component: UsdtcPage,
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
});


router.beforeEach((to, from, next) => {
  let hasPublicKey = localStorage.getItem('publicArr');
  if (!hasPublicKey && ['/wallet', '/history', '/recovery', '/settings', '/usdt-coin', '/ton-coin'].includes(to.path)) {
    next({
      path: '/welcome'
    });
  } else if (hasPublicKey && to.path === '/welcome' || hasPublicKey && to.path === '/create') {
    next({
      path: '/wallet'
    });
  } else {
    next();
  }
});

export default router;