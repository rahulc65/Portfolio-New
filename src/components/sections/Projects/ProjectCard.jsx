import Chip from '../../ui/Chip';

/** ProjectCard — one project thumbnail with its stack tags, status and title. */
export default function ProjectCard({ project }) {
  const { title, image, stack = [], status } = project;

  return (
    <article className="project-card group flex flex-col">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0c0c0c]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-[1.035]"
        />
      </div>

      <div className="mt-[18px] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {stack.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        {status && <Chip tone={status.tone === 'accent' ? 'accent' : 'dark'}>{status.label}</Chip>}
      </div>

      <h3 className="mt-3.5 font-display text-2xl font-bold uppercase tracking-[-0.01em] sm:text-[26px]">
        {title}
      </h3>
    </article>
  );
}
