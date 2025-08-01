import React from 'react';
import { CheckCircle, Award, Code, Users, Laptop } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

import About from '../components/shared/about';

import { useEffect, useState } from 'react';
import axios from 'axios';

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Code,
  Award,
};

const AboutPage = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  type Skill = { skillName: string; skillPercentage: number };
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    try {
      const fetchSkills = async () => {
        const response = await axios.get(`${baseUrl}/api/skills`);
        setSkills(response.data);
      };
      fetchSkills();
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  }, []);

  useEffect(() => {
    // Fetch experiences
    axios.get(`${baseUrl}/api/experiences`)
      .then(res => setExperiences(res.data))
      .catch(err => console.error('Error fetching experiences:', err));
  }, []);

  // Separate work and education
  const work = experiences.filter(e => e.type === 'work');
  const education = experiences.filter(e => e.type === 'education');
  const maxLength = Math.max(work.length, education.length);

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
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Crafting exceptional digital experiences through creative And Animated designs and clean code
            </p>
          </div>
        </div>
      </section>


      <About alignment={window.innerWidth >= 1024 ? 'right' : 'left'} />
      {/* Skills Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="MY EXPERTISE"
            title="Skills & Technologies"
            description="A comprehensive range of technical skills and design expertise to bring your vision to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.skillName}</span>
                  <span className="text-gray-600">{skill.skillPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${skill.skillPercentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="MY JOURNEY"
            title="Experience & Education"
            description="My professional background and educational qualifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[...Array(maxLength)].map((_, idx) => (
              <React.Fragment key={idx}>
                {/* Experience column */}
                <div>
                  {work[idx] && (
                    <div className="relative pl-10 pb-8 border-l-2 border-primary-200">
                      <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary-600 p-2 rounded-full">
                        {(() => {
                          const Icon = iconMap[work[idx].icon] || Laptop;
                          return <Icon className="text-white" size={16} />;
                        })()}
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                          {work[idx].year}
                        </span>
                        <h4 className="text-xl font-semibold text-gray-900">{work[idx].title}</h4>
                        {work[idx].subtitle && <p className="text-gray-600 italic">{work[idx].subtitle}</p>}
                      </div>
                      <p className="text-gray-700">{work[idx].description}</p>
                    </div>
                  )}
                </div>
                {/* Education column */}
                <div>
                  {education[idx] && (
                    <div className="relative pl-10 pb-8 border-l-2 border-secondary-200">
                      <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary-600 p-2 rounded-full">
                        {(() => {
                          const Icon = iconMap[education[idx].icon] || Award;
                          return <Icon className="text-white" size={16} />;
                        })()}
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full mb-2">
                          {education[idx].year}
                        </span>
                        <h4 className="text-xl font-semibold text-gray-900">{education[idx].title}</h4>
                        {education[idx].subtitle && <p className="text-gray-600 italic">{education[idx].subtitle}</p>}
                      </div>
                      <p className="text-gray-700">{education[idx].description}</p>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Values Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading
                subtitle="MY VALUES"
                title="What I Believe In"
                description="The core principles that guide my work and client relationships."
                alignment="left"
              />

              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Quality First</h3>
                    <p className="text-gray-600">
                      Delivering the highest quality work with attention to every detail.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Clear Communication</h3>
                    <p className="text-gray-600">
                      Maintaining transparent and regular communication throughout projects.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Client Success</h3>
                    <p className="text-gray-600">
                      Focusing on solutions that drive real business results.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Continuous Learning</h3>
                    <p className="text-gray-600">
                      Staying updated with the latest technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;