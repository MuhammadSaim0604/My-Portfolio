
import SectionHeading from './SectionHeading';

type AboutProps = {
  alignment?: 'left' | 'right'; // optional with default
};

const About: React.FC<AboutProps> = ({ alignment = 'left' }) => {
    return (
        <div>
            {/* Biography Section */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {alignment == 'left' && <div className="lg:w-2/5">
                        
                            <img
                                src="/profileimage.png"
                                alt="Muhammad Saim"
                                className="rounded-lg shadow-xl"
                            />
                        </div>}
                        <div className="lg:w-3/5">
                            <SectionHeading
                                subtitle="MY STORY"
                                title="Hi, I'm Muhammad Saim"
                                description="Full stack Developer and Wordpress designer with a passion for creating beautiful, functional websites."
                                alignment="left"
                                career="Software Engineer"
                            />
                            <p className="text-gray-700 mb-6">
                                I’m a self-taught full-stack developer with a versatile skill set covering both code and no-code technologies. My core expertise lies in the MERN stack, along with hands-on experience in Next.js, Django, and building complete eCommerce websites using WordPress and WooCommerce. I specialize in crafting responsive, user-friendly interfaces using React, animated smoothly with GSAP, and backed by scalable APIs built with Node.js and MongoDB.
                            </p>
                            <p className="text-gray-700 mb-6">
                                I'm also skilled in using automation and AI tools like Replit AI Agents, n8n for workflow automation, and Botpress for developing conversational AI chatbots. My AI experience includes video generation, content creation, and working with generative AI platforms to enhance creativity and productivity.
                            </p>
                            <p className="text-gray-700 mb-6">
                                In addition, I’ve explored Meta Ads for digital marketing campaigns, and have a basic understanding of networking, cybersecurity, and penetration testing. From designing admin dashboards to creating mobile-optimized layouts and Creating COmpletely fully Animated Applications programmatically, I bring a well-rounded and ever-evolving tech perspective to everything I build.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Based in Bahawalnagar, Punjab, Pakistan, I work with clients worldwide to create impactful digital experiences that drive results.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8 justify-center">
                                <a
                                    href="https://github.com/MuhammadSaim0604"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    GitHub Profile
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/muhammad-saim-009354377"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        {alignment == 'right' && <div className="lg:w-2/5">
                            <img
                                src="/profileimage.png"
                                alt="Muhammad Saim"
                                className="rounded-lg shadow-xl"
                            />
                        </div>}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
