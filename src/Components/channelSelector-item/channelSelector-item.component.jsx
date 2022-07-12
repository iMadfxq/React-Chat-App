import './channelSelector-item.styles.scss'

import { useNavigate } from "react-router";

export default function ChannelSelectorItem({ title, topics }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.dataset.chat);
  };

  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {topics.map((topic) => (
          <li>{topic}</li>
        ))}
      </ul>
      <button onClick={handleClick} data-chat={title}>
        Visit this chat
      </button>
    </article>
  );
}
