/* eslint-disable react/no-unescaped-entities */
import { Header } from "../../components";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <h1>What this site is about?</h1>
        <p>
          I've made this site to center what I learn in a single place. This
          whole idea came from the <strong>learn in public</strong> method, and
          my will to try new technologies and improve my understandment of
          another ones.
        </p>
      </main>
      <section>
        <h2>Who am I?</h2>
        {/*
         TODO: write a bio
         */}
        <p>My name is Gabriel Chaves, I'm a software developer. </p>
      </section>
    </>
  );
};
