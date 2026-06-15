import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";

function About() {
  return (
    <PageWrapper>
      <div className="font-body min-h-screen w-full bg-bg text-foreground">
        <div className="max-w-7xl mx-auto pt-24 md:pt-32 lg:pt-24">
          {/* ── HERO ── */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight shrink-0 text-foreground">
              Solium
            </h1>
            <p className="text-sm leading-relaxed font-light max-w-xs lg:max-w-sm lg:mt-4 lg:text-right text-muted">
              Cinema that never made the algorithm.
              <br />
              A space where mood leads and the obscure
              <br />
              finds its audience.
            </p>
          </section>

          {/* ── SECTION 1 — Our Curation ── */}
          <section className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                <div className="flex flex-col gap-6">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    Our Curation
                  </span>
                  <p className="text-sm leading-relaxed font-light text-muted max-w-80">
                    Solium organises film not by genre or release date but by
                    visual mood — the feeling a frame produces before any
                    narrative begins. Each mood is a lens: noir, grain, silence,
                    humidity. We focus on:
                    <br />
                    <br />
                    &bull;&nbsp;Films that prioritise image over plot
                    <br />
                    &bull;&nbsp;International arthouse from 2010 to present
                    <br />
                    &bull;&nbsp;Work that rewards patience and a dark room
                  </p>
                </div>
                <div className="relative w-full overflow-hidden aspect-video">
                  <img
                    src="https://images.pexels.com/photos/7991148/pexels-photo-7991148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="A person watching a movie in a dark cinema"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2 — The Archive ── */}
          <section className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                <div className="flex flex-col gap-6">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    The Archive
                  </span>
                  <p className="text-sm leading-relaxed font-light text-muted max-w-80">
                    Our editors are not algorithms. Every film in Solium has
                    been placed by hand into a mood it genuinely inhabits. Each
                    entry carries a single editorial line — not a synopsis, but
                    a visual sentence: what the frame feels like before the
                    story takes over. We are building an archive of images worth
                    sitting with.
                  </p>
                </div>
                <div className="relative w-full overflow-hidden aspect-video">
                  <img
                    src="https://images.pexels.com/photos/9439248/pexels-photo-9439248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Closeup of vintage film editing equipment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-lin-to-t from-bg/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 3 — The Experience ── */}
          <section className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
                <div className="flex flex-col gap-6">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    The Experience
                  </span>
                  <p className="text-sm leading-relaxed font-light text-muted max-w-80">
                    Solium is built to be browsed slowly. Posters before titles.
                    Mood before genre. You are not searching for a film — you
                    are waiting for one to find you. A performance of cinema
                    that celebrates the image and the long take.
                  </p>
                </div>
                <div className="relative w-full overflow-hidden aspect-video">
                  <img
                    src="https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="People watching a movie in a dark cinema theatre"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-lin-to-t from-bg/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA SECTION ── */}
          <section className="border-t border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
              <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0">
                <div className="lg:w-70 shrink-0">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    Now Expanding
                  </span>
                </div>
                <div className="flex flex-col gap-8 lg:flex-1">
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                    New Moods Opening.
                  </h2>
                  <p className="text-sm leading-relaxed font-light max-w-sm text-muted">
                    Solium is expanding its archive. If you work in film
                    curation, criticism, or distribution and believe in cinema
                    that earns its silence — we would like to hear from you.
                  </p>
                  <div>
                    <Link
                      to={"/collection"}
                      className=" w-fit block text-xs uppercase tracking-widest px-6 py-3 transition-colors lg:duration-300 border border-border-focus/20 text-foreground bg-transparent hover:bg-foreground active:bg-foreground active:text-bg hover:text-bg cursor-pointer"
                    >
                      Explore the Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── EDITORIAL / NEWSLETTER SECTION ── */}
          <section className="border-b border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col items-center text-center gap-8">
              <h2 className="font-heading text-4xl md:text-5xl leading-tight text-foreground">
                From the Archive
              </h2>
              <p className="text-sm leading-relaxed font-light max-w-sm md:max-w-md text-muted">
                Occasional writing on the films we collect — cinematography
                notes, director profiles, and the visual logic behind each mood.
                Stay informed about new additions and seasonal selections.
              </p>
              <button className="text-xs uppercase tracking-widest px-6 py-3 transition-colors lg:duration-300 border border-border-focus/20 text-foreground bg-transparent hover:bg-foreground active:bg-foreground active:text-bg hover:text-bg cursor-pointer">
                Subscribe
              </button>
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
              <div>
                <span className="font-heading text-5xl md:text-6xl leading-none tracking-tight text-foreground">
                  Solium
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hello@solium.film"
                  className="text-sm font-light transition-colors duration-300 text-muted hover:text-foreground"
                >
                  hello@solium.film
                </a>
              </div>
              <div className="md:text-right">
                <p className="text-sm font-light leading-relaxed text-muted">
                  Available everywhere.
                  <br />
                  Built for the dark.
                </p>
              </div>
            </div>
            <div className="border-t border-border">
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
                <p className="text-xs font-light text-muted">
                  &copy; Solium. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </PageWrapper>
  );
}
export default About;
