import './home.styles.scss'

export default function Home() {
  return (
    <main className='main'>
      <button>theme</button>
      <h1>iMadfxq's Chat</h1>
      <h2>Choose your channel</h2>
      <section className="main__channelSelector">
        <article className='main__channelSelector--general'>
          <h3>General</h3>
          <ul>
            <li>Send a greeting</li>
            <li>Ask how my journey has been</li>
            <li>Tell people why you like cats so much</li>
          </ul>
        </article>
        <article className='main__channelSelector--jobs'>
          <h3>Jobs</h3>
          <ul>
            <li>Look for my portfolio</li>
            <li>Find my resume</li>
            <li>Contact me</li>
          </ul>
        </article>
      </section>
    </main>
  )
}