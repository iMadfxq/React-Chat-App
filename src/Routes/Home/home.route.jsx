import "./home.styles.scss";

import SetNameModal from "../../Components/setName-modal/setName-modal.component";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate(e.target.dataset.chat)
  }
  return (
    <>
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
            <button onClick={handleClick} data-chat='General'>Visit this chat</button>
          </article>
          <article className="main__channelSelector--jobs">
            <h3>Jobs</h3>
            <ul>
              <li>Look for my portfolio</li>
              <li>Find my resume</li>
              <li>Contact me</li>
            </ul>
            <button onClick={handleClick} data-chat='Jobs' >Visit this chat</button>
          </article>
        </section>
      </main>
      <SetNameModal />
    </>
  );
}
