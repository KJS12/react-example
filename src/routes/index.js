

import { Home } from "../layout"
import {
    Parent,
    UseState, UseEffect, UseRef,
    PropsDrilling, UseContext,
    UseMemo, UseCallback, UseReducer, ReactMemo,
    CustomHook, UseId, UseLayoutEffect,
    Debounce, Throttle,
    Blog, TodoList,
} from "../pages/example";

export const targetPage = [
    {
        path: '/',
        label: 'Home',
        to: <Home />
    },
    {
        path: '/props',
        label: 'Props',
        to: <Parent />
    },
    {
        path: '/hook',
        label: 'Hook',
        children: [
            {path: 'useState', label: 'useState', to: <UseState />},
            {path: 'useEffect', label: 'useEffect',to: <UseEffect />},
            {path: 'useRef', label: 'useRef', to: <UseRef />},
            {path: 'propsDrilling', label: 'PropsDrilling', to: <PropsDrilling />},
            {path: 'useContext', label: 'useContext', to: <UseContext />},
            {path: 'useMemo', label: 'useMemo', to: <UseMemo />},
            {path: 'useCallback', label: 'useCallback', to: <UseCallback />},
            {path: 'useReducer', label: 'useReducer', to: <UseReducer />},
            {path: 'reactMemo', label: 'React.memo', to: <ReactMemo />},
            {path: 'customHook', label: 'CustomHook', to: <CustomHook />},
            {path: 'useId', label: 'UseId', to: <UseId />},
            {path: 'useLayoutEffect', label: 'UseLayoutEffect', to: <UseLayoutEffect />},
            {path: 'debounce', label: 'Debounce', to: <Debounce />},
            {path: 'throttle', label: 'Throttle', to: <Throttle />},
        ],
    },
    {
        path: '/blog',
        label: 'Blog',
        to: <Blog />
    },
    {
        path: '/todoList',
        label: 'TodoList',
        to: <TodoList />
    },
]