import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import { projects } from './data/projects';

// Swap for a local import (e.g. `import heroImage from './assets/hero.jpg'`)
// once you have a real portrait to use.
const heroImage =
  'https://images.unsplash.com/photo-1504198453758-9007086ae7de?q=80&w=1600&auto=format&fit=crop';

/**
 * Section registry.
 *
 * To add a new section later:
 *   1. Build it under src/components/sections/<Name>/<Name>.jsx
 *   2. Import it above
 *   3. Push { id, Component, props } into this array, in the order
 *      it should appear on the page.
 *
 * Nothing else in App has to change — the page is just a render of
 * this list, so sections can be reordered, added to, or removed here.
 */
const sections = [
  {
    id: 'home',
    Component: Hero,
    props: { image: heroImage },
  },
  {
    id: 'projects',
    Component: Projects,
    props: { projects },
  },
  // Next section goes here, e.g.:
  // { id: 'skills', Component: Skills, props: { skills } },
];

export default function App() {
  return (
    <>
      <Navbar notificationCount={3} cvHref="/rahul-cv.pdf" />
      <main>
        {sections.map(({ id, Component, props }) => (
          <Component key={id} {...props} />
        ))}
      </main>
    </>
  );
}
