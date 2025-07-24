import { useEffect } from "react";
import gsap from "gsap";

export default function DafliTechLogo() {
  useEffect(() => {
    const circles = gsap.utils.toArray(".outer-circle");
    const cubes = gsap.utils.toArray(".cube");
    const lines = gsap.utils.toArray("line");
    const lines2 = gsap.utils.toArray(".line2");

    const heptagonPositions = [
      [256, 70],
      [360, 210],
      [445, 315],
      [345, 425],
      [215, 359],
      [100, 315],
      [178, 190],
    ];

    const cubePositions = [
      [256, 70],
      [360, 210],
      [445, 315],
      [345, 425],
      [215, 359],
      [100, 315],
      [178, 190],
    ];

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // --- CYCLE 1: Circles ---
    tl.set(circles, { opacity: 1, attr: { cx: 256, cy: 256 } })
      .set("#centerCircle", { fill: "#0066a1" })
      .set(cubes, { opacity: 0 })
      .set(lines, { opacity: 0 })
      .set(lines2, { opacity: 0, stroke: "#0066a1" })

      .to(circles, {
        duration: 1,
        stagger: 0.1,
        attr: (i) => ({
          cx: heptagonPositions[i][0],
          cy: heptagonPositions[i][1],
        }),
        ease: "power2.out",
      })
      .to(lines, { duration: 0.5, opacity: 1 }, "+=0.2")
      .to(circles, {
        duration: 1,
        delay: 1,
        attr: (i, target) => ({
          cx: target.getAttribute("data-final-x"),
          cy: target.getAttribute("data-final-y"),
        }),
        ease: "power2.inOut",
      })
      .to(lines, { duration: 0.3, opacity: 0 }, "+=1")
      .to(circles, {
        duration: 1,
        attr: { cx: 256, cy: 256 },
        ease: "power2.inOut",
      })

      // --- CYCLE 2: Cubes ---
      .set(circles, { opacity: 0 })
      .set("#centerCircle", { fill: "#000000" })
      .set(cubes, { x: 256, y: 256 })
      .to(cubes, {
        duration: 1,
        opacity: 1,
        stagger: 0.1,
        x: (i) => cubePositions[i][0],
        y: (i) => cubePositions[i][1],
        ease: "power2.out",
      })
      .to(lines2, { duration: 0.5, opacity: 1, stroke: "#000000" }, "+=0.2")
      .to(cubes, {
        duration: 1,
        x: (i, target) => parseFloat(target.getAttribute("data-final-x")),
        y: (i, target) => parseFloat(target.getAttribute("data-final-y")),
        ease: "power2.inOut",
      })
      .to(lines2, { duration: 0.3, opacity: 0 }, "+=1")
      .to(cubes, {
        opacity: 0,
        duration: 1,
        x: 256,
        y: 256,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <svg width="512" height="512" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a0a0a0" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
      </defs>

      <circle
        id="centerCircle"
        className="z-50"
        cx="256"
        cy="256"
        r="55"
        fill="#0066a1"
      />

      {/* Lines Circle*/}

      <line
        x1="256"
        y1="256"
        x2="256"
        y2="60"
        stroke="#0066a1"
        stroke-width="10"
      />
      <line
        x1="256"
        y1="256"
        x2="370"
        y2="210"
        stroke="#0066a1"
        stroke-width="5"
      />
      <line
        x1="256"
        y1="256"
        x2="450"
        y2="319"
        stroke="#0066a1"
        stroke-width="5"
      />
      <line
        x1="256"
        y1="256"
        x2="355"
        y2="438"
        stroke="#0066a1"
        stroke-width="10"
      />
      <line
        x1="256"
        y1="256"
        x2="210"
        y2="370"
        stroke="#0066a1"
        stroke-width="5"
      />
      <line
        x1="256"
        y1="256"
        x2="90"
        y2="322"
        stroke="#0066a1"
        stroke-width="10"
      />
      <line
        x1="256"
        y1="256"
        x2="168"
        y2="180"
        stroke="#0066a1"
        stroke-width="5"
      />

      {/* Circles */}
      <circle
        class="outer-circle"
        data-final-x="256"
        data-final-y="60"
        r="28"
        fill="#0066a1"
      />
      <circle
        class="outer-circle"
        data-final-x="370"
        data-final-y="210"
        r="25"
        fill="#0066a1"
      />
      <circle
        class="outer-circle"
        data-final-x="450"
        data-final-y="319"
        r="12"
        fill="#0066a1"
      />
      <circle
        class="outer-circle"
        data-final-x="355"
        data-final-y="438"
        r="28"
        fill="#0066a1"
      />
      <circle
        class="outer-circle"
        data-final-x="210"
        data-final-y="370"
        r="15"
        fill="#0066a1"
      />
      <circle
        class="outer-circle"
        data-final-x="90"
        data-final-y="322"
        r="20"
        fill="#0066a1"
      />
      <circle
        class="outer-circle"
        data-final-x="168"
        data-final-y="180"
        r="15"
        fill="#0066a1"
      />

      {/* Cubes */}
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#a0a0a0", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#e0e0e0", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="grad-left" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#c0c0c0", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#a0a0a0", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#a0a0a0", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#c0c0c0", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      <line x1="256" y1="256" x2="256" y2="60" class="line2 line-thick" />
      <line x1="256" y1="256" x2="340" y2="223" class="line2 line-thin" />
      <line x1="256" y1="256" x2="450" y2="319" class="line2 line-thin" />
      <line x1="256" y1="256" x2="355" y2="438" class="line2 line-thick" />
      <line x1="256" y1="256" x2="210" y2="370" class="line2 line-thin" />
      <line x1="256" y1="256" x2="90" y2="322" class="line2 line-thick" />
      <line x1="256" y1="256" x2="168" y2="180" class="line2 line-thin" />

      {/* Center cube (larger) */}
      {/* <g transform="translate(256,256)" className="cube" data-final-x="256" data-final-y="256">
        <polygon points="0,-30 30,-15 0,0 -30,-15" className="cube-face-top" />
        <polygon points="-30,-15 0,0 0,30 -30,15" className="cube-face-left" />
        <polygon points="0,0 30,-15 30,15 0,30" className="cube-face-right" />
      </g> */}

      {/* Other cubes */}
      <g className="cube" data-final-x="256" data-final-y="60">
        <polygon
          points="0,-45 45,-22.5 0,0 -45,-22.5"
          className="cube-face-top"
        />
        <polygon
          points="-45,-22.5 0,0 0,45 -45,22.5"
          className="cube-face-left"
        />
        <polygon
          points="0,0 45,-22.5 45,22.5 0,45"
          className="cube-face-right"
        />
      </g>

      <g className="cube" data-final-x="370" data-final-y="210">
        <polygon points="0,-45 45,-22.5 0,0 -45,-22.5" className="cube-wire" />
        <polygon points="-45,-22.5 0,0 0,45 -45,22.5" className="cube-wire" />
        <polygon points="0,0 45,-22.5 45,22.5 0,45" className="cube-wire" />
      </g>

      <g className="cube" data-final-x="450" data-final-y="319">
        <polygon points="0,-18 18,-9 0,0 -18,-9" className="cube-face-top" />
        <polygon points="-18,-9 0,0 0,18 -18,9" className="cube-face-left" />
        <polygon points="0,0 18,-9 18,9 0,18" className="cube-face-right" />
      </g>

      <g className="cube" data-final-x="355" data-final-y="438">
        <polygon points="0,-54 54,-27 0,0 -54,-27" className="cube-face-top" />
        <polygon points="-54,-27 0,0 0,54 -54,27" className="cube-face-left" />
        <polygon points="0,0 54,-27 54,27 0,54" className="cube-face-right" />
      </g>

      <g className="cube" data-final-x="210" data-final-y="370">
        <polygon
          points="0,-22.5 22.5,-11.25 0,0 -22.5,-11.25"
          className="cube-wire"
        />
        <polygon
          points="-22.5,-11.25 0,0 0,22.5 -22.5,11.25"
          className="cube-wire"
        />
        <polygon
          points="0,0 22.5,-11.25 22.5,11.25 0,22.5"
          className="cube-wire"
        />
      </g>

      <g className="cube" data-final-x="90" data-final-y="322">
        <polygon
          points="0,-31.5 31.5,-15.75 0,0 -31.5,-15.75"
          className="cube-face-top"
        />
        <polygon
          points="-31.5,-15.75 0,0 0,31.5 -31.5,15.75"
          className="cube-face-left"
        />
        <polygon
          points="0,0 31.5,-15.75 31.5,15.75 0,31.5"
          className="cube-face-right"
        />
      </g>

      <g className="cube" data-final-x="168" data-final-y="180">
        <polygon
          points="0,-22.5 22.5,-11.25 0,0 -22.5,-11.25"
          className="cube-wire"
        />
        <polygon
          points="-22.5,-11.25 0,0 0,22.5 -22.5,11.25"
          className="cube-wire"
        />
        <polygon
          points="0,0 22.5,-11.25 22.5,11.25 0,22.5"
          className="cube-wire"
        />
      </g>
    </svg>
  );
}
