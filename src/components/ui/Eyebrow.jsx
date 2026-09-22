/** Eyebrow — small parenthesised label used to introduce a block of content. */
export default function Eyebrow({ children, className = '' }) {
  return <p className={`m-0 text-[15px] text-ink-soft ${className}`}>( {children} )</p>;
}
