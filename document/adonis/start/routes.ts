import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const ArticlesController = () => import('#controllers/articles_controller')
const CategoriesController = () => import('#controllers/categories_controller')

const AuthController = () => import('#controllers/auth_controller')
router.get('/', async () => 'welcome')

router.resource('category', CategoriesController).apiOnly()
  .use(['store', 'update', 'destroy'], [middleware.admin()])

router.group(() => {
  router.post('login', [AuthController, 'login'])
  router.post('register', [AuthController, 'register'])
}).prefix('/auth')

router.resource('article', ArticlesController).apiOnly().use(['store', 'update', 'destroy'], [middleware.admin()])



