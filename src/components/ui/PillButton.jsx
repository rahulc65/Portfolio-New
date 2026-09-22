/**
 * PillButton
 * Rounded pill used for primary/secondary calls to action across sections.
 *
 * variant: 'outline' | 'solid'
 * as: 'button' | 'a'
 */
export default function PillButton({
  children,
  variant = 'outline',
  icon = 'arrow',
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as;

  const base =
    'group inline-flex items-center gap-2.5 rounded-pill border px-[22px] py-[14px] text-[15px] font-medium cursor-pointer transition-all duration-[250ms] ease-brand hover:-translate-y-px';

  const variants = {
    outline: 'border-ink text-ink bg-transparent',
    solid: 'border-ink bg-ink text-bg-raised',
  };

  const iconTone = {
    outline: 'bg-accent text-white',
    solid: 'bg-bg-raised text-ink',
  };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {icon === 'arrow' && (
        <span
          aria-hidden="true"
          className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-brand group-hover:rotate-45 ${iconTone[variant]}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      {icon === 'download' && (
        <span
          aria-hidden="true"
          className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-brand group-hover:rotate-45 ${iconTone[variant]}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1.5V8M6 8L3.2 5.2M6 8L8.8 5.2M2 10H10"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </Tag>
  );
}
