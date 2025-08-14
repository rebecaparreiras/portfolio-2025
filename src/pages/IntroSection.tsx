const IntroSection = () => {
  return (
    <>
      <div className="intro-text">
        <div className="presentation-text">
          <h1>
            Olá, sou Rebeca!<br />
            <span className="ff-secondary">Dev. Front-end</span><br />
          </h1>
        </div>

        <div className="info-text">
          <h3>
            <span>&lt;</span>Especializada em criar projetos que unem lógica e estética<span> /&gt;</span>
          </h3>
        </div>
      </div>

      <div className="stacks">
        <div className="stacks-btn">
          {['HTML','CSS','SASS','ReactJS','TypeScript','JavaScript','VueJS','PHP','NodeJS','Express','JSON','Git', 'GitHub','UIX'].map(s => (
            <button key={s}>{s}</button>
          ))}
        </div>
      </div>
    </>
  )
}

export default IntroSection;
