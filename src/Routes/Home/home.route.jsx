import "./home.styles.scss";

import SetNameModal from "../../Components/setName-modal/setName-modal.component";
import ThemeSelector from "../../Components/theme-selector/theme-selector.component";
import ChannelSelector from "../../Components/channelSelector/channelSelector.component";


export default function Home() {
  return (
    <>
      <main className="main">
        <ThemeSelector />
        <section className="main__title">
          <h1>iMadfxq's Chat</h1>
          <h2>Choose your channel:</h2>
        </section>
        <ChannelSelector />
      </main>
      <SetNameModal />
    </>
  );
}
