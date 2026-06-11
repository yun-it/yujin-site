// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       <section className="mx-auto max-w-4xl px-6 py-20">
//         <h1 className="text-4xl font-bold">Yujin Eom</h1>

//         <p className="mt-4 text-lg text-gray-600">
//           Undergraduate Researcher in Mobility Engineering and Medical AI
//         </p>

//         <p className="mt-6 leading-7">
//           I am interested in artificial intelligence, healthcare AI, mobility systems,
//           computer vision, and human-centered intelligent systems.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <a href="mailto:eomyj2@ajou.ac.kr" className="underline">
//             Email
//           </a>
//           <a href="https://github.com/" className="underline">
//             GitHub
//           </a>
//           <a href="/cv.pdf" className="underline">
//             CV
//           </a>
//         </div>
//       </section>

//       <section className="mx-auto max-w-4xl px-6 py-10">
//         <h2 className="text-2xl font-semibold">Research Interests</h2>
//         <ul className="mt-4 list-disc space-y-2 pl-6">
//           <li>Medical Artificial Intelligence</li>
//           <li>Explainable AI and Human-Centered AI</li>
//           <li>Computer Vision</li>
//           <li>Autonomous Mobility and Intelligent Systems</li>
//         </ul>
//       </section>

//       <section className="mx-auto max-w-4xl px-6 py-10">
//         <h2 className="text-2xl font-semibold">Projects</h2>

//         <div className="mt-4 space-y-4">
//           <div>
//             <h3 className="font-semibold">
//               Patient-Friendly Emergency Triage Explanation System
//             </h3>
//             <p className="text-gray-600">
//               Developing an AI-based system that explains emergency triage priority
//               and waiting reasons in patient-friendly language.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold">
//               CT-Based Sarcopenia Assessment
//             </h3>
//             <p className="text-gray-600">
//               Research on automated skeletal muscle analysis using CT images and
//               medical imaging AI.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-4xl px-6 py-10">
//         <h2 className="text-2xl font-semibold">Contact</h2>
//         <p className="mt-4">
//           Email: <a className="underline" href="mailto:eomyj2@ajou.ac.kr">eomyj2@ajou.ac.kr</a>
//         </p>
//       </section>
//     </main>
//   );
// }

const projects = [
  {
    title: "CT-Based Sarcopenia Assessment",
    desc: "Automated skeletal muscle analysis using CT images and medical imaging AI.",
    tag: "Medical Imaging",
  },
  {
    title: "ICU Severity Prediction using MIMIC-IV",
    desc: "Machine learning-based severity prediction and risk stratification using ICU clinical data.",
    tag: "Clinical AI",
  },
];

const interests = [
  "Medical Artificial Intelligence",
  "Explainable AI and Human-Centered AI",
  "Computer Vision",
  "Autonomous Mobility and Intelligent Systems",
  "Healthcare Data Analysis",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Researcher · Developer · Mobility AI
        </p>

        <h1 className="max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
          Yujin Eom
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-300">
          Undergraduate researcher interested in medical AI, computer vision,
          explainable AI, and intelligent mobility systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:eomyj2@ajou.ac.kr"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            CV
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">About Me</h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
          I am an undergraduate student in Mobility Engineering at Ajou
          University. My academic interests lie at the intersection of artificial
          intelligence, healthcare, mobility, and human-centered intelligent systems.
          I have worked on medical imaging AI, ICU clinical data analysis,
          explainable AI, and computer vision-based safety systems.
        </p>
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

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Selected Work</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:bg-white/10"
            >
              <p className="text-sm text-neutral-400">{project.tag}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300">{project.desc}</p>
            </div>
          ))}
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