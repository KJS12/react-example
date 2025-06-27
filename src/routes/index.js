

import { Home } from "../layout"
import { Blog, UseState, UseEffect, UseRef, PropsDrilling, UseContext, UseMemo } from "../pages/example";

export const targetPage = [
    {path: '/Home', label: 'Home', to: <Home />},
    {path: '/Blog', label: 'Blog',to: <Blog />},
    {path: '/useState', label: 'useState',to: <UseState />},
    {path: '/useEffect', label: 'useEffect',to: <UseEffect />},
    {path: '/useRef', label: 'useRef',to: <UseRef />},
    {path: '/propsDrilling', label: 'PropsDrilling',to: <PropsDrilling />},
    {path: '/useContext', label: 'useContext',to: <UseContext />},
    {path: '/useMemo', label: 'useMemo',to: <UseMemo />},
]