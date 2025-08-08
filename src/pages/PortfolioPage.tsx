import { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  client: string;
  date: string;
  link?: string;
}

const PortfolioPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(`${baseUrl}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter
    ? projects.filter(project => project.category === filter)
    : projects;

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-80"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-slide-up">
              My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              A showcase of my recent projects and client work
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="MY WORK"
            title="Recent Projects"
            description="Take a look at some of the projects I've worked on recently."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category === 'All' ? null : category)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${(category === 'All' && filter === null) || category === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card overflow-hidden cursor-pointer group"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <button className="btn bg-white hover:bg-gray-100 text-primary-600 text-sm py-2">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-sm font-medium text-primary-600">{project.category}</span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-auto overflow-hidden shadow-xl animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover"
              />
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-sm font-medium text-primary-600 block mb-1">{selectedProject.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Visit Live</span>
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-500 text-sm">Client</p>
                      <p className="font-medium">{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Date</p>
                      <p className="font-medium">{selectedProject.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Category</p>
                      <p className="font-medium">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={closeProjectDetails}
                  className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <p className="text-primary-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">75+</div>
              <p className="text-primary-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-primary-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="TRUSTED BY"
            title="Clients I've Worked With"
            description="Proud to have collaborated with these amazing businesses."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                <div className="text-center text-lg font-bold text-gray-400">
                  LOGO {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;