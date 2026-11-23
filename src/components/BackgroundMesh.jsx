export default function BackgroundMesh() {
  return (
    <div className="background-mesh" aria-hidden="true">
      <svg
        className="background-mesh__art"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="mesh-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
            patternTransform="skewY(-12)"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".2"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="mesh-wave" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#8b78df" stopOpacity=".08" />
            <stop offset=".55" stopColor="#798be2" stopOpacity=".25" />
            <stop offset="1" stopColor="#8b78df" stopOpacity=".08" />
          </linearGradient>
        </defs>
        <path className="background-mesh__grid" d="M0 0h430v305H0z" fill="url(#mesh-grid)" />
        <path className="background-mesh__grid" d="M1110 455h330v305h-330z" fill="url(#mesh-grid)" />
        <g className="background-mesh__waves" fill="none" stroke="url(#mesh-wave)">
          <path d="M-50 530C180 420 340 695 580 550s380-70 560 12 280 90 370 10" />
          <path d="M-50 548C180 438 340 713 580 568s380-70 560 12 280 90 370 10" />
          <path d="M-50 566C180 456 340 731 580 586s380-70 560 12 280 90 370 10" />
          <path d="M-50 584C180 474 340 749 580 604s380-70 560 12 280 90 370 10" />
          <path d="M-50 602C180 492 340 767 580 622s380-70 560 12 280 90 370 10" />
          <path d="M-50 620C180 510 340 785 580 640s380-70 560 12 280 90 370 10" />
          <path d="M-50 638C180 528 340 803 580 658s380-70 560 12 280 90 370 10" />
        </g>
        <g className="background-mesh__shards">
          <path d="m1200 90 106 40-68 113-113-52z" />
          <path d="m1306 130 102-49-33 153-137 9z" />
          <path d="m1125 191 113 52-56 100-107-71z" />
        </g>
        <g className="background-mesh__dots">
          <circle cx="92" cy="480" r="2" />
          <circle cx="156" cy="515" r="2" />
          <circle cx="236" cy="468" r="1.8" />
          <circle cx="330" cy="532" r="2" />
          <circle cx="1160" cy="114" r="2" />
          <circle cx="1268" cy="278" r="2" />
          <circle cx="1362" cy="348" r="2" />
        </g>
      </svg>
    </div>
  );
}
