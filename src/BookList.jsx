import { For } from 'solid-js';

export default function Booklist(props) {
  const totalBooks = () => props.books.length;

  return (
    <>
      <h2>Library ({totalBooks()})</h2>
      <ul className='marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500'>
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title}
                <span style={{ 'font-style': 'italic' }}> ({book.author})</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
