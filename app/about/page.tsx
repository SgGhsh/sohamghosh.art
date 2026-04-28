import type { Metadata } from 'next';
import Image from "next-image-export-optimizer";
import { aboutConfig } from '@/data/about';
import Container from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import AboutBody from './AboutBody';

export const metadata: Metadata = {
  title: aboutConfig.title,
  description: `${aboutConfig.name} — ${aboutConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <section className="w-full h-[calc(100dvh-5rem)] overflow-hidden flex flex-col md:py-10">
      <Container className="h-full flex flex-col min-h-0">

        <div className="flex-1 min-h-0 flex flex-col md:grid md:grid-cols-2 md:gap-20">

          {/* Portrait */}
          <FadeIn direction="left" className="shrink-0 h-2/5 md:h-auto">
            <div className="relative w-full h-full overflow-hidden bg-background
                            md:h-full md:bg-muted md:border md:border-border">
              <Image
                src="/images/aboutme.jpeg"
                alt={aboutConfig.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain grayscale md:object-cover"
              />
            </div>
          </FadeIn>

          {/* Text column — independently scrollable */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-2">
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-6 py-4 md:py-0">

                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                  The Artist&apos;s Profile
                </h1>

                <AboutBody>

                <div className="prose prose-sm max-w-none">
                  <p>
                    There is a story Soham Ghosh does not tell often, though it explains nearly
                    everything. He was thirteen, perhaps fourteen, when he walked onto a stage in
                    Kolkata and handed a painting — four feet by four feet, stretched on canvas — to
                    the man whose face was on it. The former President of India, A.P.J. Abdul Kalam,
                    received it with the kind of warmth that great men sometimes have in private, the
                    warmth that rooms rarely see. One of the painted eyes bulged slightly, almost
                    alive, almost reaching out. Kalam looked at it. Soham, young and astonished,
                    understood something in that moment that he would spend the next two decades
                    trying to say in paint: that the feeling of a thing matters more than its accurate
                    description.
                  </p>
                  <p>
                    His grandfather had a small collection of words he returned to, the way a river
                    returns to its own banks.{' '}
                    <em>
                      The light and shadow is what defines the composition, he would say — and the
                      composition is what defines the light and shadow. You cannot do one without the
                      other.
                    </em>{' '}
                    A paradox, spoken plainly, repeated until it stopped sounding like one. The boy
                    listened until he stopped hearing the words and started seeing what they meant —
                    until the world arranged itself, without his asking, into forms in tension, into
                    compositions that wanted to be looked at. This is how certain kinds of knowledge
                    enter us: not as instruction, but as quiet repetition, until one day we look up
                    and realise we have been changed.
                  </p>
                </div>

                {/* Pull quote */}
                <div className="border-l-2 border-border pl-4 italic text-secondary leading-relaxed">
                  &ldquo;What I want the viewers to feel is not something that needs me to do it
                  purposely. I just want them to feel something they never realised they could
                  feel.&rdquo;
                </div>

                <div className="prose prose-sm max-w-none">
                  <p>
                    Soham works in painting and photography, and he is careful to say they are not
                    the same impulse wearing different clothes. Photography, for him, is the practice
                    of finding composition in the ordinary — the daily act of learning to see.
                    Painting is something else: it is the practice of finding magic in the ordinary.
                    The distinction is real. One is discipline. The other is devotion.
                  </p>
                  <p>
                    He went once to Sandakphu, high in the mountains, and saw a sleeping Buddha. He
                    did not paint it then. He carried it back with him — the altitude, the stillness,
                    the particular quality of that silence — and two or three years later, set it down
                    on canvas. The painting that emerged is not a record of what was there. It is a
                    record of what it felt like to have been there, which is an entirely different
                    thing, and a much harder one to achieve. The logistics — the exact angle of a
                    hand, the precise colour of stone — these he let go. What he kept was the feeling
                    of the position he had stood in: a man alone with something ancient, in thin air,
                    trying to understand.
                  </p>
                  <p>
                    He lives in Kolkata, and the city lives in him in ways he finds difficult to
                    name. Not in its images — not the peeling plaster, not the yellow taxis, not the
                    specific weight of its monsoons. What Kolkata has given him is its rhythm: slow,
                    unhurried, certain that whatever is worth doing will take as long as it takes. His
                    paintings are rarely finished quickly. They resist the pressure of conclusion. In
                    this, they are unmistakably from here.
                  </p>
                  <p>
                    There is a day job. He leads a team of engineers building software systems, a
                    world of mechanical precision and defined deliverables, a world where feelings
                    are, by design, beside the point. He does not say this bitterly. He says it with
                    the clarity of a man who has understood exactly what the friction is for: the
                    resistance of that life is what keeps his hands moving toward paint. The
                    suppression is the fuel. He makes art, he says, so that people can feel a little
                    better — and in doing so, he feels better too. It is not a complicated equation.
                    It is, perhaps, the only honest one.
                  </p>
                  <p>
                    His mother once retrieved a drawing from the discard pile — one of dozens he had
                    abandoned — and framed it quietly. He saw it later on the wall and felt something
                    he found hard to articulate: that the frame had done something to the drawing that
                    he himself had not managed to do. He has been thinking about that ever since.
                    About what it means for a work to be seen. About the gap between what the maker
                    feels and what the viewer receives. About the strange generosity of the act of
                    looking.
                  </p>
                </div>

                {/* Pull quote */}
                <div className="border-l-2 border-border pl-4 italic text-secondary leading-relaxed">
                  &ldquo;He does not want your understanding, exactly. He wants something quieter and
                  more lasting: a feeling you did not know you were capable of, arriving without
                  warning, staying longer than you expected.&rdquo;
                </div>

                {/* Divider */}
                <div className="w-10 h-px bg-border" />

                <div className="prose prose-sm max-w-none">
                  <p>
                    Stand in front of one of his paintings long enough and something will happen. He
                    cannot tell you what — it will depend on who you are, what you have carried with
                    you into the room, what you have been trying not to feel. What he can tell you is
                    that the painting will not explain itself. It will not resolve. It will stay open,
                    the way a question stays open when it is the right one, and it will make a small,
                    unfamiliar space inside you where something new can move.
                  </p>
                  <p>
                    That is what he has always been making. Not pictures. Spaces.
                  </p>
                  <p>
                    Soham Ghosh lives and works in Kolkata, India.
                  </p>
                </div>

              </AboutBody>

              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}
