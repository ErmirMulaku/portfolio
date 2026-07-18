import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';

export const alt = `${profile.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Dynamically generated Open Graph image — self-hosted, no external assets (SPEC §7).
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a0b0d',
        backgroundImage:
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,212,191,0.18), transparent 60%)',
        padding: '72px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            border: '1px solid rgba(255,255,255,0.16)',
            background: '#131519',
            color: '#2dd4bf',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {profile.monogram}
        </div>
        <div style={{ color: '#a3a9b2', fontSize: 26, letterSpacing: 2 }}>
          {profile.name.toUpperCase()}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            color: '#f4f5f6',
            fontSize: 66,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          Software engineer shipping products across web, mobile &amp; desktop.
        </div>
      </div>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#71767e', fontSize: 26 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: '#2dd4bf' }} />
          Available for work
        </div>
        <div>·</div>
        <div>Pristina, Kosovo</div>
      </div>
    </div>,
    { ...size },
  );
}
