import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout'
import * as LottiePlayer from "@lottiefiles/lottie-player";

const onPlayClickHandler = (ref,setIsPlaying) => {
    ref.current.play();
    setIsPlaying(true);
} 

const onPauseClickHandler = (ref,setIsPlaying) => {
    ref.current.pause();
    setIsPlaying(false);
}

const onGoClickHandler = (ref,seekValue) => {
    ref.current.seek(seekValue+"%");
}

const onPlayListener = (e) => {
    console.log("animation play started");
}

const AnimationDemo = () => {
    const ref = useRef();
    const [isPlaying, setIsPlaying] = useState(true);
    const [seekValue, setSeekValue] = useState("");
    useEffect(() => {
        console.log("mounted");
        ref.current.addEventListener('play',onPlayListener)
    },[])
    return (
        <Layout pageTitle="Animation Demo">
            <p>Checkout animation</p>
            <lottie-player
                autoplay
                loop
                ref={ref}
                mode="normal"
                src="https://assets9.lottiefiles.com/private_files/lf30_kd6vmszk.json"
                style={{width: "320px"}}
            ></lottie-player>
            {(isPlaying) ? <button onClick={() => onPauseClickHandler(ref,setIsPlaying)}>Pause</button> : <button onClick={() => onPlayClickHandler(ref,setIsPlaying)}>Play</button> }
            Go to timeline: <input type="number" min="0" max="100" value={seekValue} onChange={e => setSeekValue(e.target.value) }/>
            <button onClick={() => onGoClickHandler(ref,seekValue)}>Go</button>
        </Layout>
    )
}

export default AnimationDemo;