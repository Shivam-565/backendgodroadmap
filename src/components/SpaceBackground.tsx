'use client';

import { loadSlim } from '@tsparticles/slim';
import { Particles, ParticlesProvider } from '@tsparticles/react';

export default function SpaceBackground() {
  const initFn = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={initFn}>
      <Particles
        id="tsparticles"
        className="fixed inset-0 -z-10 pointer-events-none"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: true,
                mode: ["bubble", "grab"],
                parallax: {
                  enable: true,
                  force: 45,
                  smooth: 10,
                },
              },
            },
            modes: {
              bubble: {
                distance: 250,
                size: 9,
                duration: 2,
                opacity: 0.85,
                color: "#006577"
              },
              grab: {
                distance: 220,
                links: {
                  opacity: 0.2,
                  color: "#006577"
                }
              }
            },
          },
          particles: {
            color: {
              value: ["#006577", "#af3100", "#a6606e", "#6d797d"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: { min: 0.1, max: 0.45 },
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080
              },
              value: 120,
            },
            opacity: {
              value: { min: 0.15, max: 0.4 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 7 },
            },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 40,
                  },
                },
              },
            },
          ],
        }}
      />
    </ParticlesProvider>
  );
}
