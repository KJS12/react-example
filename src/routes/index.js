

import { Home } from "../layout"
import { Parent, PropsDrilling } from "../pages/props";
import {
    UseState,
    UseEffect,
    UseRef,
    UseContext,
    UseMemo,
    UseCallback,
    UseReducer,
    ReactMemo,
    CustomHook,
    UseId,
    UseLayoutEffect,
    Debounce,
    Throttle,
} from "../pages/hook";
import { Blog, TodoList, } from "../pages/example";


/**
 * 하위메뉴 X
 * {
 *     path: '/example',
 *     label: 'example',
 *     to: <Exam1 />
 * },
 *
 * 하위메뉴 O
 * {
 *     path: '/example',
 *     label: 'example',
 *     children: [
 *         {path: 'exam1', label: 'exam1', to: <Exam1 />},
 *         {path: 'exam2', label: 'exam2', to: <Exam2 />},
 *     ],
 * },
*/
export const targetPage = [
    {
        path: '/',
        label: 'Home',
        to: <Home />
    },
    {
        path: '/props',
        label: 'Props',
        children: [
            {path: 'parent', label: 'Basic', to: <Parent />},
            {path: 'propsDrilling', label: 'PropsDrilling', to: <PropsDrilling />},
        ]
    },
    {
        path: '/hook',
        label: 'Hook',
        children: [
            {path: 'useState', label: 'useState', to: <UseState />},
            {path: 'useEffect', label: 'useEffect',to: <UseEffect />},
            {path: 'useRef', label: 'useRef', to: <UseRef />},
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
        path: '/example',
        label: 'example',
        children: [
            {path: 'blog', label: 'Blog', to: <Blog />},
            {path: 'todoList', label: 'TodoList', to: <TodoList />},
        ],
    },
]