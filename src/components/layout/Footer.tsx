export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="font-display-lg text-primary text-[24px]">RK</div>
        <div className="text-on-surface-variant font-label-caps text-label-caps text-center md:text-left">
          Designed & built by Roushan Kumar Mourya © 2026
        </div>
        <div className="flex gap-8">
          <a
            className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-label-caps text-label-caps"
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-label-caps text-label-caps"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-label-caps text-label-caps"
            href="/Roushan_Resume.pdf"
            download="Roushan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
