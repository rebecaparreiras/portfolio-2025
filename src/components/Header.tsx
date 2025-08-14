const Header = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-logo">
        <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
      </div>

      <div className="nav-social">
        <ul aria-label="primary" role="list">
          <li className="nav-item">
            <a href="mailto:rebecaparreiras@hotmail.com">
              <span>&lt;/</span>email<span>&gt;</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/rebeca-parreiras/" target="_blank" rel="noreferrer">
              <span>&lt;/</span>linkedin<span>&gt;</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/rebecaparreiras" target="_blank" rel="noreferrer">
              <span>&lt;/</span>github<span>&gt;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
