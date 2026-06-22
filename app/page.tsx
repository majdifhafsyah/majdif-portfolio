import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { certificates, experiences, profile, projects, services, skillItems } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <div className="pageDecor decorOne" aria-hidden="true" />
      <div className="pageDecor decorTwo" aria-hidden="true" />
      <div className="pageDecor decorThree" aria-hidden="true" />

      <Navbar />

      <section id="home" className="hero sectionShell">
        <div className="heroContent animateIn delayOne">
          <p className="eyebrow">Personal portfolio</p>
          <h2>Hi, I’m <span>{profile.shortName}</span>.</h2>
          <p className="rolePill">{profile.role}</p>
          <p className="heroHeadline">{profile.headline}</p>
          <p className="heroSummary">{profile.summary}</p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">View projects</a>
            <a className="secondaryButton" href={`mailto:${profile.email}`}>Contact me</a>
          </div>
          <div className="socialLinks">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <div className="miniStack" aria-label="Technology focus">
            <span>Laravel</span>
            <span>REST API</span>
            <span>Dashboard</span>
            <span>C#</span>
          </div>
        </div>

        <div className="heroVisual animateIn delayTwo" aria-label="Profile photo">
          <div className="profileGlow" aria-hidden="true" />
          <div className="orbitBadge orbitOne">API</div>
          <div className="orbitBadge orbitTwo">DB</div>
          <div className="imageFrame mainFrame">
            <Image
              src={profile.heroImage}
              alt={`${profile.name} professional profile photo`}
              width={1000}
              height={1250}
              priority
            />
          </div>
          <div className="floatingCard">
            <span>Current focus</span>
            <strong>Backend • REST API • Dashboard</strong>
          </div>
        </div>
      </section>

      <section id="about" className="sectionShell aboutSection aboutWithPhoto">
        <div className="aboutVisual animateInOnScroll delayOne" aria-label="About profile photo">
          <div className="aboutGlow" aria-hidden="true" />
          <div className="aboutPhotoFrame">
            <Image
              src={profile.aboutImage}
              alt={`${profile.name} casual profile photo`}
              width={1200}
              height={1600}
            />
          </div>
          <div className="aboutBadge aboutBadgeOne">Laravel</div>
          <div className="aboutBadge aboutBadgeTwo">Clean Code</div>
          <div className="aboutFocusCard">
            <span>Development style</span>
            <strong>Structured • Practical • Maintainable</strong>
          </div>
        </div>

        <div className="aboutCopy animateInOnScroll delayTwo">
          <SectionHeading
            eyebrow="About me"
            title="I develop structured systems for real business workflows."
            description="My work focuses on turning operational needs into reliable applications, especially systems that manage data, users, processes, and reports."
          />
          <p className="bodyText">
            I am interested in building software that is useful, organized, and easy to maintain. My development approach emphasizes clean logic, clear data flow, and practical features that help users complete their work more efficiently.
          </p>
        </div>
      </section>

      {/* <section id="services" className="sectionShell">
        <div className="animateInOnScroll">
          <SectionHeading
            eyebrow="What I build"
            title="Focused on practical web systems."
            description="These are the areas I want to highlight in my portfolio as a developer."
          />
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard animateInOnScroll" key={service.title} style={{ animationDelay: `${index * 120}ms` }}>
              <span className="serviceIcon">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section id="experience" className="sectionShell experienceSection">
        <div className="animateInOnScroll centeredHeading">
          <SectionHeading
            eyebrow="Experience"
            title="Work experience"
            description="A concise overview of my development experience and the type of systems I have worked on."
          />
        </div>
        <div className="experienceList">
          {experiences.map((experience, index) => (
            <article className="experienceCard animateInOnScroll" key={`${experience.role}-${experience.company}`} style={{ animationDelay: `${index * 120}ms` }}>
              <div className="experienceHeader">
                <div className="experienceIcon" aria-hidden="true">▣</div>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="companyName">{experience.company}</p>
                </div>
                <div className="experienceMeta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <p className="experienceDescription">{experience.description}</p>
              <div className="experienceHighlights">
                {experience.highlights.map((item) => (
                  <p key={item}><span aria-hidden="true">•</span>{item}</p>
                ))}
              </div>
              <div className="experienceTech">
                <p className="techLabel">Technology used</p>
                <div className="tagList">
                  {experience.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="sectionShell projectSection">
        <div className="animateInOnScroll">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            description="A horizontal project showcase. Add more projects later and they will line up side by side with smooth sideways scrolling."
          />
        </div>
        <div className="projectScroller" aria-label="Scrollable project cards">
          {projects.map((project, index) => <ProjectCard project={project} key={project.title} index={index} />)}
        </div>
      </section>

      <section id="skills" className="sectionShell skillSection">
        <div className="animateInOnScroll">
          <SectionHeading
            eyebrow="Technical stack"
            title="Compatible skills"
            description="A moving skill showcase inspired by modern portfolio layouts, highlighting the tools and capabilities that support my development workflow."
          />
        </div>

        <div className="skillMarqueePanel animateInOnScroll delayTwo" aria-label="Moving technical skill list">
          <div className="skillFade left" aria-hidden="true" />
          <div className="skillFade right" aria-hidden="true" />

          <div className="skillMarqueeRow">
            <div className="skillTrack moveLeft">
              {[...skillItems, ...skillItems].map((skill, index) => (
                <span className="skillCard" key={`${skill.name}-left-${index}`}>
                  <b>{skill.icon}</b>
                  <span>
                    <strong>{skill.name}</strong>
                    <small>{skill.description}</small>
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="skillMarqueeRow compactRow">
            <div className="skillTrack moveRight">
              {[...skillItems].reverse().concat([...skillItems].reverse()).map((skill, index) => (
                <span className="skillCard" key={`${skill.name}-right-${index}`}>
                  <b>{skill.icon}</b>
                  <span>
                    <strong>{skill.name}</strong>
                    <small>{skill.description}</small>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="sectionShell certificateSection">
        <div className="animateInOnScroll centeredHeading">
          <SectionHeading
            eyebrow="Learning"
            title="Certificates & achievements"
            description="When more certificates are added, the cards will arrange in a clean grid. Hover one certificate to make it stand out while the others softly blur."
          />
        </div>
        <div className="certificateGrid">
          {certificates.map((certificate, index) => (
            <article className="certificateTile animateInOnScroll" key={certificate.title} style={{ animationDelay: `${index * 120}ms` }}>
              <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="certificateThumb" aria-label={`Verify ${certificate.title}`}>
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  width={1100}
                  height={850}
                />
              </a>
              <div className="certificateInfo">
                <p className="eyebrow">{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <p className="credentialText">Issued: {certificate.date} • Credential ID: {certificate.credentialId}</p>
                <a className="textLink" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                  Verify credential →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="sectionShell contactSection animateInOnScroll">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build useful software.</h2>
        <p>
          I am open to discussing web application projects, backend systems, admin dashboards, and business application development.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href={`mailto:${profile.email}`}>Send email</a>
          <a className="secondaryButton" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
      </footer>
    </main>
  );
}
