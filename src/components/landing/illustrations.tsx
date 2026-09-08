export function AlignerWire() {
  return (
    <svg viewBox="0 0 640 420" fill="none" className="h-full w-full" aria-hidden>
      <rect x="1" y="1" width="638" height="418" stroke="currentColor" strokeOpacity="0.18" />
      <path
        d="M90 250c40-92 120-150 230-150s190 58 230 150"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M110 258c36-78 108-128 210-128s174 50 210 128"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M140 262c28-58 86-96 180-96s152 38 180 96" stroke="currentColor" strokeWidth="1.4" />
      {Array.from({ length: 14 }).map((_, i) => {
        const x = 150 + i * 25;
        return (
          <path
            key={x}
            d={`M${x} 168c8 18 12 40 12 86s-4 68-12 86`}
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
        );
      })}
      <path d="M80 300h480M80 318h480" stroke="currentColor" strokeOpacity="0.2" />
      <circle cx="86" cy="86" r="18" stroke="currentColor" />
      <path d="M86 74v24M74 86h24" stroke="currentColor" />
      <text x="120" y="92" fill="currentColor" fontSize="11" letterSpacing="2.4" fontFamily="ui-monospace, monospace">
        SCAN 3D / STL
      </text>
      <text x="80" y="392" fill="currentColor" fontSize="11" letterSpacing="2.4" fontFamily="ui-monospace, monospace">
        OEM  ·  PRIVATE LABEL  ·  DIGITAL PLANNING
      </text>
    </svg>
  );
}

export function LabGrid() {
  return (
    <svg viewBox="0 0 420 280" fill="none" className="h-full w-full" aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={20 + i * 54}
          y1="16"
          x2={20 + i * 54}
          y2="264"
          stroke="currentColor"
          strokeOpacity="0.16"
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="20"
          y1={16 + i * 50}
          x2="400"
          y2={16 + i * 50}
          stroke="currentColor"
          strokeOpacity="0.16"
        />
      ))}
      <rect x="74" y="66" width="120" height="80" stroke="currentColor" />
      <rect x="226" y="66" width="120" height="80" stroke="currentColor" />
      <rect x="74" y="166" width="272" height="64" stroke="currentColor" />
      <path d="M90 106h88M90 118h64" stroke="currentColor" />
      <circle cx="286" cy="106" r="22" stroke="currentColor" />
      <path d="M90 190h240M90 206h168" stroke="currentColor" strokeOpacity="0.7" />
    </svg>
  );
}

export function PackBox() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="h-full w-full" aria-hidden>
      <path d="M40 70 140 24l100 46v110L140 226 40 180Z" stroke="currentColor" />
      <path d="M40 70 140 116l100-46M140 116v110" stroke="currentColor" />
      <path d="M92 96 140 74l48 22" stroke="currentColor" strokeOpacity="0.7" />
    </svg>
  );
}
