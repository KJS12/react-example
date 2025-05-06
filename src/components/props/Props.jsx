const Props = ({ name, age, isAdmin }) => {

    return (
        <div>
            <h1>안녕하세요, {name}님!</h1>
            <p>{age}</p>
            <p>{isAdmin ? "관리자" : "사용자"}</p>
        </div>
    );

}
export default Props;

