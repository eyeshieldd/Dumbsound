import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';

const Player = ({ song, playIndex, setPlayIndex }) => {
    const playlist = song.map((music) => ({
        name: music.title,
        singer: music.artist.name,
        cover: `http://localhost:5000/uploads/${music.thumbnail}`,
        musicSrc: music.attache
    }));
    return (
        <div
            style={{
                height: '100px',
                width: '100%'
            }}
        >
            <ReactJkMusicPlayer
                mode="full"
                audioLists={playlist}
                defaultPlayIndex={0}
                autoPlay={false}
                showDownload={false}
                showThemeSwitch={true}
                toggleMode={false}
                responsive={true}
                glassBg={true}
                playIndex={playIndex}
                onAudioPlay={(audioInfo) => {
                    if (playIndex === audioInfo.playIndex) {
                        return;
                    }
                    setPlayIndex(audioInfo.playIndex);
                }}
            />
			,
        </div>
    );
};

export default Player;