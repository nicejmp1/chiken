import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const Video = () => {
    const videoIds = ['asciEwftclo', 'HUvuEgQhtss', 'Z3pDU1QcFBI', 'fUs0nBGS9tM', 'bCiPK6w5F8M', 'pn66SdHXKfc', 'RokcblOqDpE'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const playerRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const opts = {
        height: '590',
        width: '1048',
        playerVars: {
            autoplay: 1,
            loop: 0,
            controls: 0,
            mute: 1
        }
    };

    useEffect(() => {
        const player = playerRef.current;
        if (player && typeof player.getPlayerState === 'function') {
            const playerState = player.getPlayerState();
            if (playerState === 1) { // 1 == YT.PlayerState.PLAYING
                if (isMuted) {
                    player.mute();
                } else {
                    player.unMute();
                }
            }
        }
    }, [currentIndex, isMuted]);

    const onReady = (event) => {
        playerRef.current = event.target;
        event.target.playVideo();
        if (isMuted) {
            event.target.mute();
        } else {
            event.target.unMute();
        }
        event.target.setPlaybackQuality('hd1080');
    };

    const onEnd = () => {
        const nextIndex = (currentIndex + 1) % videoIds.length;
        setCurrentIndex(nextIndex);
    };

    const toggleMute = () => {
        const player = playerRef.current;
        if (player && typeof player.getPlayerState === 'function') {
            const playerState = player.getPlayerState();
            if (playerState === 1) {
                if (isMuted) {
                    player.unMute();
                } else {
                    player.mute();
                }
                setIsMuted(!isMuted);
            }
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{ position: 'relative', width: '1048px', height: '590px', marginBottom: '20px' }}>
                <YouTube
                    key={videoIds[currentIndex]}
                    videoId={videoIds[currentIndex]}
                    opts={opts}
                    onReady={onReady}
                    onEnd={onEnd}
                />
                <button onClick={toggleMute} style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    zIndex: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}>
                    {isMuted ? '소리 켜기' : '소리 끄기'}
                </button>
            </div>
        </div>
    );
}

export default Video;
