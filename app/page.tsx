export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Yujin Eom</h1>

        <p className="mt-4 text-lg text-gray-600">
          Undergraduate Researcher in Mobility Engineering and Medical AI
        </p>

        <p className="mt-6 leading-7">
          I am interested in artificial intelligence, healthcare AI, mobility systems,
          computer vision, and human-centered intelligent systems.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="mailto:eomyj2@ajou.ac.kr" className="underline">
            Email
          </a>
          <a href="https://github.com/" className="underline">
            GitHub
          </a>
          <a href="/cv.pdf" className="underline">
            CV
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Research Interests</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Medical Artificial Intelligence</li>
          <li>Explainable AI and Human-Centered AI</li>
          <li>Computer Vision</li>
          <li>Autonomous Mobility and Intelligent Systems</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold">
              Patient-Friendly Emergency Triage Explanation System
            </h3>
            <p className="text-gray-600">
              Developing an AI-based system that explains emergency triage priority
              and waiting reasons in patient-friendly language.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              CT-Based Sarcopenia Assessment
            </h3>
            <p className="text-gray-600">
              Research on automated skeletal muscle analysis using CT images and
              medical imaging AI.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">
          Email: <a className="underline" href="mailto:eomyj2@ajou.ac.kr">eomyj2@ajou.ac.kr</a>
        </p>
      </section>
    </main>
  );
}