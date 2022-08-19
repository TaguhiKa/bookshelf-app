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

  const toggleButton = () =>
  <button onClick={toggleForm}>
    Add a book
  </button>

  return (
    <div>
      <h1 className='text-3xl text-[#243c5a]  400 text-center py-6'>{props.name}'s Bookshelf</h1>
      <Booklist books={books()} />
      <Show
        when={showForm()}
        fallback= {toggleButton}
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
