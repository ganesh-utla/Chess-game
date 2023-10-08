import React, { useState } from 'react';
import "../styles/timermodal.css";

const TimerModal = ({setPlayer1Mins, setPlayer1Secs, setPlayer2Mins, setPlayer2Secs, setIncrementTime, setShowTimerModal, setIsNoTimerSelected}) => {

    const [isTimerSelected, setIsTimerSelected] = useState(true);
    const [curMin, setCurMin] = useState(10);
    const [curSec, setCurSec] = useState(0);
    const [curInc, setCurInc] = useState(2);

  return (
    <div className='timer-modal'>
        <div className='timermodal-div'>
            <div className='close-div'>
                <div className="close-button-div">
                    <img src="close-button.png" alt="close" className='close-button' onClick={() => setShowTimerModal(false)}/>
                </div>
            </div>

            <div className='timer-options-div'>
                <div className='timer-option-control' 
                    style={{backgroundColor: isTimerSelected? "#5f5f5f" : "transparent", color: isTimerSelected? "#ddd" : "#000"}}
                    onClick={() => setIsTimerSelected(true)}
                >
                    Timer
                </div>
                <div className='timer-option-control' 
                    style={{backgroundColor: !isTimerSelected? "#5f5f5f" : "transparent", color: !isTimerSelected? "#ddd" : "#000"}}
                    onClick={() => setIsTimerSelected(false)}
                >
                    No Timer
                </div>
            </div>

            {isTimerSelected && 
            <div className='timer-selected-div'>
                <div className='heading'>
                    <p>Set Timer</p>
                </div>

                <div className='timer-details'>
                    <div className='timer-detail-div'>
                        <p className='head'>
                            Minutes
                        </p>
                        <input 
                            className='time-input'
                            type="number"
                            min={0}
                            max={59}
                            value={curMin}
                            onChange={(e) => setCurMin(e.target.value)}
                            />
                    </div>
                    <div className='timer-detail-div'>
                        <p className='head'>
                            Seconds
                        </p>
                        <input 
                            className='time-input'
                            type="number"
                            min={1}
                            max={90}
                            value={curSec}
                            onChange={(e) => setCurSec(e.target.value)}
                        />
                    </div>
                    <div className='timer-detail-div'>
                        <p className='head'>
                            Increment
                        </p>
                        <input 
                            className='time-input'
                            type="number"
                            min={0}
                            max={30}
                            value={curInc}
                            onChange={(e) => setCurInc(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            }
            <div className='save-button-div' onClick={() => {
                if (isTimerSelected) {
                    setPlayer1Mins(Number(curMin));
                    setPlayer2Mins(Number(curMin));
                    setPlayer1Secs(Number(curSec));
                    setPlayer2Secs(Number(curSec));
                    setIncrementTime(Number(curInc));
                    setIsNoTimerSelected(false);
                } else {
                    setPlayer1Mins(0);
                    setPlayer2Mins(0);
                    setPlayer1Secs(0);
                    setPlayer2Secs(0);
                    setIncrementTime(0);
                    setIsNoTimerSelected(true);
                }
                setShowTimerModal(false);
            }}>
                <button className='save-button'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default TimerModal