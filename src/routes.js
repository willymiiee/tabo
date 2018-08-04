import React from 'react'
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>
}

const Dashboard = Loadable({
  loader: () => import('./components/Dashboard'),
  loading: Loading,
})

const User = Loadable({
  loader: () => import('./components/Users'),
  loading: Loading,
})

const UserDetail = Loadable({
  loader: () => import('./components/UserDetail'),
  loading: Loading,
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users/:type/:id', name: 'User Detail', component: UserDetail },
  { path: '/users/:type', name: 'User', component: User },
]

export default routes
