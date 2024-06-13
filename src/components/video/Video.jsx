import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const Video = () => {
    const videoIds = ['asciEwftclo', 'HUvuEgQhtss', 'Z3pDU1QcFBI', 'fUs0nBGS9tM', 'bCiPK6w5F8M', 'pn66SdHXKfc', 'RokcblOqDpE']; // 동영상 ID를 이 배열에 추가하세요
    const [currentIndex, setCurrentIndex] = useState(0);
    const [player, setPlayer] = useState(null);
    const [isMuted, setIsMuted] = useState(true);

    const opts = {
        height: '590',
        width: '1048',
        playerVars: {
            autoplay: 1,  // 자동 재생 활성화
            loop: 0,      // 무한 반복 비활성화
            controls: 0,
            mute: 1       // 동영상을 음소거
        }
    };

    useEffect(() => {
        if (player && player.getPlayerState() === 1) { // player가 로드되고 재생 중인 경우에만 실행
            if (isMuted) {
                player.mute();
            } else {
                player.unMute();
            }
        }
    }, [currentIndex, player, isMuted]);

    const onReady = (event) => {
        setPlayer(event.target);
        event.target.playVideo();
        if (isMuted) {
            event.target.mute();  // 비디오를 음소거
        } else {
            event.target.unMute(); // 비디오를 음소거 해제
        }
        event.target.setPlaybackQuality('hd1080');
    };

    const onEnd = () => {
        // 동영상이 끝날 때 다음 동영상으로 넘어가고 마지막 동영상이면 처음으로 돌아감
        const nextIndex = (currentIndex + 1) % videoIds.length;
        setCurrentIndex(nextIndex);
    };

    const toggleMute = () => {
        if (player && player.getPlayerState() === 1) { // player가 로드되고 재생 중인 경우에만 실행
            if (isMuted) {
                player.unMute();
            } else {
                player.mute();
            }
            setIsMuted(!isMuted);
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
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    backgroundColor: 'transparent'
                }}></div> {/* 클릭 방지 오버레이 */}
                <YouTube
                    key={videoIds[currentIndex]} // key 속성을 추가하여 컴포넌트가 재렌더링되도록 함
                    videoId={videoIds[currentIndex]}  // 여기에 현재 재생 중인 YouTube 동영상의 ID를 입력
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
