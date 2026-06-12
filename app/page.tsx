import Image from "next/image";

const interests = [
  "Human-Centered AI",
  "Medical Artificial Intelligence",
  "Healthcare Data Analysis",
  "Computer Vision",
  "Autonomous Vehicle",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-6 py-4 text-sm">
          <a href="#about" className="text-neutral-300 hover:text-white">
            About Me
          </a>

          <a href="#research" className="text-neutral-300 hover:text-white">
            Research Interests
          </a>

          <a href="#experience" className="text-neutral-300 hover:text-white">
            Experience
          </a>

          <a href="#international" className="text-neutral-300 hover:text-white">
            International Programs
          </a>

          <a href="#awards" className="text-neutral-300 hover:text-white">
            Awards
          </a>

          <a href="#publications" className="text-neutral-300 hover:text-white">
            Publications
          </a>

          <a href="#contact" className="text-neutral-300 hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Researcher · Developer
        </p>

        <h1 className="max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
          Yujin Eom
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-300">
          Undergraduate researcher interested in Human-Centered AI & Medical AI.
        </p>

    
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">About Me</h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_240px]">
          <p className="text-lg leading-8 text-neutral-300">
            I am an undergraduate student in Mobility Engineering at Ajou University. My research interests lie in Human-Centered AI, Medical AI, and Autonomous Driving. Through my research experience at Ajou University Hospital, I have worked on medical artificial intelligence and healthcare data analysis. I aspire to develop AI technologies that create meaningful and positive impacts on people's lives.
          </p>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/YJ.jpg"
              alt="Yujin Eom"
              width={220}
              height={280}
              className="border border-white/10 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Research Interests</h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-neutral-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Experience</h2>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-neutral-400">2023.08 – 2026.03</p>
            <h3 className="text-xl font-semibold">
              Student Researcher, Ajou University Hospital
            </h3>
          </div>

          <div>
            <p className="text-neutral-400">2026.01 – 2026.06</p>
            <h3 className="text-xl font-semibold">
              AI Research Intern, VUNO Inc.
            </h3>
          </div>

          <div>
            <p className="text-neutral-400">2026.03 – 2026.06</p>
            <h3 className="text-xl font-semibold">
              Teaching Assistant, Intelligent Convergence Control System Design
            </h3>
          </div>
        </div>
      </section>

      <section id="international" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">International Programs</h2>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-neutral-400">Mar. 2018</p>
            <h3 className="text-xl font-semibold">
              Harbin Institute of Technology
            </h3>
          </div>

          <div>
            <p className="text-neutral-400">Jul. 2023</p>
            <h3 className="text-xl font-semibold">
              University of Michigan, Ann Arbor
            </h3>
          </div>
        </div>
      </section>

      <section id="awards" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Awards</h2>

        <div className="mt-10 space-y-8">
          <div>
            <p className="text-neutral-400">Nov. 30, 2019</p>
            <h3 className="text-xl font-semibold">
              2019 Seoul International Invention Fair
            </h3>
            <p className="mt-1 text-neutral-300">Bronze Prize</p>
          </div>

          <div>
            <p className="text-neutral-400">Jun. 8, 2023</p>
            <h3 className="text-xl font-semibold">
              2nd International Collegiate EV Autonomous Driving Competition
            </h3>
            <p className="mt-1 text-neutral-300">
              AI 1/10 Racer, Bronze Prize
            </p>
          </div>

          <div>
            <p className="text-neutral-400">Nov. 2, 2024</p>
            <h3 className="text-xl font-semibold">
              Korean Society of Nuclear Medicine Fall Academic Conference &
              Asian Regional Cooperative Council for Nuclear Medicine
            </h3>
            <p className="mt-1 text-neutral-300">
              Future Researcher Award
            </p>
          </div>
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Publications</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-neutral-300">
            Publications and manuscripts will be updated here.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Contact</h2>

        <p className="mt-6 text-lg text-neutral-300">
          Email:{" "}
          <a className="underline" href="mailto:eomyj2@ajou.ac.kr">
            eomyj2@ajou.ac.kr
          </a>
        </p>
      </section>
    </main>
  );
}
