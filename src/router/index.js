import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import DashBoard from '@/components/page/DashBoard'
import BasicCharts from '@/components/page/BasicCharts'
import FormInput from '@/components/page/FormInput'
import FormLayouts from '@/components/page/FormLayouts'
import BasicTables from '@/components/page/BasicTables'
import EditorPage from '@/components/page/EditorPage'
import MarkdownPage from '@/components/page/MarkdownPage'
import TodoList from '@/components/page/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home,
		children:[
			{
				path: '',
				component:DashBoard	
			},
			{
				path:'/DashBoard',
				component:DashBoard
			},
			{
				path:'/EditorPage',
				component:EditorPage
			},
			{
				path:'/MarkdownPage',
				component:MarkdownPage
			},
			{
				path:'/BasicCharts',
				component:BasicCharts
			},
			{
				path:'/FormInput',
				component:FormInput
			},
			{
				path:'/FormLayouts',
				component:FormLayouts
			},
			{
				path:'/BasicTables',
				component:BasicTables
			},
			{
				path:'/TodoList',
				component:TodoList
			}
		]
    }
  ]
})
