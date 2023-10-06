import React from 'react';
import "../styles/resetboard.css";
import { resetBoardState } from '../utils';

const ResetConfirmModal = ({ setShowResetModal }) => {
  return (
    <div className='reset-modal'>
        <div className='reset-confirm-div'>
            <div className='confirm-div'>
                <div className='reset-text'>
                    <p>Reset Board?</p>
                </div>
                <div className="btns-div">
                    <a href="/" className='yes-btn' onClick={resetBoardState}>
                        YES
                    </a>
                    <button className='no-btn' onClick={() => setShowResetModal(false)}>
                        NO
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetConfirmModal