import PillButton from '../ui/PillButton';
import Container from '../ui/Container';

export default function Navbar({ notificationCount = 0, onMenuClick, cvHref = '#' }) {
  return (
    <header className="sticky top-0 z-40 bg-bg">
      <Container className="flex items-center justify-between py-[22px]">

        <div className="ml-auto flex items-center gap-3">
          {notificationCount > 0 && (
            <span
              aria-label={`${notificationCount} notifications`}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-accent text-[13px] font-semibold text-white"
            >
              {notificationCount}
            </span>
          )}

          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-pill bg-ink px-4 py-2.5 text-sm font-medium text-bg-raised transition-all duration-200 ease-brand hover:-translate-y-px hover:opacity-85 sm:px-[22px] sm:text-[15px]"
          >
            Menu
          </button>

          <PillButton as="a" href={cvHref} variant="solid" icon="download">
            Download CV
          </PillButton>
        </div>

      </Container>
    </header>
  );
}