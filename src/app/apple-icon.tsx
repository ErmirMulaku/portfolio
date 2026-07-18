import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Apple touch icon — monogram, generated (no static binary asset needed).
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0b0d',
        color: '#2dd4bf',
        fontSize: 92,
        fontWeight: 700,
        fontFamily: 'monospace',
      }}
    >
      {profile.monogram}
    </div>,
    { ...size },
  );
}
