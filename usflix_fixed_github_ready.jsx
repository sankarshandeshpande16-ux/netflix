import { useState } from "react";
import { motion } from "framer-motion";

export default function RelationshipStorySite() {
  const [playingMusic, setPlayingMusic] = useState(true);

  const memories = [
    {
      title: "Your Smile That Fixes Everything",
      image: "/images/her.jpg",
    },
    {
      title: "Our Mall Date ❤️",
      image: "/images/malldate.jpg",
    },
    {
      title: "My Favourite Mirror Memory",
      image: "/images/mirror1.jpg",
    },
    {
      title: "The Cutest Version Of You",
      image: "/images/mirror2.jpg",
    },
  ];

  const episodes = [
    {
      title: "The Girl I Fell For",
      season: "Episode 1",
      desc: "You walked into my life so naturally that I never realised when you became part of my everyday happiness.",
      image: "/images/her.jpg",
    },
    {
      title: "The Way You Look At Me",
      season: "Episode 2",
      desc: "Every tiny moment with you somehow became a core memory for me.",
      image: "/images/malldate.jpg",
    },
    {
      title: "The Softest Memories",
      season: "Episode 3",
      desc: "The comfort, the jokes, the random photos, the late night talks — I genuinely loved all of it.",
      image: "/images/mirror1.jpg",
    },
    {
      title: "Where I Went Wrong",
      season: "Episode 4",
      desc: "I know my emotions sometimes became too heavy and overwhelming.",
      image: "/images/softmemory.jpg",
    },
    {
      title: "If We Ever Try Again",
      season: "Final Episode",
      desc: "I’d love you more gently, communicate better, and protect your peace.",
      image: "/images/mirror2.jpg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <audio
        id="loveSong"
        autoPlay
        loop
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8d6d6b6f4.mp3?filename=romantic-piano-110624.mp3"
      />

      <section
        className="relative min-h-screen flex items-center px-8 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/malldate.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-6 left-8 md:left-14 z-20">
          <h1 className="text-red-600 text-4xl font-black tracking-tight">
            USFLIX ❤️
          </h1>
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="mb-5 inline-block bg-red-600/90 px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em]">
            A LOVE STORY
          </div>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
            You Were <br /> Always My Favourite Person.
          </h2>

          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-2xl mb-10">
            Every memory, every mistake, every emotion I wish I could explain while looking into your eyes.
          </p>

          <button
            onClick={() => {
              const song = document.getElementById("loveSong");
              if (!song) return;

              if (playingMusic) {
                song.pause();
              } else {
                song.play();
              }

              setPlayingMusic(!playingMusic);
            }}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg"
          >
            {playingMusic ? "Pause Music" : "Play Music"}
          </button>
        </div>
      </section>

      <section className="px-6 md:px-14 py-16">
        <h3 className="text-4xl font-black mb-10">Our Beautiful Memories ❤️</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >
              <img
                src={memory.image}
                alt={memory.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xl font-semibold">{memory.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-14 py-16">
        <h3 className="text-4xl font-black mb-10">
          Continue Watching (Our Story)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {episodes.map((ep, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-zinc-900 rounded-[32px] overflow-hidden border border-zinc-800"
            >
              <img
                src={ep.image}
                alt={ep.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <div className="text-red-500 font-bold mb-3">
                  {ep.season}
                </div>

                <h4 className="text-3xl font-black mb-4">
                  {ep.title}
                </h4>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {ep.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-14 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl md:text-6xl font-black leading-tight text-white">
            “Even during the hardest moments,
            my love for you never became smaller.”
          </p>

          <p className="mt-8 text-gray-400 text-xl leading-relaxed">
            Maybe we became emotionally tired,
            but every memory with you still means everything to me.
          </p>
        </div>
      </section>
    </div>
  );
}
