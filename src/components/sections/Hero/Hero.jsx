import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Eyebrow from '../../ui/Eyebrow';
import PillButton from '../../ui/PillButton';
import Container from '../../ui/Container';

/**
 * Hero
 * Landing section: oversized name, about blurb and primary CTAs
 * over a full-bleed portrait. Content is passed as props so a
 * different name/copy/image can be dropped in without editing markup.
 */
export default function Hero({
  name = 'Rahul',
  role = 'full-stack web developer',
  bio = "Hello and welcome to my digital portfolio. I'm a passionate full-stack web developer dedicated to building engaging web experiences. Explore my Portfolio",
  image,
  primaryCta = { label: 'Get in touch', href: '#contact' },
  secondaryCta = { label: 'View my works', href: '#projects' },
}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero__name-part', {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.06,
      })
        .from('.hero__mark', { autoAlpha: 0, scale: 0.6, duration: 0.6 }, '-=0.5')
        .from(
          '.hero__about, .hero__cta',
          { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .from('.hero__image', { autoAlpha: 0, scale: 1.06, duration: 1 }, '-=0.6');
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={rootRef} className="bg-bg">
      <Container className="flex items-start justify-between gap-10 pt-3 max-[860px]:flex-col max-[860px]:gap-5">
        <h1
          aria-label={name}
          className="m-0 inline-flex items-start font-display text-[clamp(72px,13vw,200px)] font-extrabold leading-[0.86] tracking-[-0.04em] text-ink"
        >
          <span className="inline-block overflow-hidden">
            <span className="hero__name-part text-[320px] tracking-[-0.04em] font-body inline-block">{name}</span>
          </span>
          <span className="hero__mark ml-[0.01em] text-[170px] font-body leading-none -translate-y-[31px]" aria-hidden="true">
            ©
          </span>
        </h1>

       <div className="hero__about shrink-0 max-w-[420px] self-end max-[860px]:self-start max-[860px]:max-w-none">
       <Eyebrow>About me</Eyebrow>
       <p className="mt-2.5 text-base leading-[1.55] text-ink-soft">{bio}</p>
      </div>
      </Container>

      <Container className="mt-9 mb-10 flex flex-wrap items-center justify-between gap-6 max-[860px]:justify-start">
        <div className="hero__cta flex flex-wrap gap-3.5">
          <PillButton as="a" href={primaryCta.href}>
            {primaryCta.label}
          </PillButton>
          <PillButton as="a" href={secondaryCta.href}>
            {secondaryCta.label}
          </PillButton>
        </div>
        <p className="m-0 text-sm text-ink-soft max-[860px]:order-3">( Scroll down ↓ )</p>
      </Container>

      <div className="hero__image relative aspect-[16/9] w-full overflow-hidden bg-linear-to-br from-[#7a2b0c] via-[#d9631f] to-[#2a1006] max-[860px]:aspect-[4/5]">
        {image && (
          <img src={image} alt={`${name}, ${role}`} className="h-full w-full object-cover" />
        )}
      </div>
    </section>
  );
}
