import Link from 'next/link';
import { tags } from '@/constants/tags';
import css from './SidebarNotes.module.css';

const allTags = tags.includes('All') ? tags : ['All', ...tags];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {allTags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
