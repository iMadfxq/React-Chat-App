import MessageForm from "../message-form/message-form.component"
import ChannelMessages from "../channel-messages/channel-messages.component"

import './channel-chat.styles.scss'

export default function Channel({channelName}) {
  return (
    <section className="channel">
      <header className="channel__header">
        <h2>#{channelName}</h2>
        <button>⌂ Home</button>
      </header>
      <ChannelMessages />
      <MessageForm />
    </section>
  )
}