import React from 'react'
import BoardRow from './BoardRow';
import ChessPiece from './ChessPiece';
import HintBox from './HintBox';

const BoardSetup = ({checkCoordinates, handlePieceClick, hints, prevActive, movePiece, setHints, pieceInDanger, setPieceInDanger, pieceCharacteristics, pawnCharacters}) => {

    const pc = pieceCharacteristics;

  return (
    <div className="chess-board-div">
        <BoardRow firstDark={false} number={"8"} cName="0" />
        <BoardRow firstDark={true} number={"7"} cName="1" />
        <BoardRow firstDark={false} number={"6"} cName="2" />
        <BoardRow firstDark={true} number={"5"} cName="3" />
        <BoardRow firstDark={false} number={"4"} cName="4" />
        <BoardRow firstDark={true} number={"3"} cName="5" />
        <BoardRow firstDark={false} number={"2"} cName="6" />
        <BoardRow lastRow={true} cName="7" />

        <ChessPiece x={pc['br1'].x} y={pc['br1'].y} size={pc['br1'].size} piece="ROOK" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
        
        <ChessPiece x={pc['bn1'].x} y={pc['bn1'].y} size={pc['bn1'].size} piece="KNIGHT" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bb1'].x} y={pc['bb1'].y} size={pc['bb1'].size} piece="BISHOP" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bq'].x} y={pc['bq'].y} size={pc['bq'].size} piece="QUEEN" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bk'].x} y={pc['bk'].y} size={pc['bk'].size} piece="KING" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bb2'].x} y={pc['bb2'].y} size={pc['bb2'].size} piece="BISHOP" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bn2'].x} y={pc['bn2'].y} size={pc['bn2'].size} piece="KNIGHT" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['br2'].x} y={pc['br2'].y} size={pc['br2'].size} piece="ROOK" color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bp1'].x} y={pc['bp1'].y} size={pc['bp1'].size} piece={pawnCharacters['bpc1']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bp2'].x} y={pc['bp2'].y} size={pc['bp2'].size} piece={pawnCharacters['bpc2']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />

        <ChessPiece x={pc['bp3'].x} y={pc['bp3'].y} size={pc['bp3'].size} piece={pawnCharacters['bpc3']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['bp4'].x} y={pc['bp4'].y} size={pc['bp4'].size} piece={pawnCharacters['bpc4']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['bp5'].x} y={pc['bp5'].y} size={pc['bp5'].size} piece={pawnCharacters['bpc5']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['bp6'].x} y={pc['bp6'].y} size={pc['bp6'].size} piece={pawnCharacters['bpc6']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['bp7'].x} y={pc['bp7'].y} size={pc['bp7'].size} piece={pawnCharacters['bpc7']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['bp8'].x} y={pc['bp8'].y} size={pc['bp8'].size} piece={pawnCharacters['bpc8']} color="BLACK" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            

        <ChessPiece x={pc['wp1'].x} y={pc['wp1'].y} size={pc['wp1'].size} piece={pawnCharacters['wpc1']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp2'].x} y={pc['wp2'].y} size={pc['wp2'].size} piece={pawnCharacters['wpc2']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp3'].x} y={pc['wp3'].y} size={pc['wp3'].size} piece={pawnCharacters['wpc3']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp4'].x} y={pc['wp4'].y} size={pc['wp4'].size} piece={pawnCharacters['wpc4']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp5'].x} y={pc['wp5'].y} size={pc['wp5'].size} piece={pawnCharacters['wpc5']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp6'].x} y={pc['wp6'].y} size={pc['wp6'].size} piece={pawnCharacters['wpc6']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp7'].x} y={pc['wp7'].y} size={pc['wp7'].size} piece={pawnCharacters['wpc7']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wp8'].x} y={pc['wp8'].y} size={pc['wp8'].size} piece={pawnCharacters['wpc8']} color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            

        <ChessPiece x={pc['wr1'].x} y={pc['wr1'].y} size={pc['wr1'].size} piece="ROOK" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wn1'].x} y={pc['wn1'].y} size={pc['wn1'].size} piece="KNIGHT" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wb1'].x} y={pc['wb1'].y} size={pc['wb1'].size} piece="BISHOP" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wq'].x} y={pc['wq'].y} size={pc['wq'].size} piece="QUEEN" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wk'].x} y={pc['wk'].y} size={pc['wk'].size} piece="KING" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wb2'].x} y={pc['wb2'].y} size={pc['wb2'].size} piece="BISHOP" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wn2'].x} y={pc['wn2'].y} size={pc['wn2'].size} piece="KNIGHT" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            
        <ChessPiece x={pc['wr2'].x} y={pc['wr2'].y} size={pc['wr2'].size} piece="ROOK" color="WHITE" 
            checkCoordinates={checkCoordinates} handlePieceClick={handlePieceClick} />
            

        {hints.length > 0 && (
            hints.map((coor, index) => (
                <HintBox x={coor[0]} y={coor[1]} key={index}
                    prevActive={prevActive} checkCoordinates={checkCoordinates}
                    setHints={setHints} pieceInDanger={pieceInDanger}
                    movePiece={movePiece} setPieceInDanger={setPieceInDanger}
                    />
            ))
        )}
    </div>
  )
}

export default BoardSetup;