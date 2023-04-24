import "../styles/chessboard.css";
import { useState } from "react";

const Box = ({cName, isDark=false, numberNotation=null, alphaNotation=null}) => {

    return (
        <div className={`chess-board-box ${isDark? "dark-square": "light-square"} ${cName}`} onClick={() => console.log(cName)}>
            {numberNotation && (
                <span className={`notation numberNotation ${isDark? "light-notation": "dark-notation"}`}>{numberNotation}</span>
            )}
            {alphaNotation && (
                <span className={`notation alphaNotation ${isDark? "light-notation": "dark-notation"}`}>{alphaNotation}</span>
            )}
        </div>
    )
}

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


const ChessBoard = () => {

    const [board, setBoard] = useState([
        ['BR1','BN1','BB1','BQ','BK','BB2','BN2','BR2'],
        ['BP1','BP2','BP3','BP4','BP5','BP6','BP7','BP8'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['WP1','WP2','WP3','WP4','WP5','WP6','WP7','WP8'],
        ['WR1','WN1','WB1','WQ','WK','WB2','WN2','WR2']
    ]);

    const [br1, setBr1] = useState({x:0,y:0});
    const [bn1, setBn1] = useState({x:1,y:0});
    const [bb1, setBb1] = useState({x:2,y:0});
    const [bq, setBq] = useState({x:3,y:0});
    const [bk, setBk] = useState({x:4,y:0});
    const [bb2, setBb2] = useState({x:5,y:0});
    const [bn2, setBn2] = useState({x:6,y:0});
    const [br2, setBr2] = useState({x:7,y:0});
    const [bp1, setBp1] = useState({x:0,y:1});
    const [bp2, setBp2] = useState({x:1,y:1});
    const [bp3, setBp3] = useState({x:2,y:1});
    const [bp4, setBp4] = useState({x:3,y:1});
    const [bp5, setBp5] = useState({x:4,y:1});
    const [bp6, setBp6] = useState({x:5,y:1});
    const [bp7, setBp7] = useState({x:6,y:1});
    const [bp8, setBp8] = useState({x:7,y:1});

    const [wr1, setWr1] = useState({x:0,y:7});
    const [wn1, setWn1] = useState({x:1,y:7});
    const [wb1, setWb1] = useState({x:2,y:7});
    const [wq, setWq] = useState({x:3,y:7});
    const [wk, setWk] = useState({x:4,y:7});
    const [wb2, setWb2] = useState({x:5,y:7});
    const [wn2, setWn2] = useState({x:6,y:7});
    const [wr2, setWr2] = useState({x:7,y:7});
    const [wp1, setWp1] = useState({x:0,y:6});
    const [wp2, setWp2] = useState({x:1,y:6});
    const [wp3, setWp3] = useState({x:2,y:6});
    const [wp4, setWp4] = useState({x:3,y:6});
    const [wp5, setWp5] = useState({x:4,y:6});
    const [wp6, setWp6] = useState({x:5,y:6});
    const [wp7, setWp7] = useState({x:6,y:6});
    const [wp8, setWp8] = useState({x:7,y:6});
    
    const [hints, setHints] = useState([]);
    const [prevActive, setPrevActive] = useState([-1,-1]);
    const [hintPieceActive, setHintPieceActive] = useState([-1,-1]);
    // const [pieceInDanger, setPieceInDanger] = useState([]);

    const checkCoordinates = (x,y) => {
        return {left: 62*x, top: 62*y};
    }

    const HintBox = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="hint-box" style={{top: r.top, left: r.left}} onClick={() => {
                // let tmp = [...board.map(r => [...r])];
                let tmp = board;
                setHints([]);
                tmp[y][x] = board[prevActive[1]][prevActive[0]];
                if(tmp[y][x]==="BR1") setBr1({x, y});
                else if(tmp[y][x]==="BN1") setBn1({x, y});
                else if(tmp[y][x]==="BB1") setBb1({x, y});
                else if(tmp[y][x]==="BQ") setBq({x, y});
                else if(tmp[y][x]==="BK") setBk({x, y});
                else if(tmp[y][x]==="BB2") setBb2({x, y});
                else if(tmp[y][x]==="BN2") setBn2({x, y});
                else if(tmp[y][x]==="BR2") setBr2({x, y});

                else if(tmp[y][x]==="BP1") setBp1({x, y});
                else if(tmp[y][x]==="BP2") setBp2({x, y});
                else if(tmp[y][x]==="BP3") setBp3({x, y});
                else if(tmp[y][x]==="BP4") setBp4({x, y});
                else if(tmp[y][x]==="BP5") setBp5({x, y});
                else if(tmp[y][x]==="BP6") setBp6({x, y});
                else if(tmp[y][x]==="BP7") setBp7({x, y});
                else if(tmp[y][x]==="BP8") setBp8({x, y});

                else if(tmp[y][x]==="WR1") setWr1({x, y});
                else if(tmp[y][x]==="WN1") setWn1({x, y});
                else if(tmp[y][x]==="WB1") setWb1({x, y});
                else if(tmp[y][x]==="WQ") setWq({x, y});
                else if(tmp[y][x]==="WK") setWk({x, y});
                else if(tmp[y][x]==="WB2") setWb2({x, y});
                else if(tmp[y][x]==="WN2") setWn2({x, y});
                else if(tmp[y][x]==="WR2") setWr2({x, y});

                else if(tmp[y][x]==="WP1") setWp1({x, y});
                else if(tmp[y][x]==="WP2") setWp2({x, y});
                else if(tmp[y][x]==="WP3") setWp3({x, y});
                else if(tmp[y][x]==="WP4") setWp4({x, y});
                else if(tmp[y][x]==="WP5") setWp5({x, y});
                else if(tmp[y][x]==="WP6") setWp6({x, y});
                else if(tmp[y][x]==="WP7") setWp7({x, y});
                else if(tmp[y][x]==="WP8") setWp8({x, y});
                
                tmp[prevActive[1]][prevActive[0]] = '.';
                setBoard(tmp);
                document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
                setHintPieceActive([x,y]);
                // console.log(tmp);
            }}>
                <div className="hint-box-dot"></div>
            </div>
        )
    }

    const handleHints = ({x, y}) => {
        let tmp = [];
        const cur = board[y][x];
        // console.log(x,y,cur);
        if(cur==="BR1" || cur==="WR1" || cur==="BR2" || cur==="WR2" || cur==="WQ" || cur==="BQ") {
            let i = 1;
            while (i+y < 8 && board[i+y][x]==='.') {
                tmp.push([x,i+y]);
                i += 1
            };
            i = 1;
            while (i+x < 8 && board[y][i+x]==='.') {
                tmp.push([i+x,y]);
                i += 1
            };
            i = 1;
            while (x-i >= 0 && board[y][x-i]==='.') {
                tmp.push([x-i,y]);
                i += 1
            };
            i = 1;
            while (y-i >= 0 && board[y-i][x]==='.') {
                tmp.push([x,y-i]);
                i += 1
            };
        }
        
        else if (cur==="BN1" || cur==="BN2" || cur==="WN1" || cur==="WN2") {
            const dirs = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
            dirs.forEach((d) => {
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8 && board[j][i]==='.') 
                    tmp.push([i,j]);
            });
        } 

        if(cur==="BB1" || cur==="WB1" || cur==="BB2" || cur==="WB2" || cur==="WQ" || cur==="BQ") {
            let i = 1; let j = 1;
            while (y+i < 8 && x+j < 8 && board[i+y][x+j]==='.') {
                tmp.push([x+j,i+y]);
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x-j >=0 && board[y-i][x-j]==='.') {
                tmp.push([x-j,y-i]);
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x+j < 8 && board[y-i][x+j]==='.') {
                tmp.push([x+j,y-i]);
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y+i < 8 && x-j >=0 && board[y+i][x-j]==='.') {
                tmp.push([x-j,y+i]);
                i += 1; j += 1;
            };
        }

        else if (cur==="BK" || cur==="WK") {
            const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
            dirs.forEach((d) => {
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8 && board[j][i]==='.') 
                    tmp.push([i,j]);
            })
        }
        
        else if (cur.slice(0,2)==="WP") {
            if(y===6 && board[y-2][x]===".") {
                tmp.push([x,y-2]);
            } 
            if (board[y-1][x]===".") {
                tmp.push([x,y-1]);
            }
        }

        else if (cur.slice(0,2)==="BP") {
            if(y===1 && board[y+2][x]===".") {
                tmp.push([x,y+2]);
            } 
            if (board[y+1][x]===".") {
                tmp.push([x,y+1]);
            }
        }


        setHints([...tmp]);
        // console.log(tmp);
    }
    
    const handlePieceClick = ({x, y}) => {
        if(hintPieceActive[0]!==-1) {
            document.getElementsByClassName(`${hintPieceActive[0]}-${hintPieceActive[1]}`)[0].classList.remove('active');
        }
        if(prevActive[0]===-1) {
            document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
            setPrevActive([x, y]);
            handleHints({x, y})
        } else {
            if(prevActive[0]===x && prevActive[1]===y) {
                document.getElementsByClassName(`${x}-${y}`)[0].classList.remove('active');
                setPrevActive([-1, -1]);
                setHints([]);
            } else {
                document.getElementsByClassName(`${prevActive[0]}-${prevActive[1]}`)[0].classList.remove('active');
                document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
                setPrevActive([x, y]);
                handleHints({x, y});
            }
        }
    }
    
    const BlackRook = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div rook" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-rook.png" alt="black-rook" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const BlackKnight = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-knight.png" alt="black-knight" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const BlackBishop = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-bishop.png" alt="black-bishop" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const BlackQueen = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="black-queen" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-queen.png" alt="black-queen" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const BlackKing = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="black-king" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-king.png" alt="black-king" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const BlackPawn = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="black-pawn-1" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-pawn.png" alt="black-pawn" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const WhiteRook = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div rook" id="white-rook-2" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-rook.png" alt="white-rook" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const WhiteKnight = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="white-knight-2" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-knight.png" alt="white-knight" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const WhiteBishop = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="white-bishop-2" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-bishop.png" alt="white-bishop" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const WhiteQueen = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="white-queen" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-queen.png" alt="white-queen" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const WhiteKing = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="white-king" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-king.png" alt="white-king" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    const WhitePawn = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" id="white-pawn-1" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-pawn.png" alt="white-pawn" style={{top: r.top, left: r.left}} className="chess-piece" />
            </div>
        )
    };
    
    
    return (
        <div id="chess-board">
            <div className="chess-board-div">
                <BoardRow firstDark={false} number={"8"} cName="0" />
                <BoardRow firstDark={true} number={"7"} cName="1" />
                <BoardRow firstDark={false} number={"6"} cName="2" />
                <BoardRow firstDark={true} number={"5"} cName="3" />
                <BoardRow firstDark={false} number={"4"} cName="4" />
                <BoardRow firstDark={true} number={"3"} cName="5" />
                <BoardRow firstDark={false} number={"2"} cName="6" />
                <BoardRow lastRow={true} cName="7" />

                <BlackRook x={br1.x} y={br1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackKnight x={bn1.x} y={bn1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackBishop x={bb1.x} y={bb1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackQueen x={bq.x} y={bq.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackKing x={bk.x} y={bk.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackBishop x={bb2.x} y={bb2.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackKnight x={bn2.x} y={bn2.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackRook x={br2.x} y={br2.y} prevActive={prevActive} setPrevActive={setPrevActive} />

                <BlackPawn x={bp1.x} y={bp1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp2.x} y={bp2.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp3.x} y={bp3.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp4.x} y={bp4.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp5.x} y={bp5.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp6.x} y={bp6.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp7.x} y={bp7.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <BlackPawn x={bp8.x} y={bp8.y} prevActive={prevActive} setPrevActive={setPrevActive} />                

                <WhitePawn x={wp1.x} y={wp1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp2.x} y={wp2.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp3.x} y={wp3.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp4.x} y={wp4.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp5.x} y={wp5.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp6.x} y={wp6.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp7.x} y={wp7.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhitePawn x={wp8.x} y={wp8.y} prevActive={prevActive} setPrevActive={setPrevActive} />

                <WhiteRook x={wr1.x} y={wr1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteKnight x={wn1.x} y={wn1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteBishop x={wb1.x} y={wb1.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteQueen x={wq.x} y={wq.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteKing x={wk.x} y={wk.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteBishop x={wb2.x} y={wb2.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteKnight x={wn2.x} y={wn2.y} prevActive={prevActive} setPrevActive={setPrevActive} />
                <WhiteRook x={wr2.x} y={wr2.y} prevActive={prevActive} setPrevActive={setPrevActive} />

                {hints.length > 0 && (
                    hints.map((coor, index) => (
                        <HintBox x={coor[0]} y={coor[1]} key={index} />
                    ))
                )}
            </div>
        </div>
    )
}

export default ChessBoard;