import {useState,useEffect} from 'react'

export default function useGameOver() {
    const [isgameOver, setGameOver] = useState(false);
    const [spaceShipx, setSpaceShipx] = useState(0);
    const [laserx, setLaserx] = useState(0);
    useEffect(() => {
        console.log("laserx", laserx);
        console.log("spaceShipx", spaceShipx);
        console.log("gameOver", isgameOver);
        if(laserx<0 ||laserx<spaceShipx){
            setGameOver(true);
        }
    }, )
    return {isgameOver, setGameOver, spaceShipx, setSpaceShipx, laserx, setLaserx};
}
