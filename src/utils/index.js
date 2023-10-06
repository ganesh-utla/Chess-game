
export const resetBoardState = () => {
    localStorage.clear();
}

export const addBoardState = (board, pieceCharacteristics, pawnCharacters, currentPlayerWhite, curRemovedWP, curRemovedBP) => {
    let prevStates = localStorage.getItem('board-details');
    if (prevStates===null || prevStates===undefined)
        prevStates = [];
    const curState = {board, pieceCharacteristics, pawnCharacters, currentPlayerWhite, curRemovedWP, curRemovedBP};
    // prevStates.push({...curState});
    localStorage.setItem('board-details', JSON.stringify(curState));
}


export const loadBoardState = (setBoard, setPieceCharacteristics, setPawnCharacters, setCurrentPlayerWhite, setCurRemovedWP, setCurRemovedBP) => {
    if(!localStorage.getItem('board-details')) return;
    const boardDetails = JSON.parse(localStorage.getItem('board-details'));
    const board = boardDetails['board'];
    const pieceCharacteristics = boardDetails['pieceCharacteristics'];
    const pawnCharacters = boardDetails['pawnCharacters'];
    const currentPlayerWhite = boardDetails['currentPlayerWhite'];
    const curRemovedWP = boardDetails['curRemovedWP'];
    const curRemovedBP = boardDetails['curRemovedBP'];
    setBoard(board);

    const setBr1 = setPieceCharacteristics['br1'];
    const setBn1 = setPieceCharacteristics['bn1'];
    const setBb1 = setPieceCharacteristics['bb1'];
    const setBq = setPieceCharacteristics['bq'];
    const setBk = setPieceCharacteristics['bk'];
    const setBb2 = setPieceCharacteristics['bb2'];
    const setBn2 = setPieceCharacteristics['bn2'];
    const setBr2 = setPieceCharacteristics['br2'];

    const setWr1 = setPieceCharacteristics['wr1'];
    const setWn1 = setPieceCharacteristics['wn1'];
    const setWb1 = setPieceCharacteristics['wb1'];
    const setWq = setPieceCharacteristics['wq'];
    const setWk = setPieceCharacteristics['wk'];
    const setWb2 = setPieceCharacteristics['wb2'];
    const setWn2 = setPieceCharacteristics['wn2'];
    const setWr2 = setPieceCharacteristics['wr2'];

    const setBp1 = setPieceCharacteristics['bp1'];
    const setBp2 = setPieceCharacteristics['bp2'];
    const setBp3 = setPieceCharacteristics['bp3'];
    const setBp4 = setPieceCharacteristics['bp4'];
    const setBp5 = setPieceCharacteristics['bp5'];
    const setBp6 = setPieceCharacteristics['bp6'];
    const setBp7 = setPieceCharacteristics['bp7'];
    const setBp8 = setPieceCharacteristics['bp8'];
    const setWp1 = setPieceCharacteristics['wp1'];
    const setWp2 = setPieceCharacteristics['wp2'];
    const setWp3 = setPieceCharacteristics['wp3'];
    const setWp4 = setPieceCharacteristics['wp4'];
    const setWp5 = setPieceCharacteristics['wp5'];
    const setWp6 = setPieceCharacteristics['wp6'];
    const setWp7 = setPieceCharacteristics['wp7'];
    const setWp8 = setPieceCharacteristics['wp8'];

    setBr1(pieceCharacteristics['br1']);
    setBn1(pieceCharacteristics['bn1']);
    setBb1(pieceCharacteristics['bb1']);
    setBq(pieceCharacteristics['bq']);
    setBk(pieceCharacteristics['bk']);
    setBb2(pieceCharacteristics['bb2']);
    setBn2(pieceCharacteristics['bn2']);
    setBr2(pieceCharacteristics['br2']);

    setWr1(pieceCharacteristics['wr1']);
    setWn1(pieceCharacteristics['wn1']);
    setWb1(pieceCharacteristics['wb1']);
    setWq(pieceCharacteristics['wq']);
    setWk(pieceCharacteristics['wk']);
    setWb2(pieceCharacteristics['wb2']);
    setWn2(pieceCharacteristics['wn2']);
    setWr2(pieceCharacteristics['wr2']);

    setBp1(pieceCharacteristics['bp1']);
    setBp2(pieceCharacteristics['bp2']);
    setBp3(pieceCharacteristics['bp3']);
    setBp4(pieceCharacteristics['bp4']);
    setBp5(pieceCharacteristics['bp5']);
    setBp6(pieceCharacteristics['bp6']);
    setBp7(pieceCharacteristics['bp7']);
    setBp8(pieceCharacteristics['bp8']);
    setWp1(pieceCharacteristics['wp1']);
    setWp2(pieceCharacteristics['wp2']);
    setWp3(pieceCharacteristics['wp3']);
    setWp4(pieceCharacteristics['wp4']);
    setWp5(pieceCharacteristics['wp5']);
    setWp6(pieceCharacteristics['wp6']);
    setWp7(pieceCharacteristics['wp7']);
    setWp8(pieceCharacteristics['wp8']);
    
    const setBpc1 = setPawnCharacters['bpc1'];
    const setBpc2 = setPawnCharacters['bpc2'];
    const setBpc3 = setPawnCharacters['bpc3'];
    const setBpc4 = setPawnCharacters['bpc4'];
    const setBpc5 = setPawnCharacters['bpc5'];
    const setBpc6 = setPawnCharacters['bpc6'];
    const setBpc7 = setPawnCharacters['bpc7'];
    const setBpc8 = setPawnCharacters['bpc8'];
    const setWpc1 = setPawnCharacters['wpc1'];
    const setWpc2 = setPawnCharacters['wpc2'];
    const setWpc3 = setPawnCharacters['wpc3'];
    const setWpc4 = setPawnCharacters['wpc4'];
    const setWpc5 = setPawnCharacters['wpc5'];
    const setWpc6 = setPawnCharacters['wpc6'];
    const setWpc7 = setPawnCharacters['wpc7'];
    const setWpc8 = setPawnCharacters['wpc8'];

    setBpc1(pawnCharacters['bpc1']);
    setBpc2(pawnCharacters['bpc2']);
    setBpc3(pawnCharacters['bpc3']);
    setBpc4(pawnCharacters['bpc4']);
    setBpc5(pawnCharacters['bpc5']);
    setBpc6(pawnCharacters['bpc6']);
    setBpc7(pawnCharacters['bpc7']);
    setBpc8(pawnCharacters['bpc8']);
    setWpc1(pawnCharacters['wpc1']);
    setWpc2(pawnCharacters['wpc2']);
    setWpc3(pawnCharacters['wpc3']);
    setWpc4(pawnCharacters['wpc4']);
    setWpc5(pawnCharacters['wpc5']);
    setWpc6(pawnCharacters['wpc6']);
    setWpc7(pawnCharacters['wpc7']);
    setWpc8(pawnCharacters['wpc8']);
    
    setCurrentPlayerWhite(currentPlayerWhite);
    setCurRemovedWP(curRemovedWP);
    setCurRemovedBP(curRemovedBP);
}