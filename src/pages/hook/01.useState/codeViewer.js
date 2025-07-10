const codeViewer = {
useState:
`React 내장 Hook (useState)
/**
 * 컴포넌트 내부에서 단순한 상태(state)를 관리할 때 사용되며, 상태를 변경하면 재랜더링 된다.
 *
 * const [첫번째 인자, 두번째 인자] = useState(초기값);
 * - 첫번째 인자 → 현재 상태값을 가져오는 역할 (ex. getter)
 * - 두번째 인자 → 상태를 변경하는 함수 (ex. setter)
 * - 초기값 → 필수
 *
 * 허용되는 초기값 (initialValue)
 * - 기본형 → ex. 0, '', true, null, undefined
 * - 객체   → ex. { name: 'Alice' }
 * - 배열   → ex. [], [1, 2, 3]
 * - 함수   → ex. () => console.log('hello')
 * - 심볼   → ex. Symbol('id')
 * - 클래스 인스턴스 → ex. new Date(), new MyClass()
 */
import { useState } from "react";
const [names, setNames] = useState(initialValue);
`,
}

export default codeViewer;