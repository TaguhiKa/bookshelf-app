import { createSignal } from "solid-js";
import { Booklist } from "./BookList";
import { AddBook } from "./AddBook";

const initialBooks = [
  { title: "L`amant", author: "Marguerite Duras" },
  { title: "We will allways have Paris", author: "Emma Beddington" },
  { title: "Modern Man in Search of a Soul", author: "C.C. Jung" },
];

function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks);

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <Booklist books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
}

function App() {
  return <Bookshelf name="Taguhi" />;
}

export default App;
