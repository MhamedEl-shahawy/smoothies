import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothies from '@/components/AddSmoothies'
import EditSmoothies from "@/components/EditSmoothies"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-smoothies',
      name: 'AddSmoothies',
      component: AddSmoothies
    },
     {
      path: '/edit-smoothies/:smoothies_slug',
      name: 'EditSmoothies',
      component: EditSmoothies
    }
  ]
})
