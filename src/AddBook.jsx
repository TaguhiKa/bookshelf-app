import { createSignal, createResource, For, Show } from 'solid-js';
import { searchBooks } from './searchBooks';

export default function AddBook(props) {
  const [input, setInput] = createSignal(' ');
  const [query, setQuery] = createSignal(' ');

  const [data] = createResource(query, searchBooks);

  return (
    <>
      <form>
        <div className='mb-3 xl:w-96'>
          <label for='title'>Search books</label>
          <input className='form-control relative flex-auto min-w-0 block w-48 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='title'
          value={input()}
          onInput={ (e) => {setInput(e.currentTarget.value)} }/>
        </div>
        <button className='btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
          type='submit'
          onClick={(e) => {
          e.preventDefault();
          setQuery(input());
          }}
        >
          Search
        </button>
      </form>
      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul>
          <For each={data()}>
            {(book) => (
              <li>
                {book.title} by {book.author}{" "}
                <button className='btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                  aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={(e) => {
                    e.preventDefault();
                    props.setBooks((books) => [...books, book]);
                  }}
                >
                  Add
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  );
}
