/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
                {
                    path: '/articleEmballage',
                    name: 'article',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/articleEmballage.vue'),
              },
                {
                    path: '/vente',
                    name: 'vente',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/vente.vue'),

              },
                {
                    path: '/ajustement',
                    name: 'ajustement',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/ajustement.vue'),

              },
                {
                    path: '/commande',
                    name: 'commande',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/commande.vue'),

              },
                {
                    path: '/magasin',
                    name: 'magasin',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/Magasin.vue'),
              },
                {
                    path: '/depense',
                    name: 'depense',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/Depense.vue'),
              },
                {
                    path: '/transfert',
                    name: 'transfert',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/Transfert.vue'),
              },
                {
                    path: '/approvisionnement',
                    name: 'approvisionnement',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/Approvisionnement.vue'),
              },
                {
                    path: '/client',
                    name: 'client',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/client.vue'),
              },
                {
                    path: '/user',
                    name: 'user',
                    meta: {
                        auth: true
                    },
                    component: () => import('./views/mesVues/Register.vue'),
              },


            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
                {
                    path: '/login',
                    name: 'page-login',
                    meta: {
                        auth: false
                    },
                    component: () => import('@/views/mesVues/Login.vue')
              },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach((to, from, next) => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
    if(from.path == "/login"){
        setTimeout( () => router.go(to.path), 50);
    }
    
})

router.beforeEach((to, from, next) => {
    // If auth required, check login. If login fails redirect to login page
    if (to.meta.auth) {
        if (!localStorage.getItem('userData')) {
            router.push({
                path: '/login',
                query: {
                    to: to.path
                }
            })
        }
    }
    
    
    
    return next()
});

export default router