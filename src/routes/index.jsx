import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'
import Hooks from '../Pages/Hooks'
import UseStateHook from '../Components/hooks/UseStateHook'
import UseEffectHook from '../Components/hooks/UseEffectHook'
import UseContextHook from '../Components/hooks/UseContextHook'
import UseRefHook from '../Components/hooks/UseRefHook'
import UseReducerHook from '../Components/hooks/UseReducerHook'
import UseMemoHook from '../Components/hooks/UseMemoHook'
import UseCallbackHook from '../Components/hooks/UseCallbackHook'
import UseLayoutEffectHook from '../Components/hooks/UseLayoutEffectHook'
import UseImperativeHandleHook from '../Components/hooks/UseImperativeHandleHook'
import UseHook from '../Components/hooks/UseHook'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/hooks',
                element: <Hooks/>,
                children: [
                    { path: "/hooks/usestate", element: <UseStateHook /> },
                    { path: "useeffect", element: <UseEffectHook /> },
                    { path: "usecontext", element: <UseContextHook /> },
                    { path: "useref", element: <UseRefHook /> },
                    { path: "usereducer", element: <UseReducerHook /> },
                    { path: "usememo", element: <UseMemoHook /> },
                    { path: "usecallback", element: <UseCallbackHook /> },
                    { path: "uselayouteffect", element: <UseLayoutEffectHook /> },
                    { path: "useimperativehandle", element: <UseImperativeHandleHook /> },
                    { path: 'use', element: <UseHook/>}
                  ],
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
])

export default router