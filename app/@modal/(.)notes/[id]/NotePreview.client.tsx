// 'use client';
// import css from './NotePreview.module.css';
// import { useParams, useRouter } from 'next/navigation'; // useRouter вже імпортований
// import { useQuery } from '@tanstack/react-query';
// import Modal from '@/components/Modal/Modal';
// import { useCallback } from 'react';
// import { fetchNoteById } from '@/lib/api/clientApi';

// const NotePreviewClient = () => {
//   const { id } = useParams();
//   const router = useRouter(); // useRouter вже використовується

//   const { data: note } = useQuery({
//     queryKey: ['note', id],
//     queryFn: () => fetchNoteById(id),
//     refetchOnMount: false,
//   });

//   // Ця функція onClose вже є і викликається при кліку на бекдроп або Esc
//   const onClose = useCallback(() => {
//     router.back();
//   }, [router]);

//   if (!note) return <p>Note not found</p>;

//   const date = new Date(note.createdAt);
//   const formattedDate = date.toLocaleString('uk-UA', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   });

//   return (
//     <Modal onClose={onClose}>
//       <div className={css.container}>
//         <p>{note.tag}</p>
//         <div className={css.item}>
//           <div className={css.header}>
//             <h2>{note.title}</h2>
//             <button className={css.editBtn}>Edit note</button>
//           </div>
//           <p className={css.content}>{note.content}</p>
//           <p className={css.date}>{formattedDate}</p>
//           {/* add Close butoon */}
//           <button onClick={onClose} className={css.closeButton}>
//             Close
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default NotePreviewClient;

/////////////////////////

'use client';
import { useParams, useRouter } from 'next/navigation';
import Modal from '../../../../components/Modal/Modal';
import React from 'react';
import css from './NotePreview.module.css';
import { fetchNoteById } from '@/lib/api/clientApi';
import { useQuery } from '@tanstack/react-query';

const NotePreviewClient = () => {
  const router = useRouter();
  const id = useParams<{ id: string }>().id;
  const closeModal = () => {
    router.back();
  };

  const {
    data: note,
    isLoading,
    error,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={closeModal}>
      {isLoading && <p className={css.loadMessage}>Loading, please wait...</p>}
      {!error && !note && !isLoading && (
        <p className={css.errorMessage}>Not found</p>
      )}
      {isError && <p className={css.errorMessage}>Not found</p>}
      {note && isSuccess && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
              <button className={css.backBtn} onClick={closeModal}>
                Back
              </button>
            </div>
            <p className={css.content}>{note.content}</p>
            <p className={css.tag}>{note.tag}</p>
            <p className={css.date}>
              {note.updatedAt
                ? `Updated at: ${note.updatedAt}`
                : `Created at: ${note.createdAt}`}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default NotePreviewClient;
