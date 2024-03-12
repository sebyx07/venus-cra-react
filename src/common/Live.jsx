import React, { useEffect, useRef, useState } from 'react';
import hls, { Events } from 'hls.js';
import './Live.scss';

export default function Live() {
  const videoRef = useRef();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const hlsUrl = 'https://b-hls-25.doppiocdn.com/hls/148702724/148702724_720p60.m3u8?playlistType=lowLatency&_HLS_msn=915&_HLS_part=1';

    if (hls.isSupported()) {
      const hlsInstance = new hls();
      hlsInstance.loadSource(hlsUrl);
      hlsInstance.attachMedia(video);

      hlsInstance.on(Events.MANIFEST_PARSED, () => {
        video.play();
      });

      hlsInstance.on(Events.ERROR, (event, data) => {
        setError(true)
      });
    }
  }, [videoRef]);

  function openStripchat() {
    window.location.href = 'https://stripchat.com/venus_peach';
  }

  const goodStream = () => {};

  return (
    <div className="live-video">
      {
        error ? (
          <div>
            <p>Stream offline, but please check it here later:</p>
          </div>
        ) : (
          <>
            <h3>See me live:</h3>
            <div className="video-container">
              <video ref={videoRef} muted controls={false} onClick={openStripchat} />
            </div>
          </>
        )
}

      <a href="https://stripchat.com/venus_peach">Venus Peach Stripchat🚀</a>
    </div>
  );
}
