import "./home.styles.scss";

export default function Home() {
  return (
    <main className="main">
      <button className="main__themeSelector">theme</button>
      <section className="main__title">
        <h1>iMadfxq's Chat</h1>
        <h2>Choose your channel:</h2>
      </section>
      <section className="main__channelSelector">
        <article className="main__channelSelector--general">
          <h3>General</h3>
          <ul>
            <li>Send a greeting</li>
            <li>Ask about my journey</li>
            <li>Tell some jokes</li>
          </ul>
          <button>Visit this chat</button>
        </article>
        <article className="main__channelSelector--jobs">
          <h3>Jobs</h3>
          <ul>
            <li>Look for my portfolio</li>
            <li>Find my resume</li>
            <li>Contact me</li>
          </ul>
          <button>Visit this chat</button>
        </article>
      </section>
    </main>
  );
}
