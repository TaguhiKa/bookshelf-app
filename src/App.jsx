import { createSignal, Show } from 'solid-js';

import Booklist  from './BookList';
import AddBook  from './AddBook';

const initialBooks = [
  { title: 'L`amant', author: 'Marguerite Duras' },
  { title: 'We will allways have Paris', author: 'Emma Beddington' },
  { title: 'Modern Man in Search of a Soul', author: 'C.C. Jung' },
];

function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);

  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <Booklist books={books()} />
      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a book</button>}
      >
      <AddBook setBooks={setBooks} />
      <button onClick={toggleForm}>Done</button>
      </Show>
    </div>
  );
}

function App() {
  return (
  <Bookshelf name='Taguhi' />
  );
}

export default App;
