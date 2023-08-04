"use client";
import React from "react";

const VideoPopup = ({ open, onClose, src }) => {
  return (
    <div className={`video_popup ${open ? "open" : ""}`}>
      <div className="video_cv_wrap">
        <div className="video_cv_wrap_inner">
          <video controls src={src}></video>
        </div>
        <span className="close" onClick={onClose}>
          <svg
            className="icon-remove "
            aria-hidden="true"
            focusable="false"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 10 10"
            fill="none"
          >
            {" "}
            <title>Remove icon</title>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.11611 5.00001L0.327286 8.78884L1.21117 9.67272L5 5.88389L8.78883 9.67272L9.67271 8.78884L5.88388 5.00001L9.67271 1.21118L8.78882 0.327301L5 4.11613L1.21117 0.327301L0.327286 1.21118L4.11611 5.00001Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default VideoPopup;
