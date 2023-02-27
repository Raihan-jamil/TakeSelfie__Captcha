import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import TakeSelfieStyle from "./TakeSelfieStyle.css";

function TakeSelfie({ setSelfie }) {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 600,
    height: 500,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    setSelfie(true);
  }, [webcamRef]);

  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={500}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button className="btn_photo" onClick={capture}>
            Capture photo
          </button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button className="btn_photo" onClick={() => setImg(null)}>
            Retake photo
          </button>
        </>
      )}
    </div>
  );
}

export default TakeSelfie;
