import { useEffect, useState } from 'react';

const SliderNav = () => {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.page'))

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive((entry.target as HTMLElement).id)
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 })
    sections.forEach((s) => observer.observe(s))

    return () => {
      sections.forEach((s) => observer.unobserve(s))
      observer.disconnect()
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="slider-nav">
      <a
        href="#page-1"
        className={active === 'page-1' ? 'active' : ''}
        onClick={(e) => handleClick(e, 'page-1')}
      />
      <a
        href="#page-2"
        className={active === 'page-2' ? 'active' : ''}
        onClick={(e) => handleClick(e, 'page-2')}
      />
    </div>
  )
}

export default SliderNav;
