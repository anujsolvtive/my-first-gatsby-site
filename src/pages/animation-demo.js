import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const onPlayClickHandler = (ref,setIsPlaying) => {
    ref.current.play();
    setIsPlaying(true);
} 

const onPauseClickHandler = (ref,setIsPlaying) => {
    ref.current.pause();
    setIsPlaying(false);
}

const onGoClickHandler = (ref,lottie,seekValue) => {
    ref.current.setSeeker(seekValue);
    //lottie.goToAndStop(seekValue+"%", false);
}

const onSegementClickHandler = (ref,lottie,seekValue) => {
    //ref.current.setSeeker(seekValue);
    //lottie.goToAndStop(seekValue+"%", false);
    lottie.playSegments([0,50],true);
}

const onPlayListener = (event) => {
    console.log("animation play started");
}

const AnimationDemo = () => {
    const playerRef = useRef();
    const [isPlaying, setIsPlaying] = useState(true);
    const [seekValue, setSeekValue] = useState("");
    const [lottie, setLottieInstance] = useState({});
    return (
        <Layout pageTitle="Animation Demo">
            <p>Checkout animation</p>
            <Player
                onEvent={event => {
                    if (event === 'play') onPlayListener(event); // check event type and do something
                  }}
                autoplay
                loop
                ref={playerRef}
                lottieRef={instance => setLottieInstance(instance)}
                mode="normal"
                src="https://assets5.lottiefiles.com/packages/lf20_l4iwnspr.json"
                style={{width: "320px"}}
            ></Player>
            {(isPlaying) ? <button onClick={() => onPauseClickHandler(playerRef,setIsPlaying)}>Pause</button> : <button onClick={() => onPlayClickHandler(playerRef,setIsPlaying)}>Play</button> }
            Go to timeline: <input type="number" min="0" max="100" value={seekValue} onChange={e => setSeekValue(e.target.value) }/>
            <button onClick={() => onGoClickHandler(playerRef,lottie,seekValue)}>Go</button>
            <button onClick={() => onSegementClickHandler(playerRef,lottie,seekValue)}>Play segement</button>
        </Layout>
    )
}

export default AnimationDemo;