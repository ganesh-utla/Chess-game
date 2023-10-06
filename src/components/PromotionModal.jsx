import React from 'react';
import "../styles/promotionmodal.css"

const PromotionModal = ({ x, y, color, setPawnCharacter, board, setBoard, setShowPromotionModal, setPromotionx, setPromotiony }) => {

    const d = {'QUEEN': 'Q', 'KNIGHT': 'N', 'ROOK': 'R', 'BISHOP': 'B'};

    const handlePromotion = (character) => {
        const tmp = [...board];
        setPawnCharacter(character);
        tmp[x][y] = color+d[character]+'P'+tmp[x][y][2];
        setBoard([...tmp]);
        setShowPromotionModal(false);
        setPromotionx(-1);
        setPromotiony(-1);

        if (localStorage.getItem('board-details')) {
            let boardDetails = JSON.parse(localStorage.getItem('board-details'));
            
            boardDetails['board'] = [...tmp];
            
            const piecekey = (color + 'p' + tmp[x][y][3]).toLowerCase();
            let pieceChar = boardDetails['pieceCharacteristics'];
            if (color==="W") pieceChar[piecekey] = {...pieceChar[piecekey], y: 0};
            else pieceChar[piecekey] = {...pieceChar[piecekey], y: 7};
            
            const pawnkey = (color + 'pc' + tmp[x][y][3]).toLowerCase();
            let pawnChar = boardDetails['pawnCharacters'];
            pawnChar[pawnkey] = character;

            boardDetails['currentPlayerWhite'] = color!=="W";

            console.log(boardDetails);
            localStorage.setItem('board-details', JSON.stringify(boardDetails));
        }
    }

  return (
    <div className='promotion-modal'>
        <div className='promotion-div'>
            {color==="W"? (
                <div className='promotion-pieces-div'>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("ROOK")}>
                        <img src="white-rook.png" alt="white-rook" className="promotion-piece" />
                    </div>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("KNIGHT")}>
                        <img src="white-knight.png" alt="white-knight" className="promotion-piece" />
                    </div>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("BISHOP")}>
                        <img src="white-bishop.png" alt="white-bishop" className="promotion-piece" />
                    </div>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("QUEEN")}>
                        <img src="white-queen.png" alt="white-queen" className="promotion-piece" />
                    </div>
                </div>
            ) : (
                <div className='promotion-pieces-div'>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("ROOK")}>
                        <img src="black-rook.png" alt="black-rook" className="promotion-piece" />
                    </div>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("KNIGHT")}>
                        <img src="black-knight.png" alt="black-knight" className="promotion-piece" />
                    </div>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("BISHOP")}>
                        <img src="black-bishop.png" alt="black-bishop" className="promotion-piece" />
                    </div>
                    <div className="promotion-piece-div" onClick={() => handlePromotion("QUEEN")}>
                        <img src="black-queen.png" alt="black-queen" className="promotion-piece" />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default PromotionModal;