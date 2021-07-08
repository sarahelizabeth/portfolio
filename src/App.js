import { NavSidebar } from './NavSidebar';
import { Home } from './Home';
import { About } from './About';
import { Education } from './Education';
import { Experience } from './Experience';

import 'rsuite/dist/styles/rsuite-default.css';
// import './scss/App.scss';

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Education />
      <NavSidebar />
    </>
  );
}

export default App;
