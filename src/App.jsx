import React from 'react';
import ProfileCard from './components/ProfileCard';

const PROFILES = [
  {
    id: '1',
    name: 'Secure Doggo',
    role: 'Lead Security Engineer',
    avatar: 'https://preview.redd.it/security-doggo-made-with-starryai-v0-ir9sjur1dsra1.jpg?auto=webp&s=0b2ec53ca8a891ca2e909a711de83ccbbad685ae',
    stats: { posts: '120', followers: '1.2M', following: '240' }
  },
  {
    id: '2',
    name: 'Cyber Cat',
    role: 'Lead Robotics Engineer',
    avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b161287d-95d6-4c89-9e9f-521350c76a7d/dfufpdu-6a0deb63-5157-40f8-8b4e-5a41677857b4.jpg/v1/fill/w_1280,h_2240,q_75,strp/wallpaper_cybercat_by_trghuci_dfufpdu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI0MCIsInBhdGgiOiJcL2ZcL2IxNjEyODdkLTk1ZDYtNGM4OS05ZTlmLTUyMTM1MGM3NmE3ZFwvZGZ1ZnBkdS02YTBkZWI2My01MTU3LTQwZjgtOGI0ZS01YTQxNjc3ODU3YjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.35W5zKqBiG9rpKgy3z8q9Qjz1k5_KKocKPp5EFjF_4g',
    stats: { posts: '254', followers: '4.5M', following: '180' }
  }
];

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      backgroundColor: '#0b0d12'
    }}>
      {PROFILES.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}