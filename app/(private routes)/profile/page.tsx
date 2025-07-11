import Link from 'next/link';
import css from './Profile.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Profile - NoteHub',
  description:
    'View and manage your personal profile details and settings on NoteHub',
  keywords: ['profile', 'user settings', 'account', 'personal info', 'NoteHub'],
  openGraph: {
    title: 'Your Profile - NoteHub',
    description:
      'View and manage your personal profile details and settings on NoteHub',
    url: 'https://08-zustand-theta.vercel.app/notes/action/create', // replace with 09-auth, once deployed on Vercel
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        alt: 'NoteHub - Note Management App Logo',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

const Profile = () => {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href={'/profile/edit'} className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <img
            src="Avatar"
            alt="User Avatar"
            width={120}
            height={120}
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
