import React from 'react'
import "../styles/winnermodal.css"

const WinnerModal = ({ winner, setShowWinnerModal }) => {
  return (
    <div className='winner-modal'>
        <div className='winner-div'>
            <div className='close-div'>
                <div className="close-button-div">
                    <img src="close-button.png" alt="close" className='close-button' onClick={() => setShowWinnerModal(false)}/>
                </div>
            </div>
            {winner===1? (
                <div className='winner-player-div'>
                    <div className="winner-king-div">
                        <img src="white-king.png" alt="white-king" className="winner-piece" />
                    </div>
                    <div className='winner-text'>
                        <p>White Wins!!</p>
                    </div>
                </div>
            ) : (
                <div className='winner-player-div'>
                    <div className="winner-king-div">
                        <img src="black-king.png" alt="black-king" className="winner-piece" />
                    </div>
                    <div className='winner-text'>
                        <p>Black Wins!!</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default WinnerModal;