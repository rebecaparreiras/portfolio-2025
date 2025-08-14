import { useEffect, useRef, useState, useId } from 'react';

type Props = {
  title: string
  description: string
  github: string
  stacks: string[]
  url: string
  className?: string
}

const ProjectCard = ({ title, description, github, stacks, url, className }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const descId = useId();

  const [lineHeightPx, setLineHeightPx] = useState<number>(24);
  const [fullHeight, setFullHeight] = useState<number>(0);

  const measure = () => {
    const wrap = wrapRef.current
    if (!wrap) return
    const p = wrap.querySelector('.project-desc') as HTMLElement | null
    if (p) {
      const cs = getComputedStyle(p)
      const lhStr = cs.lineHeight
      const fs = parseFloat(cs.fontSize || '16')
      const lh =
        lhStr === 'normal' || Number.isNaN(parseFloat(lhStr))
          ? Math.round(fs * 1.5)
          : Math.round(parseFloat(lhStr))

      setLineHeightPx(lh);
    }
    setFullHeight(wrap.scrollHeight);
  }

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(() => measure())
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [description]);

  {/* 2 lines visible */}
  const collapsedHeight = lineHeightPx * 3;
  
  return (
    <div className={`project ${className ?? ''}`}>
      <div className="projects-info">
        {/* Title */}
        <h3>
          <span>&lt;</span>{title}<span>&gt;</span>
        </h3>

        {/* Description + fade-out */}
        <div
          ref={wrapRef}
          className="desc-wrap"
          aria-live="polite"
          style={{
            position: 'relative',
            overflow: 'hidden',
            maxHeight: expanded ? fullHeight : collapsedHeight,
            transition: 'max-height 240ms ease',
            willChange: 'max-height'
          }}
        >
          <p id={descId} className="project-desc">
            {description}
          </p>

          {/* Vertical fade */}
          {!expanded && <span className="desc-fade-vert" aria-hidden="true" />}
        </div>

        {/* Expanded button */}
        <button
          className="desc-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls={descId}
          onClick={() => setExpanded(v => !v)}
          title={expanded ? 'Mostrar menos' : 'Mostrar mais'}
        >
          <span aria-hidden>{expanded ? '−' : '+'}</span>
          <span className="sr-only">
            {expanded ? 'Mostrar menos' : 'Mostrar mais'} sobre {title}
          </span>
        </button>
        
        {/* GitHub link */}
        <a href={github} target="_blank" rel="noreferrer">
          <p className="github-link">GitHub &rarr;</p>
        </a>
      </div>
      
      <div className="project-details">
        {/* Stacks */}
        <div className="project-stacks">
          {stacks.map(s => <button key={s}>{s}</button>)}
        </div>
        
        {/* Deploy link */}
        <a href={url} target="_blank" rel="noreferrer">
          <i className="ri-arrow-right-up-line" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;
