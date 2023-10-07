import "../styles/chessboard.css";
import { useEffect, useState } from "react";
import BoardSetup from "./BoardSetup";
import PromotionModal from "./PromotionModal";
import WinnerModal from "./WinnerModal";
import { addBoardState, loadBoardState, setBoardStateNum } from "../utils";
import ResetConfirmModal from "./ResetConfirmModal";

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
    

    const [br1, setBr1] = useState({x:0,y:0,size:62});
    const [bn1, setBn1] = useState({x:1,y:0,size:62});
    const [bb1, setBb1] = useState({x:2,y:0,size:62});
    const [bq, setBq] = useState({x:3,y:0,size:62});
    const [bk, setBk] = useState({x:4,y:0,size:62});
    const [bb2, setBb2] = useState({x:5,y:0,size:62});
    const [bn2, setBn2] = useState({x:6,y:0,size:62});
    const [br2, setBr2] = useState({x:7,y:0,size:62});
    const [bp1, setBp1] = useState({x:0,y:1,size:62});
    const [bp2, setBp2] = useState({x:1,y:1,size:62});
    const [bp3, setBp3] = useState({x:2,y:1,size:62});
    const [bp4, setBp4] = useState({x:3,y:1,size:62});
    const [bp5, setBp5] = useState({x:4,y:1,size:62});
    const [bp6, setBp6] = useState({x:5,y:1,size:62});
    const [bp7, setBp7] = useState({x:6,y:1,size:62});
    const [bp8, setBp8] = useState({x:7,y:1,size:62});

    const [wr1, setWr1] = useState({x:0,y:7,size:62});
    const [wn1, setWn1] = useState({x:1,y:7,size:62});
    const [wb1, setWb1] = useState({x:2,y:7,size:62});
    const [wq, setWq] = useState({x:3,y:7,size:62});
    const [wk, setWk] = useState({x:4,y:7,size:62});
    const [wb2, setWb2] = useState({x:5,y:7,size:62});
    const [wn2, setWn2] = useState({x:6,y:7,size:62});
    const [wr2, setWr2] = useState({x:7,y:7,size:62});
    const [wp1, setWp1] = useState({x:0,y:6,size:62});
    const [wp2, setWp2] = useState({x:1,y:6,size:62});
    const [wp3, setWp3] = useState({x:2,y:6,size:62});
    const [wp4, setWp4] = useState({x:3,y:6,size:62});
    const [wp5, setWp5] = useState({x:4,y:6,size:62});
    const [wp6, setWp6] = useState({x:5,y:6,size:62});
    const [wp7, setWp7] = useState({x:6,y:6,size:62});
    const [wp8, setWp8] = useState({x:7,y:6,size:62});

    const [bpc1, setBpc1] = useState('PAWN');
    const [bpc2, setBpc2] = useState('PAWN');
    const [bpc3, setBpc3] = useState('PAWN');
    const [bpc4, setBpc4] = useState('PAWN');
    const [bpc5, setBpc5] = useState('PAWN');
    const [bpc6, setBpc6] = useState('PAWN');
    const [bpc7, setBpc7] = useState('PAWN');
    const [bpc8, setBpc8] = useState('PAWN');
    const [wpc1, setWpc1] = useState('PAWN');
    const [wpc2, setWpc2] = useState('PAWN');
    const [wpc3, setWpc3] = useState('PAWN');
    const [wpc4, setWpc4] = useState('PAWN');
    const [wpc5, setWpc5] = useState('PAWN');
    const [wpc6, setWpc6] = useState('PAWN');
    const [wpc7, setWpc7] = useState('PAWN');
    const [wpc8, setWpc8] = useState('PAWN');

    const pieceCharacteristics = {br1, bn1, bb1, bq, bk, bb2, bn2, br2, bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8,
                              wr1, wn1, wb1, wq, wk, wb2, wn2, wr2, wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8};

    const setPieceCharacteristics = {'br1': setBr1, 'br2': setBr2, 'bn1': setBn1, 'bn2': setBn2, 'bb1': setBb1, 'bb2': setBb2, 'bq': setBq, 'bk': setBk, 
                                    'wr1': setWr1, 'wr2': setWr2, 'wn1': setWn1, 'wn2': setWn2, 'wb1': setWb1, 'wb2': setWb2, 'wq': setWq, 'wk': setWk, 
                                    'bp1': setBp1, 'bp2': setBp2, 'bp3': setBp3, 'bp4': setBp4, 'bp5': setBp5, 'bp6': setBp6, 'bp7': setBp7, 'bp8': setBp8,
                                    'wp1': setWp1, 'wp2': setWp2, 'wp3': setWp3, 'wp4': setWp4, 'wp5': setWp5, 'wp6': setWp6, 'wp7': setWp7, 'wp8': setWp8};

    const pawnCharacters = {bpc1, bpc2, bpc3, bpc4, bpc5, bpc6, bpc7, bpc8, wpc1, wpc2, wpc3, wpc4, wpc5, wpc6, wpc7, wpc8};

    const setPawnCharacters = {'bpc1': setBpc1, 'bpc2': setBpc2, 'bpc3': setBpc3, 'bpc4': setBpc4, 'bpc5': setBpc5, 'bpc6': setBpc6, 'bpc7': setBpc7, 'bpc8': setBpc8, 
                                'wpc1': setWpc1, 'wpc2': setWpc2, 'wpc3': setWpc3, 'wpc4': setWpc4, 'wpc5': setWpc5, 'wpc6': setWpc6, 'wpc7': setWpc7, 'wpc8': setWpc8};

    const [showPromotionModal, setShowPromotionModal] = useState(false);
    const [promotionx, setPromotionx] = useState(-1);
    const [promotiony, setPromotiony] = useState(-1);
    const [promotionkey, setPromotionkey] = useState('');
    
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

    const removedBlackPieceCoordinates = window.innerWidth > 550? [{x:0.15,y:8.3},{x:0.53,y:8.3},{x:0.91,y:8.3},{x:1.29,y:8.3},{x:1.67,y:8.3},{x:2.05,y:8.3},{x:2.43,y:8.3},{x:2.81,y:8.3},
                                        {x:3.19,y:8.3},{x:3.57,y:8.3},{x:3.95,y:8.3},{x:4.33,y:8.3},{x:4.71,y:8.3},{x:5.09,y:8.3},{x:5.47,y:8.3},{x:5.85,y:8.3}] : 
                                        [{x:0.2,y:8.5},{x:0.57,y:8.5},{x:0.94,y:8.5},{x:1.31,y:8.5},{x:1.68,y:8.5},{x:2.05,y:8.5},{x:2.42,y:8.5},{x:2.79,y:8.5},
                                        {x:3.16,y:8.5},{x:3.53,y:8.5},{x:3.9,y:8.5},{x:4.27,y:8.5},{x:4.64,y:8.5},{x:5.01,y:8.5},{x:5.38,y:8.5},{x:5.75,y:8.5}];
                                        
    const removedWhitePieceCoordinates = window.innerWidth > 550? [{x:7.35,y:-0.75},{x:6.97,y:-0.75},{x:6.59,y:-0.75},{x:6.21,y:-0.75},{x:5.83,y:-0.75},{x:5.45,y:-0.75},{x:5.07,y:-0.75},{x:4.69,y:-0.75},
                                        {x:4.31,y:-0.75},{x:3.93,y:-0.75},{x:3.55,y:-0.75},{x:3.17,y:-0.75},{x:2.79,y:-0.75},{x:2.41,y:-0.75},{x:2.03,y:-0.75},{x:1.65,y:-0.75}]:
                                        [{x:7.35,y:-0.8},{x:6.98,y:-0.8},{x:6.61,y:-0.8},{x:6.24,y:-0.8},{x:5.87,y:-0.8},{x:5.5,y:-0.8},{x:5.13,y:-0.8},{x:4.76,y:-0.8},
                                        {x:4.39,y:-0.8},{x:4.02,y:-0.8},{x:3.65,y:-0.8},{x:3.28,y:-0.8},{x:2.91,y:-0.8},{x:2.54,y:-0.8},{x:2.17,y:-0.8},{x:1.8,y:-0.8}];
    
    const [curRemovedWP, setCurRemovedWP] = useState(0);
    const [curRemovedBP, setCurRemovedBP] = useState(0);

    const [isLastBlackPawnDoubleMove, setIsLastBlackPawnDoubleMove] = useState(-1);
    const [isLastWhitePawnDoubleMove, setIsLastWhitePawnDoubleMove] = useState(-1);

    const [winner, setWinner] = useState(-1);
    const [showWinnerModal, setShowWinnerModal] = useState(false);

    const [showResetModal, setShowResetModal] = useState(false);

    const [curStateNum, setCurStateNum] = useState(0);
    const [totalStates, setTotalStates] = useState(1);
    // eslint-disable-next-line
    const [prevStates, setPrevStates] = useState([]);

    const totalTime = 5;
    // eslint-disable-next-line
    const incrementTime = 0;
    const [started, setStarted] = useState(true);
    // eslint-disable-next-line
    const [isPlayer1Move, setPlayer1Move] = useState(true);
    // eslint-disable-next-line
    const [player1Mins, setPlayer1Mins] = useState(totalTime);
    // eslint-disable-next-line
    const [player1Secs, setPlayer1Secs] = useState(0);
    // eslint-disable-next-line
    const [player2Mins, setPlayer2Mins] = useState(totalTime);
    // eslint-disable-next-line
    const [player2Secs, setPlayer2Secs] = useState(0);
    
    useEffect(() => {
        loadBoardState(setBoard, setPieceCharacteristics, setPawnCharacters, setCurrentPlayerWhite, setCurRemovedWP, setCurRemovedBP, setPrevStates, setCurStateNum, setTotalStates);
        // eslint-disable-next-line
    }, []);


    const checkCoordinates = (x,y) => {
        const smallScreen = window.innerWidth <= 550;
        if (smallScreen) 
            return {left: 37.2*x, top: 37.3*y};
        else 
            return {left: 62.2*x, top: 62.3*y};
    }

    const movePiece = (x, y, prevX, prevY, sym, stateAdded=false) => {
        // console.log(prevY, prevX, " ", y,x, " ", board[prevY][prevX], " ",board[y][x]);
        
        let tmp = board;
        const prevPiece = board[y][x];
        tmp[y][x] = board[prevY][prevX];
        if(tmp[y][x]==="BR1") {setBr1({...br1, x, y}); setBlackRook1Moved(true);}
        else if(tmp[y][x]==="BN1") setBn1({...bn1, x, y});
        else if(tmp[y][x]==="BB1") setBb1({...bb1, x, y});
        else if(tmp[y][x]==="BQ") setBq({...bq, x, y});
        else if(tmp[y][x]==="BK") {
            setBk({...bk, x, y}); setBlackKingMoved(true);
            if((x - prevX)===2) {
                setBr2({...br2, x:x-1, y});
                setBlackRook2Moved(true);
            }
            else if((prevX - x)===2) {
                setBr1({...br1, x:x+1, y});
                setBlackRook1Moved(true);
            }
        }
        else if(tmp[y][x]==="BB2") setBb2({...bb2, x, y});
        else if(tmp[y][x]==="BN2") setBn2({...bn2, x, y});
        else if(tmp[y][x]==="BR2") {setBr2({...br2, x, y}); setBlackRook2Moved(true);}

        else if(tmp[y][x]==="BP1" || tmp[y][x]==="BQP1" || tmp[y][x]==="BBP1" || tmp[y][x]==="BRP1" || tmp[y][x]==="BNP1") setBp1({...bp1, x, y});
        else if(tmp[y][x]==="BP2" || tmp[y][x]==="BQP2" || tmp[y][x]==="BBP2" || tmp[y][x]==="BRP2" || tmp[y][x]==="BNP2") setBp2({...bp2, x, y});
        else if(tmp[y][x]==="BP3" || tmp[y][x]==="BQP3" || tmp[y][x]==="BBP3" || tmp[y][x]==="BRP3" || tmp[y][x]==="BNP3") setBp3({...bp3, x, y});
        else if(tmp[y][x]==="BP4" || tmp[y][x]==="BQP4" || tmp[y][x]==="BBP4" || tmp[y][x]==="BRP4" || tmp[y][x]==="BNP4") setBp4({...bp4, x, y});
        else if(tmp[y][x]==="BP5" || tmp[y][x]==="BQP5" || tmp[y][x]==="BBP5" || tmp[y][x]==="BRP5" || tmp[y][x]==="BNP5") setBp5({...bp5, x, y});
        else if(tmp[y][x]==="BP6" || tmp[y][x]==="BQP6" || tmp[y][x]==="BBP6" || tmp[y][x]==="BRP6" || tmp[y][x]==="BNP6") setBp6({...bp6, x, y});
        else if(tmp[y][x]==="BP7" || tmp[y][x]==="BQP7" || tmp[y][x]==="BBP7" || tmp[y][x]==="BRP7" || tmp[y][x]==="BNP7") setBp7({...bp7, x, y});
        else if(tmp[y][x]==="BP8" || tmp[y][x]==="BQP8" || tmp[y][x]==="BBP8" || tmp[y][x]==="BRP8" || tmp[y][x]==="BNP8") setBp8({...bp8, x, y});

        else if(tmp[y][x]==="WR1") {setWr1({...wr1, x, y}); setWhiteRook1Moved(true);}
        else if(tmp[y][x]==="WN1") setWn1({...wn1, x, y});
        else if(tmp[y][x]==="WB1") setWb1({...wb1, x, y});
        else if(tmp[y][x]==="WQ") setWq({...wq, x, y});
        else if(tmp[y][x]==="WK") {
            setWk({...wk, x, y}); setWhiteKingMoved(true);
            if((x - prevX)===2) {
                setWr2({...wr2, x:x-1, y});
                setWhiteRook2Moved(true);
            }
            else if((prevX - x)===2) {
                setWr1({...wr1, x:x+1, y});
                setWhiteRook1Moved(true);
            }
        }
        else if(tmp[y][x]==="WB2") setWb2({...wb2, x, y});
        else if(tmp[y][x]==="WN2") setWn2({...wn2, x, y});
        else if(tmp[y][x]==="WR2") {setWr2({...wr2, x, y}); setWhiteRook2Moved(true);}

        else if(tmp[y][x]==="WP1" || tmp[y][x]==="WQP1" || tmp[y][x]==="WNP1" || tmp[y][x]==="WBP1" || tmp[y][x]==="WRP1") setWp1({...wp1, x, y});
        else if(tmp[y][x]==="WP2" || tmp[y][x]==="WQP2" || tmp[y][x]==="WNP2" || tmp[y][x]==="WBP2" || tmp[y][x]==="WRP2") setWp2({...wp2, x, y});
        else if(tmp[y][x]==="WP3" || tmp[y][x]==="WQP3" || tmp[y][x]==="WNP3" || tmp[y][x]==="WBP3" || tmp[y][x]==="WRP3") setWp3({...wp3, x, y});
        else if(tmp[y][x]==="WP4" || tmp[y][x]==="WQP4" || tmp[y][x]==="WNP4" || tmp[y][x]==="WBP4" || tmp[y][x]==="WRP4") setWp4({...wp4, x, y});
        else if(tmp[y][x]==="WP5" || tmp[y][x]==="WQP5" || tmp[y][x]==="WNP5" || tmp[y][x]==="WBP5" || tmp[y][x]==="WRP5") setWp5({...wp5, x, y});
        else if(tmp[y][x]==="WP6" || tmp[y][x]==="WQP6" || tmp[y][x]==="WNP6" || tmp[y][x]==="WBP6" || tmp[y][x]==="WRP6") setWp6({...wp6, x, y});
        else if(tmp[y][x]==="WP7" || tmp[y][x]==="WQP7" || tmp[y][x]==="WNP7" || tmp[y][x]==="WBP7" || tmp[y][x]==="WRP7") setWp7({...wp7, x, y});
        else if(tmp[y][x]==="WP8" || tmp[y][x]==="WQP8" || tmp[y][x]==="WNP8" || tmp[y][x]==="WBP8" || tmp[y][x]==="WRP8") setWp8({...wp8, x, y});
        tmp[prevY][prevX] = sym;
        
        // console.log(prevY, prevX, " ", y,x, " ", prevPiece, board[x][prevY]);
        // console.log(board);
        if (tmp[y][x][0]==='B' && tmp[y][x][1]==='P') {
            if ((y - prevY)===2) {
                setIsLastBlackPawnDoubleMove(x);
            } else {
                setIsLastBlackPawnDoubleMove(-1);
            }

            if (Math.abs(x - prevX)===1 && prevPiece===".") {
                removePiece(x, prevY, prevX, prevY, true);
                // removePiece(x, prevY);
                tmp[prevY][x] = ".";
                stateAdded = true;
            }
            
            if (y===7) {
                setPromotionx(y);
                setPromotiony(x);
                setShowPromotionModal(true);
                setPromotionkey((board[y][x].slice(0,2) + 'c' + board[y][x][2]).toLowerCase());
                stateAdded = true;
            }
            
        }
        else if (tmp[y][x][0]==='W' && tmp[y][x][1]==='P') {
            if ((prevY - y)===2) {
                setIsLastWhitePawnDoubleMove(x);
            } else {
                setIsLastWhitePawnDoubleMove(-1);
            }
            
            if (Math.abs(x - prevX)===1 && prevPiece===".") {
                removePiece(x, prevY, prevX, prevY, true);
                // removePiece(x, prevY);
                tmp[prevY][x] = "."
                stateAdded = true;
            }

            if (y===0) {
                setPromotionx(y);
                setPromotiony(x);
                setShowPromotionModal(true);
                setPromotionkey((board[y][x].slice(0,2) + 'c' + board[y][x][2]).toLowerCase());
                stateAdded = true;
            }
        } 
        else {
            setIsLastBlackPawnDoubleMove(-1);
            setIsLastWhitePawnDoubleMove(-1);
        }

        if (currentPlayerWhite) {
            let hasNotMoves = true;
            for (let i=0; i<8; i++) {
                for (let j=0; j<8; j++) {
                    if (board[i][j][0]==='B') {
                        if (hasMoves(i, j)) {
                            hasNotMoves = false;
                            break;
                        }
                    }
                }
                if (hasNotMoves===false) break;
            }

            if (hasNotMoves) {
                setWinner(1);
                setTimeout(() => setShowWinnerModal(true), 1000);
            }

        } else {
            let hasNotMoves = true;
            for (let i=0; i<8; i++) {
                for (let j=0; j<8; j++) {
                    if (board[i][j][0]==='W') {
                        if (hasMoves(i, j)) {
                            hasNotMoves = false;
                            break;
                        }
                    }
                }
                if (hasNotMoves===false) break;
            }

            if (hasNotMoves) {
                setWinner(0);
                setTimeout(() => setShowWinnerModal(true), 1000);
            }
        }

        document.getElementsByClassName(`${x}-${y}`)[0].classList.add('active');
        setHintPieceActive([x,y]);
        setBoard(tmp);
        setCurrentPlayerWhite(!currentPlayerWhite);
        
        // console.log(stateAdded);
        if (!stateAdded) {
            const pieceKey = (tmp[y][x].length <= 3? tmp[y][x] : tmp[y][x][0] + tmp[y][x].slice(2)).toLowerCase();
            addBoardState(tmp, {...pieceCharacteristics, [pieceKey]: {...pieceCharacteristics[pieceKey], x, y}}, pawnCharacters, !currentPlayerWhite, curRemovedWP, curRemovedBP, totalStates+1);
            setCurStateNum(prev => prev+1);
            setTotalStates(prev => prev+1);
            // console.log(tmp);
            // console.log({...pieceCharacteristics, [pieceKey]: {...pieceCharacteristics[pieceKey], x, y}});
        }
    }

    const removePiece = (x, y, prevx, prevy, enpassant=false) => {
    // const removePiece = (x, y) => {
        let tmp = getBoardCopy();
        if(tmp[y][x][0]==="B") {
            const left = removedBlackPieceCoordinates[curRemovedBP].x;
            const top = removedBlackPieceCoordinates[curRemovedBP].y;
            
            if(tmp[y][x]==="BR1") setBr1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BN1") setBn1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BB1") setBb1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BQ") {setBq({x: left, y: top, size: 30})}
            else if(tmp[y][x]==="BK") setBk({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BB2") setBb2({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BN2") setBn2({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BR2") setBr2({x: left, y: top, size: 30});
    
            else if(tmp[y][x]==="BP1" || tmp[y][x]==="BQP1" || tmp[y][x]==="BBP1" || tmp[y][x]==="BRP1" || tmp[y][x]==="BNP1") setBp1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP2" || tmp[y][x]==="BQP2" || tmp[y][x]==="BBP2" || tmp[y][x]==="BRP2" || tmp[y][x]==="BNP2") setBp2({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP3" || tmp[y][x]==="BQP3" || tmp[y][x]==="BBP3" || tmp[y][x]==="BRP3" || tmp[y][x]==="BNP3") setBp3({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP4" || tmp[y][x]==="BQP4" || tmp[y][x]==="BBP4" || tmp[y][x]==="BRP4" || tmp[y][x]==="BNP4") setBp4({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP5" || tmp[y][x]==="BQP5" || tmp[y][x]==="BBP5" || tmp[y][x]==="BRP5" || tmp[y][x]==="BNP5") setBp5({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP6" || tmp[y][x]==="BQP6" || tmp[y][x]==="BBP6" || tmp[y][x]==="BRP6" || tmp[y][x]==="BNP6") setBp6({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP7" || tmp[y][x]==="BQP7" || tmp[y][x]==="BBP7" || tmp[y][x]==="BRP7" || tmp[y][x]==="BNP7") setBp7({x: left, y: top, size: 30});
            else if(tmp[y][x]==="BP8" || tmp[y][x]==="BQP8" || tmp[y][x]==="BBP8" || tmp[y][x]==="BRP8" || tmp[y][x]==="BNP8") setBp8({x: left, y: top, size: 30});
            setCurRemovedBP(curRemovedBP + 1);

            const pieceKey1 = (tmp[y][x].length <= 3? tmp[y][x] : tmp[y][x][0] + tmp[y][x].slice(2)).toLowerCase();
            if (enpassant) {
                const pieceKey2 = (tmp[y-1][x].length <= 3? tmp[y-1][x] : tmp[y-1][x][0] + tmp[y-1][x].slice(2)).toLowerCase();;
                // console.log(y,x,tmp[y][x],prevy, prevx,tmp[prevy][prevx], y-1,x, tmp[y-1][x]);
                tmp[y][x] = ".";
                addBoardState(tmp, {...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y:y-1}}, pawnCharacters, !currentPlayerWhite, curRemovedWP, curRemovedBP+1, totalStates+1);
                // console.log(tmp);
                // console.log({...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y:y-1}});
            } else {
                const pieceKey2 = (tmp[prevy][prevx].length <= 3? tmp[prevy][prevx] : tmp[prevy][prevx][0] + tmp[prevy][prevx].slice(2)).toLowerCase();
                // console.log(y,x,prevy, prevx, tmp[prevy][prevx], tmp[y][x]);

                tmp[y][x] = tmp[prevy][prevx];
                tmp[prevy][prevx] = ".";
                
                addBoardState(tmp, {...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y}}, pawnCharacters, !currentPlayerWhite, curRemovedWP, curRemovedBP+1, totalStates+1);
                // console.log(tmp);
                // console.log({...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y}});
            }
        }
        else {
            const left = removedWhitePieceCoordinates[curRemovedWP].x;
            const top = removedWhitePieceCoordinates[curRemovedWP].y;
            if(tmp[y][x]==="WR1") setWr1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WN1") setWn1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WB1") setWb1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WQ") setWq({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WK") setWk({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WB2") setWb2({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WN2") setWn2({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WR2") setWr2({x: left, y: top, size: 30});
    
            else if(tmp[y][x]==="WP1" || tmp[y][x]==="WNP1" || tmp[y][x]==="WRP1" || tmp[y][x]==="WBP1" || tmp[y][x]==="WQP1") setWp1({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP2" || tmp[y][x]==="WNP2" || tmp[y][x]==="WRP2" || tmp[y][x]==="WBP2" || tmp[y][x]==="WQP2") setWp2({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP3" || tmp[y][x]==="WNP3" || tmp[y][x]==="WRP3" || tmp[y][x]==="WBP3" || tmp[y][x]==="WQP3") setWp3({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP4" || tmp[y][x]==="WNP4" || tmp[y][x]==="WRP4" || tmp[y][x]==="WBP4" || tmp[y][x]==="WQP4") setWp4({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP5" || tmp[y][x]==="WNP5" || tmp[y][x]==="WRP5" || tmp[y][x]==="WBP5" || tmp[y][x]==="WQP5") setWp5({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP6" || tmp[y][x]==="WNP6" || tmp[y][x]==="WRP6" || tmp[y][x]==="WBP6" || tmp[y][x]==="WQP6") setWp6({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP7" || tmp[y][x]==="WNP7" || tmp[y][x]==="WRP7" || tmp[y][x]==="WBP7" || tmp[y][x]==="WQP7") setWp7({x: left, y: top, size: 30});
            else if(tmp[y][x]==="WP8" || tmp[y][x]==="WNP8" || tmp[y][x]==="WRP8" || tmp[y][x]==="WBP8" || tmp[y][x]==="WQP8") setWp8({x: left, y: top, size: 30});
            setCurRemovedWP(curRemovedWP + 1);

            const pieceKey1 = (tmp[y][x].length <= 3? tmp[y][x] : tmp[y][x][0] + tmp[y][x].slice(2)).toLowerCase();
            if (enpassant) {
                const pieceKey2 = (tmp[y+1][x].length <= 3? tmp[y+1][x] : tmp[y+1][x][0] + tmp[y+1][x].slice(2)).toLowerCase();;
                // console.log(y,x,tmp[y][x],prevy, prevx,tmp[prevy][prevx], y+1,x, tmp[y+1][x]);
                tmp[y][x] = ".";
                addBoardState(tmp, {...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x:x, y:y+1}}, pawnCharacters, !currentPlayerWhite, curRemovedWP+1, curRemovedBP, totalStates+1);
                // console.log(tmp);
                // console.log({...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y:y+1}});
            } else {
                const pieceKey2 = (tmp[prevy][prevx].length <= 3? tmp[prevy][prevx] : tmp[prevy][prevx][0] + tmp[prevy][prevx].slice(2)).toLowerCase();
                tmp[y][x] = tmp[prevy][prevx];
                tmp[prevy][prevx] = ".";
                addBoardState(tmp, {...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y}}, pawnCharacters, !currentPlayerWhite, curRemovedWP+1, curRemovedBP, totalStates+1);
                // console.log(tmp);
                // console.log({...pieceCharacteristics, [pieceKey1]: {x: left, y: top, size: 30}, [pieceKey2]: {...pieceCharacteristics[pieceKey2], x, y}});
            }
        }
        setCurStateNum(prev => prev+1);
        setTotalStates(prev => prev+1);
    }

    const hasMoves = (y, x) => {
         
        const cur = board[y][x]; 
        const bkcoor = getCoordinates("BK");
        const wkcoor = getCoordinates("WK");
        const curkcoor = cur[0]==='B'? [...bkcoor] : [...wkcoor];
        // console.log(y, x, cur, curkcoor);

        if(["BR", "WR", "BQ", "WQ"].includes(cur.slice(0,2))) {
            let i = 1;
            while (i+y < 8) {
                if(board[i+y][x]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x, cur[0]))
                        return true;
                }
                else {
                    if(board[i+y][x][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x, cur[0]))
                        return true;
                }
                i += 1
            };
            i = 1;
            while (i+x < 8) {
                if(board[y][i+x]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x+i, cur[0]))
                        return true;
                }
                else {
                    if(board[y][i+x][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x+i, cur[0]))
                        return true;
                }
                i += 1
            };
            i = 1;
            while (x-i >= 0) {
                if(board[y][x-i]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x-i, cur[0]))
                        return true;
                }
                else {
                    if(board[y][x-i][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x-i, cur[0]))
                        return true;
                }
                i += 1
            };
            i = 1;
            while (y-i >= 0) {
                if(board[y-i][x]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x, cur[0]))
                        return true;
                }
                else {
                    if(board[y-i][x][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x, cur[0]))
                        return true;
                }
                i += 1
            };
        }
        
        else if (["BN", "WN"].includes(cur.slice(0,2))) {
            const dirs = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
            for (let l=0; l<8; l++) {
                const d = dirs[l];
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8)  {
                    if(board[j][i]==='.') {
                        if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, j, i, cur[0]))
                            return true;
                    }
                    else if (board[j][i][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, j, i, cur[0])) 
                        return true;
                }
            }
        } 

        if (["BB", "WB", "BQ", "WQ"].includes(cur.slice(0,2))) {
            let i = 1; let j = 1;
            while (y+i < 8 && x+j < 8) {
                if(board[y+i][x+j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x+j, cur[0]))
                        return true;
                }
                else {
                    if(board[y+i][x+j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x+j, cur[0]))
                        return true;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x-j >=0) {
                if(board[y-i][x-j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x-j, cur[0]))
                        return true;
                }
                else {
                    if(board[y-i][x-j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x-j, cur[0]))
                        return true;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x+j < 8) {
                if(board[y-i][x+j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x+j, cur[0]))
                        return true;
                }
                else {
                    if(board[y-i][x+j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x+j, cur[0]))
                        return true;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y+i < 8 && x-j >=0) {
                if(board[y+i][x-j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x-j, cur[0]))
                        return true;
                }
                else {
                    if(board[y+i][x-j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x-j, cur[0]))
                        return true;
                }
                i += 1; j += 1;
            };
        }

        else if (cur==="BK" || cur==="WK") {
            const dirs = [[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[-1,1],[1,-1]];
            for (let l=0; l<8; l++) {
                const d = dirs[l];
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8)  {
                    if(board[j][i]==='.') {
                        if (canPieceBeMoved(j, i, y, x, j, i, cur[0]))
                            return true;
                    }
                    else if (board[j][i][0]!==cur[0] && canPieceBeMoved(j, i, y, x, j, i, cur[0])) 
                        return true;
                }
            }
            if(cur==="BK" && !blackKingMoved) {
                const isKingSafe = isKingSafeAtPlace(board, y, x, 'B');
                if(!blackRook2Moved && isKingSafe) {
                    let i = x+1;
                    while(i < 7 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i += 1; }
                    if(i===7) {
                        return true;
                    }
                }
                if(!blackRook1Moved && isKingSafe) {
                    let i = x-1;
                    while(i > 0 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i -= 1; }
                    if(i===0) {
                        return true;
                    }
                }
            }
            if(cur==="WK" && !whiteKingMoved) {
                const isKingSafe = isKingSafeAtPlace(board, y, x, 'W');
                if(!whiteRook2Moved && isKingSafe) {
                    let i = x+1;
                    while(i < 7 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i += 1; }
                    if(i===7) {
                        return true;
                    }
                }
                if(!whiteRook1Moved && isKingSafe) {
                    let i = x-1;
                    while(i > 0 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i -= 1; }
                    if(i===0) {
                        return true;
                    }
                }
            }
        }
        
        else if (cur.slice(0,2)==="WP") { 
            if(y===6 && board[y-2][x]==="." && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-2, x, 'W')) {
                return true;
            } 
            if (y-1 >= 0) {
                if(board[y-1][x]==="." && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x, 'W'))
                    return true;
                if(x-1 >= 0 && board[y-1][x-1]!=="." && board[y-1][x-1][0]!==cur[0] && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x-1, 'W'))
                    return true;
                if(x+1 < 8 && board[y-1][x+1]!=="." && board[y-1][x+1][0]!==cur[0] && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x+1, 'W'))
                    return true;
            }
            if (y===3 && isLastBlackPawnDoubleMove===x-1 && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x-1, 'W')) {
                return true;
            }
            else if (y===3 && isLastBlackPawnDoubleMove===x+1 && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x+1, 'W')) {
                return true;
            }
        }

        else if (cur.slice(0,2)==="BP") { 

            if(y===1 && board[y+2][x]===".") {
                if (canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+2, x, 'B'))
                    return true;
            } 
            if (y+1 < 8) {
                if(board[y+1][x]==="." && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x, 'B'))
                    return true;
                if(x-1 >= 0 && board[y+1][x-1]!=="." && board[y+1][x-1][0]!==cur[0] && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x-1, 'B'))
                    return true;
                if(x+1 < 8 && board[y+1][x+1]!=="." && board[y+1][x+1][0]!==cur[0] && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x+1, 'B'))
                    return true;
            }
            if (y===4 && isLastWhitePawnDoubleMove===x-1 && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x-1, 'B')) {
                return true;
            }
            else if (y===4 && isLastWhitePawnDoubleMove===x+1 && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x+1, 'B')) {
                return true;
            }
        }

        return false;
    }

    const getCoordinates = (piece) => {
        for (let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
                if (board[i][j]===piece) {
                    return [i,j];
                }
            }
        }
        return [-1,-1];
    }

    const canPieceBeMovedUtil = (tmp, kcx, kcy, c, i, j, attacks) => {
        let kx = kcx + i, ky = kcy + j;
        let safe = true;
        const d = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
        const dk = [[1,0],[0,1],[-1,0],[0,-1],[-1,1],[1,-1],[1,1],[-1,-1]];

        if (c==='B') {
            if (kx >= 0 && kx < 8 && ky >= 0 && ky < 8 && tmp[kx][ky][0]==='W' && tmp[kx][ky][1]==='P' && (kx-kcx)===1 && Math.abs(ky-kcy)===1) {
                // console.log(kx, ky);
                return false;
            }
            for (let ind=0; ind<8; ind++) {
                const nx = kcx + d[ind][0], ny = kcy + d[ind][1];
                if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && tmp[nx][ny][0]==='W' && tmp[nx][ny][1]==='N') {
                    // console.log(nx, ny);
                    return false;
                }
            }
            for (let ind=0; ind<8; ind++) {
                const nx = kcx + dk[ind][0], ny = kcy + dk[ind][1];
                if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && tmp[nx][ny][0]==='W' && tmp[nx][ny][1]==='K') {
                    // console.log(nx, ny);
                    return false;
                }
            }
        } 

        if (c==='W') {
            if (kx >= 0 && kx < 8 && ky >= 0 && ky < 8 && tmp[kx][ky][0]==='B' && tmp[kx][ky][1]==='P' && (kx-kcx)===-1 && Math.abs(ky-kcy)===1) {
                // console.log(kx, ky);
                return false;
            }
            for (let ind=0; ind<8; ind++) {
                const nx = kcx + d[ind][0], ny = kcy + d[ind][1];
                if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && tmp[nx][ny][0]==='B' && tmp[nx][ny][1]==='N') {
                    // console.log(nx, ny);
                    return false;
                }
            }
            for (let ind=0; ind<8; ind++) {
                const nx = kcx + dk[ind][0], ny = kcy + dk[ind][1];
                if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && tmp[nx][ny][0]==='B' && tmp[nx][ny][1]==='K') {
                    // console.log(nx, ny);
                    return false;
                }
            }
        } 

        while (kx >= 0 && kx < 8 && ky >= 0 && ky < 8) {
            if (tmp[kx][ky][0]===c) 
                return true;
            if (tmp[kx][ky][0]!==".") {
                if (attacks.includes(tmp[kx][ky][1])) {
                    // console.log(kx, ky);
                    safe = false;
                }
                break;
            }
            kx += i; ky += j;
        }
        return safe;
    }

    const isKingSafeAtPlace = (tmp, kx, ky, c) => {
        // console.log(kx, ky);
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, 1, 0, ['R','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, 0, 1, ['R','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, -1, 0, ['R','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, 0, -1, ['R','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, 1, 1, ['B','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, 1, -1, ['B','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, -1, 1, ['B','Q']))
            return false;
        if (!canPieceBeMovedUtil(tmp, kx, ky, c, -1, -1, ['B','Q']))
            return false;
        return true;   
    }

    const getBoardCopy = () => {
        let tmp = [];
        for (let i=0; i<8; i++) {
            let r = [];
            for (let j=0; j<8; j++) {
                r.push(board[i][j]);
            }
            tmp.push([...r]);
        }
        return [...tmp];
    }

    // eslint-disable-next-line
    const printBoard = (tmp) => {
        for (let i=0; i<8; i++) {
            let r = [];
            for (let j=0; j<8; j++) {
                r.push(tmp[i][j]);
            }
            // console.log([...r]);
        }
    }
    

    const canPieceBeMoved = (kx, ky, x1, y1, x2, y2, c) => {
        const tmp = getBoardCopy();
        // console.log(kx, ky, x1, y1, x2, y2, c, board[x1][y1]);
        // console.log(board);
        tmp[x2][y2] = tmp[x1][y1];
        tmp[x1][y1] = ".";
        // printBoard(tmp);
        // console.log(tmp);
        const isKingSafe = isKingSafeAtPlace(tmp, kx, ky, c);
        // console.log(isKingSafe);
        return isKingSafe;
    }

    const handleHints = ({x, y}) => {
        
        let tmp = [];
        let tmpPieceInDanger = [];
        const cur = board[y][x];

        const bkcoor = getCoordinates("BK");
        const wkcoor = getCoordinates("WK");
        const curkcoor = cur[0]==='B'? [...bkcoor] : [...wkcoor];

        if(["BR", "WR", "BQ", "WQ"].includes(cur.slice(0,2))) {
            let i = 1;
            while (i+y < 8) {
                if(board[i+y][x]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x, cur[0]))
                        tmp.push([x,i+y]);
                }
                else {
                    if(board[i+y][x][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x, cur[0]))
                        tmpPieceInDanger.push([x,i+y]);
                    break;
                }
                i += 1
            };
            i = 1;
            while (i+x < 8) {
                if(board[y][i+x]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x+i, cur[0]))
                        tmp.push([i+x,y]);
                }
                else {
                    if(board[y][i+x][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x+i, cur[0]))
                        tmpPieceInDanger.push([i+x,y]);
                    break;
                }
                i += 1
            };
            i = 1;
            while (x-i >= 0) {
                if(board[y][x-i]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x-i, cur[0]))
                        tmp.push([x-i,y]);
                }
                else {
                    if(board[y][x-i][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y, x-i, cur[0]))
                        tmpPieceInDanger.push([x-i,y]);
                    break;
                }
                i += 1
            };
            i = 1;
            while (y-i >= 0) {
                if(board[y-i][x]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x, cur[0]))
                        tmp.push([x,y-i]);
                }
                else {
                    if(board[y-i][x][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x, cur[0]))
                        tmpPieceInDanger.push([x,y-i]);
                    break;
                }
                i += 1
            };
        }
        
        else if (["BN", "WN"].includes(cur.slice(0,2))) {
            const dirs = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
            dirs.forEach((d) => {
                const i = x+d[0];
                const j = y+d[1];
                if(i >= 0 && i < 8 && j >= 0 && j < 8)  {
                    if(board[j][i]==='.') {
                        if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, j, i, cur[0]))
                            tmp.push([i,j]);
                    }
                    else if (board[j][i][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, j, i, cur[0])) 
                        tmpPieceInDanger.push([i,j]);
                }
            });
        } 

        if (["BB", "WB", "BQ", "WQ"].includes(cur.slice(0,2))) {
            let i = 1; let j = 1;
            while (y+i < 8 && x+j < 8) {
                if(board[y+i][x+j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x+j, cur[0]))
                        tmp.push([x+j,i+y]);
                }
                else {
                    if(board[y+i][x+j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x+j, cur[0]))
                        tmpPieceInDanger.push([x+j,y+i]);
                    break;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x-j >=0) {
                if(board[y-i][x-j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x-j, cur[0]))
                        tmp.push([x-j,y-i]);
                }
                else {
                    if(board[y-i][x-j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x-j, cur[0]))
                        tmpPieceInDanger.push([x-j,y-i]);
                    break;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y-i >=0 && x+j < 8) {
                if(board[y-i][x+j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x+j, cur[0]))
                        tmp.push([x+j,y-i]);
                }
                else {
                    if(board[y-i][x+j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y-i, x+j, cur[0]))
                        tmpPieceInDanger.push([x+j,y-i]);
                    break;
                }
                i += 1; j += 1;
            };
            i = 1; j = 1;
            while (y+i < 8 && x-j >=0) {
                if(board[y+i][x-j]==='.') {
                    if (canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x-j, cur[0]))
                        tmp.push([x-j,i+y]);
                }
                else {
                    if(board[y+i][x-j][0]!==cur[0] && canPieceBeMoved(curkcoor[0], curkcoor[1], y, x, y+i, x-j, cur[0]))
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
                    if(board[j][i]==='.') {
                        if (canPieceBeMoved(j, i, y, x, j, i, cur[0]))
                            tmp.push([i,j]);
                    }
                    else if (board[j][i][0]!==cur[0] && canPieceBeMoved(j, i, y, x, j, i, cur[0])) 
                        tmpPieceInDanger.push([i,j]);
                }
            });
            if(cur==="BK" && !blackKingMoved) {
                const isKingSafe = isKingSafeAtPlace(board, y, x, 'B');
                if(!blackRook2Moved && isKingSafe) {
                    let i = x+1;
                    while(i < 7 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i += 1; }
                    if(i===7) {
                        tmp.push([x+2,y]);
                    }
                }
                if(!blackRook1Moved && isKingSafe) {
                    let i = x-1;
                    while(i > 0 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i -= 1; }
                    if(i===0) {
                        tmp.push([x-2,y]);
                    }
                }
            }
            if(cur==="WK" && !whiteKingMoved) {
                const isKingSafe = isKingSafeAtPlace(board, y, x, 'W');
                if(!whiteRook2Moved && isKingSafe) {
                    let i = x+1;
                    while(i < 7 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i += 1; }
                    if(i===7) {
                        tmp.push([x+2,y]);
                    }
                }
                if(!whiteRook1Moved && isKingSafe) {
                    let i = x-1;
                    while(i > 0 && board[y][i]==="." && canPieceBeMoved(y, i, y, x, y, i, cur[0])) { i -= 1; }
                    if(i===0) {
                        tmp.push([x-2,y]);
                    }
                }
            }
        }
        
        else if (cur.slice(0,2)==="WP") { 
            if(y===6 && board[y-2][x]==="." && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-2, x, 'W')) {
                tmp.push([x,y-2]);
            } 
            if (y-1 >= 0) {
                if(board[y-1][x]==="." && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x, 'W'))
                    tmp.push([x,y-1]);
                if(x-1 >= 0 && board[y-1][x-1]!=="." && board[y-1][x-1][0]!==cur[0] && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x-1, 'W'))
                    tmpPieceInDanger.push([x-1,y-1]);
                if(x+1 < 8 && board[y-1][x+1]!=="." && board[y-1][x+1][0]!==cur[0] && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x+1, 'W'))
                    tmpPieceInDanger.push([x+1,y-1]);
            }
            if (y===3 && x-1 >= 0 && isLastBlackPawnDoubleMove===x-1 && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x-1, 'W')) {
                tmp.push([x-1,y-1]);
            }
            else if (y===3 && x+1 < 8 && isLastBlackPawnDoubleMove===x+1 && canPieceBeMoved(wkcoor[0], wkcoor[1], y, x, y-1, x+1, 'W')) {
                tmp.push([x+1,y-1]);
            }
        }

        else if (cur.slice(0,2)==="BP") { 

            if(y===1 && board[y+2][x]===".") {
                if (canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+2, x, 'B'))
                    tmp.push([x,y+2]);
            } 
            if (y+1 < 8) {
                if(board[y+1][x]==="." && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x, 'B'))
                    tmp.push([x,y+1]);
                if(x-1 >= 0 && board[y+1][x-1]!=="." && board[y+1][x-1][0]!==cur[0] && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x-1, 'B'))
                    tmpPieceInDanger.push([x-1,y+1]);
                if(x+1 < 8 && board[y+1][x+1]!=="." && board[y+1][x+1][0]!==cur[0] && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x+1, 'B'))
                    tmpPieceInDanger.push([x+1,y+1]);
            }
            if (y===4 && x-1 >= 0 && isLastWhitePawnDoubleMove===x-1 && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x-1, 'B')) {
                tmp.push([x-1,y+1]);
            }
            else if (y===4 && x+1 < 8 && isLastWhitePawnDoubleMove===x+1 && canPieceBeMoved(bkcoor[0], bkcoor[1], y, x, y+1, x+1, 'B')) {
                tmp.push([x+1,y+1]);
            }
            // console.log(tmp);
        }

        setHints([...tmp]);
        setPieceInDanger([...tmpPieceInDanger]);
        tmpPieceInDanger.forEach((c) => {
            document.getElementsByClassName(`${c[0]}-${c[1]}`)[0].classList.add('danger');
        });
    }
    
    const handlePieceClick = ({x, y}) => {
        
        if(!started || winner!==-1 || curStateNum!==(totalStates-1)) return;

        // console.log(board);
        // console.log(pawnCharacters);
        // console.log(pieceCharacteristics);

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
            removePiece(x, y, prevActive[0], prevActive[1], false);
            // removePiece(x, y);
            movePiece(x, y, prevActive[0], prevActive[1], '.', true);
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

    
    return (
        <div id="main">

            {!started && <button className="start-btn" onClick={() => {setStarted(true)}}>Start</button>}

            {showWinnerModal && 
                <WinnerModal
                    winner={winner}
                    setShowWinnerModal={setShowWinnerModal}
                />
            }
            
            {showPromotionModal && 
                <PromotionModal 
                    x={promotionx} 
                    y={promotiony} 
                    color={board[promotionx][promotiony][0]}
                    setPawnCharacter={setPawnCharacters[promotionkey]}
                    board={board}
                    setBoard={setBoard}
                    setShowPromotionModal={setShowPromotionModal}
                    setPromotionx={setPromotionx}
                    setPromotiony={setPromotiony}
                />
            }

            {showResetModal && 
                <ResetConfirmModal setShowResetModal={setShowResetModal} />
            }

            { started && 
                <div id="chess-board">
                    <div id="player-1">
                        <div className="removed-pieces"></div>
                        <div className="time">
                            <div>{player1Mins < 10? "0" + player1Mins : player1Mins}:{player1Secs < 10? "0" + player1Secs : player1Secs}</div>
                        </div>
                    </div>
                    <BoardSetup
                        checkCoordinates={checkCoordinates} 
                        handlePieceClick={handlePieceClick}
                        hints={hints} 
                        prevActive={prevActive}
                        movePiece={movePiece}
                        setHints={setHints}
                        pieceInDanger={pieceInDanger}
                        setPieceInDanger={setPieceInDanger}
                        pieceCharacteristics={pieceCharacteristics}
                        pawnCharacters={pawnCharacters}
                    />
                    <div id="player-2">
                        <div className="time">
                        <div>{player2Mins < 10? "0" + player2Mins : player2Mins}:{player2Secs < 10? "0" + player2Secs : player2Secs}</div>
                        </div>
                        <div className="removed-pieces"></div>
                    </div>
                </div> 
            } 
            <div className="board-controls-div">
                <div className="reset-div">
                    <button className="control-btn reset-btn" onClick={() => setShowResetModal(true)}>
                        Reset 
                    </button>
                </div>

                <div className="controls-div">
                    <button className="control-btn prev-btn" onClick={() => {
                        setCurStateNum(prev => prev-1);
                        setBoardStateNum(curStateNum-1, setBoard, setPieceCharacteristics, setPawnCharacters);
                    }} disabled={curStateNum===0}>
                        <img src="/left.svg" alt="prev" /> 
                    </button>
                    <button className="control-btn next-btn" onClick={() => {
                        setCurStateNum(prev => prev+1);
                        setBoardStateNum(curStateNum+1, setBoard, setPieceCharacteristics, setPawnCharacters);
                    }} disabled={curStateNum===totalStates-1}>
                        <img src="/right.svg" alt="next" /> 
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChessBoard;