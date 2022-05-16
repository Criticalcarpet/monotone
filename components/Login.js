import { signIn } from "next-auth/react";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Login({ providers }) {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="flex flex-col items-center pt-48">
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#1A1A1A",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      <title>Monotone</title>
      <h1 className="text-white text-5xl mb-3">Monotone</h1>
      <h1 className="text-white mb-10">Alpha v1.0.0</h1>
      <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
      <Image
          src="https://i.ibb.co/bWKZV3d/Screenshot-2022-01-24-180805.png"
          width={150}
          height={150}
          className="rounded-full border"
        />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="mt-[100px] relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-black rounded hover:bg-[#1e1e1e] group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
