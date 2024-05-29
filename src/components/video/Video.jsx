import React from 'react';
import YouTube from 'react-youtube';

const Video = () => {
    const opts = {
        height: '590',
        width: '1048',
        playerVars: {
            autoplay: 1,  // 자동 재생 활성화
            loop: 1,      // 무한 반복
            controls: 0,
            playlist: 'asciEwftclo', // 무한 반복을 위해 비디오 ID를 playlist에도 추가해야 함
            mute: 1       // 동영상을 음소거
        }
    };

    const onReady = (event) => {
        // API를 통해 비디오가 준비되었을 때 자동으로 재생
        event.target.playVideo();
        event.target.mute();  // 비디오를 음소거
        event.target.setPlaybackQuality('hd1080');

        // postMessage 호출 예시
        const message = { action: 'play' };
        const targetOrigin = 'https://www.youtube.com';
        event.target.getIframe().contentWindow.postMessage(message, targetOrigin);
    }

    const onEnd = (event) => {
        // 동영상이 끝날 때 자동으로 재생
        event.target.playVideo();
    }

    return (
        <div className='video'>
            <YouTube
                videoId="asciEwftclo"  // 여기에 YouTube 동영상의 ID를 입력
                opts={opts}
                onReady={onReady}
                onEnd={onEnd}
            />
        </div>
    );
}

export default Video;
