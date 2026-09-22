import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Eyebrow from '../../ui/Eyebrow';
import Container from '../../ui/Container';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

/**
 * Projects
 * Section intro + a grid/list of project cards. `projects` is passed
 * in as data so this component has no hardcoded content of its own.
 */
export default function Projects({
  projects = [],
  intro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
}) {
  const [view, setView] = useState('grid');
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        autoAlpha: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.projects__grid',
          start: 'top 85%',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [view]);

  const toggleBase =
    'rounded-pill border border-ink px-[18px] py-2.5 text-[13px] font-semibold uppercase tracking-[0.02em] cursor-pointer transition-colors duration-250 ease-brand';

  return (
    <section id="projects" ref={rootRef} className="py-[clamp(48px,8vw,96px)]">
      <Container className="mb-[clamp(40px,6vw,72px)] flex items-start justify-between gap-12 max-[860px]:flex-col max-[860px]:gap-6">
        <div>
          <Eyebrow>Projects</Eyebrow>
          <div className="mt-3.5 inline-flex gap-2.5" role="tablist" aria-label="Project layout">
            <button
              type="button"
              role="tab"
              aria-selected={view === 'grid'}
              onClick={() => setView('grid')}
              className={`${toggleBase} ${
                view === 'grid'
                  ? 'border-accent bg-accent text-white'
                  : 'bg-transparent text-ink'
              }`}
            >
              Grid view
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === 'list'}
              onClick={() => setView('list')}
              className={`${toggleBase} ${
                view === 'list'
                  ? 'border-accent bg-accent text-white'
                  : 'bg-transparent text-ink'
              }`}
            >
              List view
            </button>
          </div>
        </div>

        <p className="m-0 max-w-[520px] text-[clamp(20px,2.4vw,28px)] leading-[1.35] tracking-[-0.01em]">
          {intro}
        </p>
      </Container>

      <Container
        className={`projects__grid grid gap-x-6 gap-y-7 sm:gap-x-12 sm:gap-y-12 ${
          view === 'grid'
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 max-w-[820px]'
        }`}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </section>
  );
}
