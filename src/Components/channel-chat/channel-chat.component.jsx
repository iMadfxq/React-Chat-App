import MessageForm from "../message-form/message-form.component"

import './channel-chat.styles.scss'

export default function Channel({channelName}) {
  return (
    <section className="channel">
      <header className="channel__header">
        <h2>#{channelName}</h2>
        <button>⌂ Home</button>
      </header>
      <section className="channel__messages">
        <article>
          <p>Message</p>
          <span>Date</span>
        </article>
      </section>
      <MessageForm />
    </section>
  )
}