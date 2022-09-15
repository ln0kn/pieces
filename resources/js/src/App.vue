<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div id="app" :class="vueAppClasses">
		<router-view @setAppClasses="setAppClasses" />
	</div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
import router from '@/router.js'
import axios from '@/axios.js'

export default {
  data() {
    return {
      vueAppClasses: [],
    }
  },
  watch: {
    '$store.state.theme'(val) {
      this.toggleClassInBody(val)
    },
    '$vs.rtl'(val) {
      document.documentElement.setAttribute("dir", val ? "rtl" : "ltr")
    }
  },
  methods: {
    toggleClassInBody(className) {
      if (className == 'dark') {
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
        document.body.classList.add('theme-dark')
      }
      else if (className == 'semi-dark') {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
        document.body.classList.add('theme-semi-dark')
      }
      else {
        if (document.body.className.match('theme-dark'))      document.body.classList.remove('theme-dark')
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
      }
    },
    setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr)
    },
    handleWindowResize() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

      // Set --vh property
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    },
    handleScroll() {
      this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
    }
  },
  mounted() {
    this.toggleClassInBody(themeConfig.theme)
    this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      axios.interceptors.response.use(function(response) {
                return response;
            }, function(error) {
                if (error.response.status == 401 && error.response.statusText == 'Unauthorized' && error.response.data.error.indexOf('Token') == 0) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('userData')
//                    console.log(error.response)
                    router.push('login')
//                    router.push({
//                        path: '/login',
//                        query: {
//                            to: router.currentRoute.path
//                        }
//                    })
                }
                if(error.response.status == 400 && error.response.data.accredidation  ){
                    console.log($vs)
//                    this.$store.commit('ACC_MSG', error.response.data.message)
                    this.$store.dispatch('accMsg', error.response.data.message)
//                    this._vm.$vs.notify({
//                       title:"Accès refusée !",
//                       text: error.response.data.message,
//                       color:'warning',
//                       time:5000,
//                       position:'top-right',
//                       icon:'query_builder'
//                    })
                }
            });

  },
  async created() {

    let dir = this.$vs.rtl ? "rtl" : "ltr"
    document.documentElement.setAttribute("dir", dir)

    window.addEventListener('resize', this.handleWindowResize)
    window.addEventListener('scroll', this.handleScroll)
   
//            axios.interceptors.response.use(function(response) {
//                return response;
//            }, function(error) {
//                if (error.response.status == 401 && error.response.statusText == 'Unauthorized' && error.response.data.error.indexOf('Token') == 0) {
//                    localStorage.removeItem('token')
//                    localStorage.removeItem('userData')
////                    console.log(error.response)
//                    router.push('login')
////                    router.push({
////                        path: '/login',
////                        query: {
////                            to: router.currentRoute.path
////                        }
////                    })
//                }
//                if(error.response.status == 400 && error.response.data.accredidation  ){
////                    this.$store.commit('ACC_MSG', error.response.data.message)
////                    this.$store.dispatch('accMsg', error.response.data.message)
////                    this._vm.$vs.notify({
////                       title:"Accès refusée !",
////                       text: error.response.data.message,
////                       color:'warning',
////                       time:5000,
////                       position:'top-right',
////                       icon:'query_builder'
////                    })
//                }
//            });

  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
}

</script>
