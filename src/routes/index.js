

import { Home } from "../layout"
import { Parent, PropsChildren, PropsDrilling } from "../pages/props";
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
    UseImperativeHandle,
} from "../pages/hook";
import { Blog, TodoList, } from "../pages/example";


/**
 * 하위메뉴 X
 * {
 *     path: '/example',
 *     label: 'example',
 *     element: <Exam1 />
 * },
 *
 * 하위메뉴 O
 * {
 *     path: '/example',
 *     label: 'example',
 *     children: [
 *         {path: 'exam1', label: 'exam1', element: <Exam1 />},
 *         {path: 'exam2', label: 'exam2', element: <Exam2 />},
 *     ],
 * },
*/
export const targetPage = [
    {
        path: '/',
        label: 'Home',
        element: <Home />
    },
    {
        path: '/props',
        label: 'Props',
        children: [
            {path: 'parent', label: 'Basic', element: <Parent />},
            {path: 'propsDrilling', label: 'Drilling', element: <PropsDrilling />},
            {path: 'propsChildren', label: 'Children', element: <PropsChildren />},
        ]
    },
    {
        path: '/hook',
        label: 'Hook',
        children: [
            {path: 'useState', label: 'useState', element: <UseState />},
            {path: 'useEffect', label: 'useEffect',element: <UseEffect />},
            {path: 'useRef', label: 'useRef', element: <UseRef />},
            {path: 'useContext', label: 'useContext', element: <UseContext />},
            {path: 'useMemo', label: 'useMemo', element: <UseMemo />},
            {path: 'useCallback', label: 'useCallback', element: <UseCallback />},
            {path: 'useReducer', label: 'useReducer', element: <UseReducer />},
            {path: 'reactMemo', label: 'React.memo', element: <ReactMemo />},
            {path: 'customHook', label: 'CustomHook', element: <CustomHook />},
            {path: 'useId', label: 'UseId', element: <UseId />},
            {path: 'useLayoutEffect', label: 'UseLayoutEffect', element: <UseLayoutEffect />},
            {path: 'debounce', label: 'Debounce', element: <Debounce />},
            {path: 'throttle', label: 'Throttle', element: <Throttle />},
            {path: 'useImperativeHandle', label: 'UseImperativeHandle', element: <UseImperativeHandle />},
        ],
    },
    {
        path: '/example',
        label: 'example',
        children: [
            {path: 'blog', label: 'Blog', element: <Blog />},
            {path: 'todoList', label: 'TodoList', element: <TodoList />},
        ],
    },
]