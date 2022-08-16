import { createSignal } from 'solid-js';


export default function AddBook(props) {
  const emptyBook = { title: '', author: '' };

  const [newBook, setNewBook] = createSignal(emptyBook);

  const addBook = () => {
  props.setBooks((books) => [...books, newBook()]);
    setNewBook(emptyBook);
  };
  return (
    <div>
      <div>
        <label for='title'>Book name</label>
        <input
          id='title'
          value={newBook().title}
          onInput={(e) => {setNewBook({...newBook(), title: e.currentTarget.value})} } />
      </div>
      <div>
        <label for='author'>Author</label>
        <input
        id='author'
        value={newBook().author}
        onInput={ (e) => {setNewBook({ ...newBook(), author: e.currentTarget.value})} }/>
      </div>
      <button  onClick={addBook}>
        Add Book
      </button>
    </div>
  );
}
