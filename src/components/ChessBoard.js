import "../styles/chessboard.css";
import { useState } from "react";

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
    
    const [currentPlayerWhite, setCurrentPlayerWhite] = useState(true);
    const [hints, setHints] = useState([]);
    const [prevActive, setPrevActive] = useState([-1,-1]);
    const [hintPieceActive, setHintPieceActive] = useState([-1,-1]);
    const [pieceInDanger, setPieceInDanger] = useState([]);
    const [whiteKingMoved, setWhiteKingMoved] = useState(false);
    const [blackKingMoved, setBlackKingMoved] = useState(false);
    const [blackRook1Moved, setBlackRook1Moved] = useState(false);
    const [blackRook2Moved, setBlackRook2Moved] = useState(false);
    const [whiteRook1Moved, setWhiteRook1Moved] = useState(false);
    const [whiteRook2Moved, setWhiteRook2Moved] = useState(false);

    const removedBlackPieceCoordinates = [{x:0.3,y:8.3},{x:1,y:8.3},{x:1.7,y:8.3},{x:2.4,y:8.3},{x:3.1,y:8.3},{x:3.8,y:8.3},{x:4.5,y:8.3},{x:5.2,y:8.3},
                                        {x:0.3,y:9.3},{x:1,y:9.3},{x:1.7,y:9.3},{x:2.4,y:9.3},{x:3.1,y:9.3},{x:3.8,y:9.3},{x:4.5,y:9.3},{x:5.2,y:9.3}];
                                        
    const removedWhitePieceCoordinates = [{x:6.7,y:-1.3},{x:6.0,y:-1.3},{x:5.3,y:-1.3},{x:4.6,y:-1.3},{x:3.9,y:-1.3},{x:3.2,y:-1.3},{x:2.5,y:-1.3},{x:1.8,y:-1.3},
                                        {x:6.7,y:-2.3},{x:6.0,y:-2.3},{x:5.3,y:-2.3},{x:4.6,y:-2.3},{x:3.9,y:-2.3},{x:3.2,y:-2.3},{x:2.5,y:-2.3},{x:1.8,y:-2.3}];
    
    const [curRemovedWP, setCurRemovedWP] = useState(0);
    const [curRemovedBP, setCurRemovedBP] = useState(0);

    const totalTime = 10;
    const incrementTime = 0;
    const [started, setStarted] = useState(false);
    const [isPlayer1Move, setPlayer1Move] = useState(true);
    const [player1Mins, setPlayer1Mins] = useState(totalTime);
    const [player1Secs, setPlayer1Secs] = useState(0);
    const [player2Mins, setPlayer2Mins] = useState(totalTime);
    const [player2Secs, setPlayer2Secs] = useState(0);

    const checkCoordinates = (x,y) => {
        return {left: 62*x, top: 62*y};
    }

    const movePiece = (x, y, prevX, prevY, sym) => {
        let tmp = board;
        tmp[y][x] = board[prevY][prevX];
        if(tmp[y][x]==="BR1") {setBr1({x, y}); setBlackRook1Moved(true);}
        else if(tmp[y][x]==="BN1") setBn1({x, y});
        else if(tmp[y][x]==="BB1") setBb1({x, y});
        else if(tmp[y][x]==="BQ") setBq({x, y});
        else if(tmp[y][x]==="BK") {
            setBk({x, y}); setBlackKingMoved(true);
            if((x - prevX)===2) {
                setBr2({x:x-1, y});
                setBlackRook2Moved(true);
            }
            else if((prevX - x)===2) {
                setBr1({x:x+1, y});
                setBlackRook1Moved(true);
            }
        }
        else if(tmp[y][x]==="BB2") setBb2({x, y});
        else if(tmp[y][x]==="BN2") setBn2({x, y});
        else if(tmp[y][x]==="BR2") {setBr2({x, y}); setBlackRook2Moved(true);}

        else if(tmp[y][x]==="BP1") setBp1({x, y});
        else if(tmp[y][x]==="BP2") setBp2({x, y});
        else if(tmp[y][x]==="BP3") setBp3({x, y});
        else if(tmp[y][x]==="BP4") setBp4({x, y});
        else if(tmp[y][x]==="BP5") setBp5({x, y});
        else if(tmp[y][x]==="BP6") setBp6({x, y});
        else if(tmp[y][x]==="BP7") setBp7({x, y});
        else if(tmp[y][x]==="BP8") setBp8({x, y});

        else if(tmp[y][x]==="WR1") {setWr1({x, y}); setWhiteRook1Moved(true);}
        else if(tmp[y][x]==="WN1") setWn1({x, y});
        else if(tmp[y][x]==="WB1") setWb1({x, y});
        else if(tmp[y][x]==="WQ") setWq({x, y});
        else if(tmp[y][x]==="WK") {
            setWk({x, y}); setWhiteKingMoved(true);
            if((x - prevX)===2) {
                setWr2({x:x-1, y});
                setWhiteRook2Moved(true);
            }
            else if((prevX - x)===2) {
                setWr1({x:x+1, y});
                setWhiteRook1Moved(true);
            }
        }
        else if(tmp[y][x]==="WB2") setWb2({x, y});
        else if(tmp[y][x]==="WN2") setWn2({x, y});
        else if(tmp[y][x]==="WR2") {setWr2({x, y}); setWhiteRook2Moved(true);}

        else if(tmp[y][x]==="WP1") setWp1({x, y});
        else if(tmp[y][x]==="WP2") setWp2({x, y});
        else if(tmp[y][x]==="WP3") setWp3({x, y});
        else if(tmp[y][x]==="WP4") setWp4({x, y});
        else if(tmp[y][x]==="WP5") setWp5({x, y});
        else if(tmp[y][x]==="WP6") setWp6({x, y});
        else if(tmp[y][x]==="WP7") setWp7({x, y});
        else if(tmp[y][x]==="WP8") setWp8({x, y});
        tmp[prevY][prevX] = sym;
        document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
        setHintPieceActive([x,y]);
        setBoard(tmp);
        // setCurrentPlayerWhite(!currentPlayerWhite);
    }

    const removePiece = (x, y) => {
        let tmp = board;
        if(tmp[y][x][0]==="B") {
            const left = removedBlackPieceCoordinates[curRemovedBP].x;
            const top = removedBlackPieceCoordinates[curRemovedBP].y;
            // document.getElementById("black-queen").classList.add("removed-piece");
            if(tmp[y][x]==="BR1") setBr1({x: left, y: top});
            else if(tmp[y][x]==="BN1") setBn1({x: left, y: top});
            else if(tmp[y][x]==="BB1") setBb1({x: left, y: top});
            else if(tmp[y][x]==="BQ") {setBq({x: left, y: top})}
            else if(tmp[y][x]==="BK") setBk({x: left, y: top});
            else if(tmp[y][x]==="BB2") setBb2({x: left, y: top});
            else if(tmp[y][x]==="BN2") setBn2({x: left, y: top});
            else if(tmp[y][x]==="BR2") setBr2({x: left, y: top});
    
            else if(tmp[y][x]==="BP1") setBp1({x: left, y: top});
            else if(tmp[y][x]==="BP2") setBp2({x: left, y: top});
            else if(tmp[y][x]==="BP3") setBp3({x: left, y: top});
            else if(tmp[y][x]==="BP4") setBp4({x: left, y: top});
            else if(tmp[y][x]==="BP5") setBp5({x: left, y: top});
            else if(tmp[y][x]==="BP6") setBp6({x: left, y: top});
            else if(tmp[y][x]==="BP7") setBp7({x: left, y: top});
            else if(tmp[y][x]==="BP8") setBp8({x: left, y: top});
            setCurRemovedBP(curRemovedBP + 1);
        }
        else {
            const left = removedWhitePieceCoordinates[curRemovedWP].x;
            const top = removedWhitePieceCoordinates[curRemovedWP].y;
            if(tmp[y][x]==="WR1") setWr1({x: left, y: top});
            else if(tmp[y][x]==="WN1") setWn1({x: left, y: top});
            else if(tmp[y][x]==="WB1") setWb1({x: left, y: top});
            else if(tmp[y][x]==="WQ") setWq({x: left, y: top});
            else if(tmp[y][x]==="WK") setWk({x: left, y: top});
            else if(tmp[y][x]==="WB2") setWb2({x: left, y: top});
            else if(tmp[y][x]==="WN2") setWn2({x: left, y: top});
            else if(tmp[y][x]==="WR2") setWr2({x: left, y: top});
    
            else if(tmp[y][x]==="WP1") setWp1({x: left, y: top});
            else if(tmp[y][x]==="WP2") setWp2({x: left, y: top});
            else if(tmp[y][x]==="WP3") setWp3({x: left, y: top});
            else if(tmp[y][x]==="WP4") setWp4({x: left, y: top});
            else if(tmp[y][x]==="WP5") setWp5({x: left, y: top});
            else if(tmp[y][x]==="WP6") setWp6({x: left, y: top});
            else if(tmp[y][x]==="WP7") setWp7({x: left, y: top});
            else if(tmp[y][x]==="WP8") setWp8({x: left, y: top});
            setCurRemovedWP(curRemovedWP + 1);
        }
    }

    const HintBox = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="hint-box" style={{top: r.top, left: r.left}} onClick={() => {
                setHints([]);
                pieceInDanger.forEach((c) => {
                    document.getElementsByClassName(`${c[0]}-${c[1]}`)[0].classList.remove('danger');
                })
                setPieceInDanger([]);

                movePiece(x, y, prevActive[0], prevActive[1], '.');
            }}>
                <div className="hint-box-dot"></div>
            </div>
        )
    }

    const handleHints = ({x, y}) => {
        let tmp = [];
        let tmpPieceInDanger = [];
        const cur = board[y][x];
        if(cur==="BR1" || cur==="WR1" || cur==="BR2" || cur==="WR2" || cur==="WQ" || cur==="BQ") {
            let i = 1;
            while (i+y < 8) {
                if(board[i+y][x]==='.')
                    tmp.push([x,i+y]);
                else {
                    if(board[i+y][x][0]!==cur[0])
                        tmpPieceInDanger.push([x,i+y]);
                    break;
                }
                i += 1
            };
            i = 1;
            while (i+x < 8) {
                if(board[y][i+x]==='.')
                    tmp.push([i+x,y]);
                else {
                    if(board[y][i+x][0]!==cur[0])
                        tmpPieceInDanger.push([i+x,y]);
                    break;
                }
                i += 1
            };
            i = 1;
            while (x-i >= 0) {
                if(board[y][x-i]==='.')
                    tmp.push([x-i,y]);
                else {
                    if(board[y][x-i][0]!==cur[0])
                        tmpPieceInDanger.push([x-i,y]);
                    break;
                }
                i += 1
            };
            i = 1;
            while (y-i >= 0) {
                if(board[y-i][x]==='.')
                    tmp.push([x,y-i]);
                else {
                    if(board[y-i][x][0]!==cur[0])
                        tmpPieceInDanger.push([x,y-i]);
                    break;
                }
                i += 1
            };
        }
        
        else if (cur==="BN1" || cur==="BN2" || cur==="WN1" || cur==="WN2") {
            const dirs = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
            dirs.forEach((d) => {
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8)  {
                    if(board[j][i]==='.')
                        tmp.push([i,j]);
                    else if (board[j][i][0]!==cur[0]) 
                        tmpPieceInDanger.push([i,j]);
                }
            });
        } 

        if(cur==="BB1" || cur==="WB1" || cur==="BB2" || cur==="WB2" || cur==="WQ" || cur==="BQ") {
            let i = 1; let j = 1;
            while (y+i < 8 && x+j < 8) {
                if(board[y+i][x+j]==='.')
                    tmp.push([x+j,i+y]);
                else {
                    if(board[y+i][x+j][0]!==cur[0])
                        tmpPieceInDanger.push([x+j,y+i]);
                    break;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x-j >=0) {
                if(board[y-i][x-j]==='.')
                    tmp.push([x-j,y-i]);
                else {
                    if(board[y-i][x-j][0]!==cur[0])
                        tmpPieceInDanger.push([x-j,y-i]);
                    break;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x+j < 8) {
                if(board[y-i][x+j]==='.')
                    tmp.push([x+j,y-i]);
                else {
                    if(board[y-i][x+j][0]!==cur[0])
                        tmpPieceInDanger.push([x+j,y-i]);
                    break;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y+i < 8 && x-j >=0) {
                if(board[y+i][x-j]==='.')
                    tmp.push([x-j,i+y]);
                else {
                    if(board[y+i][x-j][0]!==cur[0])
                        tmpPieceInDanger.push([x-j,y+i]);
                    break;
                }
                i += 1; j += 1;
            };
        }

        else if (cur==="BK" || cur==="WK") {
            const dirs = [[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[-1,1],[1,-1]];
            dirs.forEach((d) => {
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8)  {
                    if(board[j][i]==='.')
                        tmp.push([i,j]);
                    else if (board[j][i][0]!==cur[0]) 
                        tmpPieceInDanger.push([i,j]);
                }
            });
            if(cur==="BK" && !blackKingMoved) {
                if(!blackRook2Moved) {
                    let i = x+1;
                    while(i < 7 && board[y][i]===".") { i += 1; }
                    if(i===7) {
                        tmp.push([x+2,y]);
                    }
                }
                if(!blackRook1Moved) {
                    let i = x-1;
                    while(i > 0 && board[y][i]===".") { i -= 1; }
                    if(i===0) {
                        tmp.push([x-2,y]);
                    }
                }
            }
            if(cur==="WK" && !whiteKingMoved) {
                if(!whiteRook2Moved) {
                    let i = x+1;
                    while(i < 7 && board[y][i]===".") { i += 1; }
                    if(i===7) {
                        tmp.push([x+2,y]);
                    }
                }
                if(!whiteRook1Moved) {
                    let i = x-1;
                    while(i > 0 && board[y][i]===".") { i -= 1; }
                    if(i===0) {
                        tmp.push([x-2,y]);
                    }
                }
            }
        }
        
        else if (cur.slice(0,2)==="WP") {
            if(y===6 && board[y-2][x]===".") {
                tmp.push([x,y-2]);
            } 
            if (y-1 >= 0) {
                if(board[y-1][x]===".")
                    tmp.push([x,y-1]);
                if(x-1 >= 0 && board[y-1][x-1]!=="." && board[y-1][x-1][0]!==cur[0])
                    tmpPieceInDanger.push([x-1,y-1]);
                if(x+1 < 8 && board[y-1][x+1]!=="." && board[y-1][x+1][0]!==cur[0])
                    tmpPieceInDanger.push([x+1,y-1]);
            }
        }

        else if (cur.slice(0,2)==="BP") {
            if(y===1 && board[y+2][x]===".") {
                tmp.push([x,y+2]);
            } 
            if (y+1 < 8) {
                if(board[y+1][x]===".")
                    tmp.push([x,y+1]);
                if(x-1 >= 0 && board[y+1][x-1]!=="." && board[y+1][x-1][0]!==cur[0])
                    tmpPieceInDanger.push([x-1,y+1]);
                if(x+1 < 8 && board[y+1][x+1]!=="." && board[y+1][x+1][0]!==cur[0])
                    tmpPieceInDanger.push([x+1,y+1]);
            }
        }

        setHints([...tmp]);
        setPieceInDanger([...tmpPieceInDanger]);
        tmpPieceInDanger.forEach((c) => {
            document.getElementsByClassName(`${c[0]}-${c[1]}`)[0].classList.add('danger');
        });

    }
    
    const handlePieceClick = ({x, y}) => {
        if(!started) return;

        if(hintPieceActive[0]!==-1) {
            document.getElementsByClassName(`${hintPieceActive[0]}-${hintPieceActive[1]}`)[0].classList.remove('active');
        }

        let dangerPiece = false;
        for (let index = 0; index < pieceInDanger.length; index++) {
            if(pieceInDanger[index][0]===x && pieceInDanger[index][1]===y) {
                dangerPiece = true;
                break;
            }
        }

        if(dangerPiece) {
            
            setHints([]);
            pieceInDanger.forEach((c) => {
                document.getElementsByClassName(`${c[0]}-${c[1]}`)[0].classList.remove('danger');
            })
            setPieceInDanger([]);
            removePiece(x, y);
            movePiece(x, y, prevActive[0], prevActive[1], '.');
        }

        else {
            if(prevActive[0]===-1) {
                document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
                setPrevActive([x, y]);
                if((currentPlayerWhite && board[y][x][0]==="B") || (!currentPlayerWhite && board[y][x][0]==="W"))
                    setHints([]);
                else handleHints({x, y});
            } else {
                pieceInDanger.forEach((c) => {
                    document.getElementsByClassName(`${c[0]}-${c[1]}`)[0].classList.remove('danger');
                })
                setPieceInDanger([]);
    
                if(prevActive[0]===x && prevActive[1]===y) {
                    document.getElementsByClassName(`${x}-${y}`)[0].classList.remove('active');
                    setPrevActive([-1, -1]);
                    setHints([]);
                } else {
                    document.getElementsByClassName(`${prevActive[0]}-${prevActive[1]}`)[0].classList.remove('active');
                    document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
                    setPrevActive([x, y]);
                    if((currentPlayerWhite && board[y][x][0]==="B") || (!currentPlayerWhite && board[y][x][0]==="W")) 
                        setHints([]);
                    else handleHints({x, y});
                }
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
        <div id="main">

            {!started && <button className="start-btn" onClick={() => {setStarted(true)}}>Start</button>}

            { started && <div id="chess-board">
                <div id="player-1">
                    <div className="removed-pieces"></div>
                    <div className="time">
                        <div>{player1Mins < 10? "0" + player1Mins : player1Mins}:{player1Secs < 10? "0" + player1Secs : player1Secs}</div>
                    </div>
                </div>
                <div id="player-2">
                    <div className="time">
                    <div>{player2Mins < 10? "0" + player2Mins : player2Mins}:{player2Secs < 10? "0" + player2Secs : player2Secs}</div>
                    </div>
                    <div className="removed-pieces"></div>
                </div>
                <div className="chess-board-div">
                    <BoardRow firstDark={false} number={"8"} cName="0" />
                    <BoardRow firstDark={true} number={"7"} cName="1" />
                    <BoardRow firstDark={false} number={"6"} cName="2" />
                    <BoardRow firstDark={true} number={"5"} cName="3" />
                    <BoardRow firstDark={false} number={"4"} cName="4" />
                    <BoardRow firstDark={true} number={"3"} cName="5" />
                    <BoardRow firstDark={false} number={"2"} cName="6" />
                    <BoardRow lastRow={true} cName="7" />

                    <BlackRook x={br1.x} y={br1.y} />
                    <BlackKnight x={bn1.x} y={bn1.y} />
                    <BlackBishop x={bb1.x} y={bb1.y} />
                    <BlackQueen x={bq.x} y={bq.y} />
                    <BlackKing x={bk.x} y={bk.y} />
                    <BlackBishop x={bb2.x} y={bb2.y} />
                    <BlackKnight x={bn2.x} y={bn2.y} />
                    <BlackRook x={br2.x} y={br2.y} />

                    <BlackPawn x={bp1.x} y={bp1.y} />
                    <BlackPawn x={bp2.x} y={bp2.y} />
                    <BlackPawn x={bp3.x} y={bp3.y} />
                    <BlackPawn x={bp4.x} y={bp4.y} />
                    <BlackPawn x={bp5.x} y={bp5.y} />
                    <BlackPawn x={bp6.x} y={bp6.y} />
                    <BlackPawn x={bp7.x} y={bp7.y} />
                    <BlackPawn x={bp8.x} y={bp8.y} />                

                    <WhitePawn x={wp1.x} y={wp1.y} />
                    <WhitePawn x={wp2.x} y={wp2.y} />
                    <WhitePawn x={wp3.x} y={wp3.y} />
                    <WhitePawn x={wp4.x} y={wp4.y} />
                    <WhitePawn x={wp5.x} y={wp5.y} />
                    <WhitePawn x={wp6.x} y={wp6.y} />
                    <WhitePawn x={wp7.x} y={wp7.y} />
                    <WhitePawn x={wp8.x} y={wp8.y} />

                    <WhiteRook x={wr1.x} y={wr1.y} />
                    <WhiteKnight x={wn1.x} y={wn1.y} />
                    <WhiteBishop x={wb1.x} y={wb1.y} />
                    <WhiteQueen x={wq.x} y={wq.y} />
                    <WhiteKing x={wk.x} y={wk.y} />
                    <WhiteBishop x={wb2.x} y={wb2.y} />
                    <WhiteKnight x={wn2.x} y={wn2.y} />
                    <WhiteRook x={wr2.x} y={wr2.y} />

                    {hints.length > 0 && (
                        hints.map((coor, index) => (
                            <HintBox x={coor[0]} y={coor[1]} key={index} />
                        ))
                    )}
                </div>
            </div> } 
        </div>
    )
}

export default ChessBoard;