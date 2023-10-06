
const HintBox = ({x, y, prevActive, movePiece, checkCoordinates, setHints, pieceInDanger, setPieceInDanger}) => {
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

export default HintBox;