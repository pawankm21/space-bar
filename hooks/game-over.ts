import {useState,useEffect} from 'react'

export default function useGameOver() {
    const [isgameOver, setGameOver] = useState(true);
    const [spaceShipx, setSpaceShipx] = useState(0);
    const [modalText, setModalText] = useState('Start Game');
    const [laserx, setLaserx] = useState(0);
    useEffect(() => {
        console.log("laserx", laserx);
        console.log("spaceShipx", spaceShipx);
        console.log("gameOver", isgameOver);
        if(laserx<0 ||laserx<spaceShipx){
            setGameOver(true);
            setModalText("Game Over");
        }
    }, )
    return {isgameOver, setGameOver, spaceShipx, setSpaceShipx, laserx, setLaserx, modalText, setModalText};
}
