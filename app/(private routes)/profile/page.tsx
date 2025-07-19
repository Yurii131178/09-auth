import Link from 'next/link';
import css from './ProfilePage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'User Profile Page',
  openGraph: {
    title: 'Profile',
    description: 'User Profile Page',
    url: 'https://profile',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub 404',
      },
    ],
  },
};

const Profile = () => {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <img
            src="/user-profile-icon.jpg"
            alt="User Avatar"
            width={240}
            height={240}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
