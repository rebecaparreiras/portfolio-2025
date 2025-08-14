import Header from './components/Header';
import IntroSection from './pages/IntroSection';
import ProjectsSection from './pages/ProjectsSection';
import SliderNav from './components/SliderNav';

const App = () => {
  return (
    <section className="portfolio">
      {/* Header */}
      <header className="primary-header">
        <div className="header-container">
          <div className="nav-wrapper">
            <Header />
          </div>
        </div>
      </header>

      {/* Content with snap */}
      <div className="pages-container">
        <div id="page-1" className="page page-1">
          <IntroSection />
        </div>

        <div id="page-2" className="page page-2">
          <ProjectsSection />
        </div>

        {/* Slider */}
        <SliderNav />
      </div>
    </section>
  )
}

export default App;
