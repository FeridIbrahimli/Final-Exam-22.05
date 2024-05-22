import {element} from 'prop-types'
import MainRoot from '../pages/MainRoot'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Pages from '../pages/Pages'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

export const ROUTES = [
    {
        element: <MainRoot/>,
        path: "/",
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/pages",
                element: <Pages/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
]