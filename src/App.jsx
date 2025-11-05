import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
          © 2025 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
