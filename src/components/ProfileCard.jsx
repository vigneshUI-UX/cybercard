import React, { useState } from 'react';
import './ProfileCard.css';

export default function ProfileCard({ profile }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="card-container">
      <div className="neon-border">
        {/* Top Avatar */}
        <div className="avatar-floating-container">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="avatar-img-inner"
          />
        </div>

        {/* Inner Card */}
        <div className="neon-card-inner">
          <h3 className="card-title">{profile.name}</h3>
          <p className="card-role">{profile.role}</p>

          {/* Hover Expandable Content */}
          <div className="hover-expand-content">
            <div className="stats-container">
              <div>
                <div className="stat-value">{profile.stats.posts}</div>
                <div className="stat-label">Posts</div>
              </div>
              <div>
                <div className="stat-value">{profile.stats.followers}</div>
                <div className="stat-label">Followers</div>
              </div>
              <div>
                <div className="stat-value">{profile.stats.following}</div>
                <div className="stat-label">Following</div>
              </div>
            </div>

            <div className="action-buttons">
              <button
                className={`btn-follow ${isFollowing ? 'following' : ''}`}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              <button
                className="btn-message"
                onClick={() => setShowChat(!showChat)}
              >
                Message
              </button>
            </div>

            {showChat && (
              <div className="chat-box">
                <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>
                  Message {profile.name}
                </p>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="chat-input"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}