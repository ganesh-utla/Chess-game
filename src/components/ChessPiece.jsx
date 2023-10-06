import React from 'react'

const ChessPiece = ({x, y, size=62, piece, color, handlePieceClick, checkCoordinates}) => {

    const smallScreen = window.innerWidth <= 550;
    if (smallScreen) {
        if (size===62) size = 37;
        else if (size===30) size = 15;
    } 

    const BlackRook = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-rook.png" alt="black-rook" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const BlackKnight = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-knight.png" alt="black-knight" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const BlackBishop = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-bishop.png" alt="black-bishop" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const BlackQueen = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-queen.png" alt="black-queen" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const BlackKing = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-king.png" alt="black-king" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const BlackPawn = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="black-pawn.png" alt="black-pawn" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const WhiteRook = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-rook.png" alt="white-rook" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const WhiteKnight = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-knight.png" alt="white-knight" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const WhiteBishop = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-bishop.png" alt="white-bishop" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const WhiteQueen = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-queen.png" alt="white-queen" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const WhiteKing = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-king.png" alt="white-king" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

    const WhitePawn = ({x, y}) => {
        const r = checkCoordinates(x, y);
        return (
            <div className="chess-piece-div" onClick={() => {handlePieceClick({x, y})}}>
                <img src="white-pawn.png" alt="white-pawn" style={{top: r.top, left: r.left, height: size, width: size}} className="chess-piece" />
            </div>
        )
    };

  if (piece==="ROOK") {
    if (color==="WHITE") return <WhiteRook x={x} y={y} />;
    else return <BlackRook x={x} y={y} />;
  }

  if (piece==="KNIGHT") {
    if (color==="WHITE") return <WhiteKnight x={x} y={y} />;
    else return <BlackKnight x={x} y={y} />;
  }

  if (piece==="BISHOP") {
    if (color==="WHITE") return <WhiteBishop x={x} y={y} />;
    else return <BlackBishop x={x} y={y} />;
  }

  if (piece==="QUEEN") {
    if (color==="WHITE") return <WhiteQueen x={x} y={y} />;
    else return <BlackQueen x={x} y={y} />;
  }

  if (piece==="KING") {
    if (color==="WHITE") return <WhiteKing x={x} y={y} />;
    else return <BlackKing x={x} y={y} />;
  }

  if (piece==="PAWN") {
    if (color==="WHITE") return <WhitePawn x={x} y={y} />;
    else return <BlackPawn x={x} y={y} />;
  }

  return <></>;
}

export default ChessPiece