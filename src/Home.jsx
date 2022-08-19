import { Show } from 'solid-js';

export default function Home(props) {
  return (
    <Show
      when={props.isLoggedin}
      fallback={
        <>
          <div>Welcome to the application.Please sign in to continue</div>
          <SignInForm />
        </>
      }
    >
      <div>Welcome back, {props.firstName}</div>
      <Dashboard />
    </Show>
  );
}
