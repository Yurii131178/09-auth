import Link from 'next/link';
import css from './ProfilePage.module.css';
import { Metadata } from 'next';
import Image from 'next/image';
import { getServerUser } from '@/lib/api/serverApi';

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
        alt: 'NoteHub notebook icon and logo',
      },
    ],
  },
};

const Profile = async () => {
  const user = await getServerUser();
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
          <Image
            src={user?.avatar || '/public/blue-avatar.jpg'}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username} </p>
          <p>Email: {user.email} </p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
