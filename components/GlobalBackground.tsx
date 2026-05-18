"use client";

export function GlobalBackground() {
  return (
    <>
      <style>{`
        .global-bg {
          background-image: url('/background/mobile.png');
          background-position: center top;
          background-size: cover;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) and (orientation: portrait) {
          .global-bg {
            background-image: url('/background/tablet-portrait.png');
            background-position: center center;
          }
        }
        @media (min-width: 768px) and (orientation: landscape) {
          .global-bg {
            background-image: url('/background/tablet-landscape.png');
            background-position: center right;
          }
        }
        @media (min-width: 1280px) {
          .global-bg {
            background-image: url('/background/laptop.png');
            background-position: center center;
          }
        }
        @media (min-width: 1920px) {
          .global-bg {
            background-image: url('/background/ultrawide.png');
            background-position: center top;
          }
        }
      `}</style>
      <div className="global-bg fixed inset-0 z-[-10] pointer-events-none">
        {/* Deep atmospheric depth overlay */}
        <div className="absolute inset-0 bg-ink/30" />
      </div>
    </>
  );
}
