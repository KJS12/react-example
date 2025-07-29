const Section = ({ children }) => {
    return <>{ children }</>
}

const SectionBasic = ({ children }) => {
    return (
        <>
            <hr className="border-t-4 border-indigo-100 my-6"/>
            { children }
        </>
    )
}

const SectionDashed = ({ children }) => {
    return (
        <>
            <hr className="border-t-4 border-indigo-100 my-6 border-dashed"/>
            { children }
        </>
    )
}

Section.Basic = SectionBasic;
Section.Dashed = SectionDashed;

export default Section;