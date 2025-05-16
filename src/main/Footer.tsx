import logo from '/logos/logo.svg'

function Footer() {
  return (
    <footer className="w-full max-w-screen-2xl py-8 px-8 bg-[#143059] dark:bg-[#101726] text-white flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
      <div className="flex items-center gap-3">
        <img src={logo} alt="App Logo" className="h-8 w-auto" />
        <span className="font-bold">AppName</span>
      </div>
      <div className="flex gap-6 text-sm">
        <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Twitter</a>
      </div>
      <div className="text-xs opacity-70">© {new Date().getFullYear()} AppName. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
