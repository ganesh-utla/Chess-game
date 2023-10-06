const Box = ({cName, isDark=false, numberNotation=null, alphaNotation=null}) => {

    return (
        <div className={`chess-board-box ${isDark? "dark-square": "light-square"} ${cName}`}>
            {numberNotation && (
                <span className={`notation numberNotation ${isDark? "light-notation": "dark-notation"}`}>{numberNotation}</span>
            )}
            {alphaNotation && (
                <span className={`notation alphaNotation ${isDark? "light-notation": "dark-notation"}`}>{alphaNotation}</span>
            )}
        </div>
    )
}

export default Box;