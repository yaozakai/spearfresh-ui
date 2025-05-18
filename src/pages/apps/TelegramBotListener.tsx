import logo from '/logos/logo.svg';
import SubNavBar from "../../main/SubNavBar";

function TelegramBotListener() {
  return (
    <main className="flex-1 w-full flex flex-col pt-12">
      <SubNavBar title="Telegram Bot Listener" links={[]} />
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col gap-6">
          <div className="items-center space-y-2">
            <div className="pill flex items-center gap-1 w-fit">
              <img src={logo} alt="App Logo" className="h-8" />
              Telegram Bot Listener
            </div>
            <h1 className="h5">Monitor Telegram Channels & Report to monday.com</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-xl">This app helps you listen to conversations in Telegram channels where your bot is present, and automatically reports relevant messages or summaries into your monday.com board. Great for tracking sentiment, mentions, or key topics in real time.</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[340px] h-[220px] bg-gray-200 dark:bg-[#1a2332] rounded-xl shadow-inner flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg">Telegram Listener Demo</div>
        </div>
      </section>
      <section className="w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8">
        <h2 className="h2 mb-4">How it Works</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Add the Telegram bot to your desired channels or groups.</li>
          <li>Configure keywords, topics, or users to monitor.</li>
          <li>The bot listens for new messages and summarizes or forwards them to your monday.com board.</li>
          <li>Review and analyze the results in your monday.com workflow.</li>
        </ol>
        <p className="mt-4 text-gray-500 dark:text-gray-400">(Integration setup and customization coming soon!)</p>
      </section>
    </main>
  );
}

export default TelegramBotListener;
