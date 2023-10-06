import Box from "./Box";

const BoardRow = ({firstDark, number, cName, lastRow=false}) => {
    if(lastRow) {
        return (
            <div className={`chess-board-row ${cName}`}>
                <Box isDark={true} numberNotation={"1"} alphaNotation={"a"} cName={`0-${cName}`} />
                <Box isDark={false} alphaNotation={"b"} cName={`1-${cName}`} />
                <Box isDark={true} alphaNotation={"c"} cName={`2-${cName}`} />
                <Box isDark={false} alphaNotation={"d"} cName={`3-${cName}`} />
                <Box isDark={true} alphaNotation={"e"} cName={`4-${cName}`} />
                <Box isDark={false} alphaNotation={"f"} cName={`5-${cName}`} />
                <Box isDark={true} alphaNotation={"g"} cName={`6-${cName}`} />
                <Box isDark={false} alphaNotation={"h"} cName={`7-${cName}`} />
            </div>
        )
    }
    return (
        <div className={`chess-board-row ${cName}`}>
            <Box isDark={firstDark} numberNotation={number} cName={`0-${cName}`} />
            <Box isDark={!firstDark} cName={`1-${cName}`} />
            <Box isDark={firstDark} cName={`2-${cName}`} />
            <Box isDark={!firstDark} cName={`3-${cName}`} />
            <Box isDark={firstDark} cName={`4-${cName}`} />
            <Box isDark={!firstDark} cName={`5-${cName}`} />
            <Box isDark={firstDark} cName={`6-${cName}`} />
            <Box isDark={!firstDark} cName={`7-${cName}`} />
        </div>
    )
}

export default BoardRow;