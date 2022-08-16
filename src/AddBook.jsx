import { createSignal } from "solid-js";

const emptyBook = { title: "", author: "" };

export function AddBook(props) {
  const [newBook, setNewbook] = createSignal(emptyBook);

  const addBook = (event) => {
    event.preventDefault();
    props.setBooks((books) => [...books, newBook()]);
    setNewbook(emptyBook);
  };
  return (
    <form>
      <div>
        <label for="title">Book name</label>
        <input
          id="title"
          value={newBook().title}
          onInput={(e) => {
            setNewbook({ ...newBook(), title: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label for="author">Author</label>
        <input
          id="author"
          value={newBook().author}
          onInput={(e) => {
            setNewbook({ ...newBook(), author: e.currentTarget.value });
          }}
        />
      </div>
      <button type="submit" onClick={addBook}>
        Add Book
      </button>
    </form>
  );
}
