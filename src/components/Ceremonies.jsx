import { Fragment } from "react";
import Section from "./Section";
import Illustration from "./Illustration";
import { ceremonies } from "../content";

// Group events by their `day` field, preserving content order. `index`
// is the event's position in the full list and is used as the React key.
function groupByDay(events) {
  const days = [];
  events.forEach((event, index) => {
    const day = event.day ?? "";
    let group = days.find((g) => g.day === day);
    if (!group) {
      group = { day, events: [] };
      days.push(group);
    }
    group.events.push({ event, index });
  });
  return days;
}

const DAY_WORDS = ["One", "Two", "Three", "Four"];

// On desktop the box is itself a subgrid over three shared rows (label,
// Men, Women), so the "Women" line starts at the same height in every card
// no matter how long the Men text runs.
function AttireNote({ attire }) {
  if (!attire) return null;
  const rows =
    typeof attire === "string"
      ? null
      : [
          ["Men", attire.men],
          ["Women", attire.women],
        ].filter(([, text]) => text);

  return (
    <div className="h-full rounded-xl border border-phthalo/40 bg-phthalo/35 p-4 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-y-3">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-clay lg:mb-0">
        What to wear
        {attire.dressCode && (
          <>
            <span className="mx-2 text-cream/40" aria-hidden="true">
              ·
            </span>
            <span className="text-blush">{attire.dressCode}</span>
          </>
        )}
      </p>
      {rows ? (
        rows.map(([who, text]) => (
          <div key={who} className="mt-2 flex items-baseline gap-4 first:mt-0 lg:mt-0">
            <p className="w-16 shrink-0 text-sm uppercase tracking-widest text-cream/60">
              {who}
            </p>
            <p className="leading-relaxed text-cream/90">{text}</p>
          </div>
        ))
      ) : (
        <p className="leading-relaxed text-cream/90 lg:row-span-2">{attire}</p>
      )}
    </div>
  );
}

export default function Ceremonies() {
  const days = groupByDay(ceremonies.events);

  // Column each day's cards start at when the row is laid out on desktop.
  let nextColumn = 1;
  const placed = days.map((group) => {
    const startColumn = nextColumn;
    nextColumn += group.events.length;
    return { ...group, startColumn };
  });
  const columns = nextColumn - 1;

  return (
    <Section id="ceremonies" heading={ceremonies.heading} floral corners wide>
      {ceremonies.intro && (
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-cream/90">
          {ceremonies.intro}
        </p>
      )}

      {/* Below lg: day headers and cards stack in document order.
          From lg: one grid. Row 1 holds the day headers (each spanning its
          day's cards); rows 2-6 hold the cards. Every card is a subgrid
          over those five rows (name block, guest note, attire label, Men,
          Women), so each part lines up and takes the same height across
          the whole row. */}
      <div
        className="stagger flex flex-col gap-8 lg:grid lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))] lg:gap-x-8 lg:gap-y-6"
        style={{ "--cols": columns }}
      >
        {placed.map(({ day, events, startColumn }, d) => (
          <Fragment key={day}>
            {/* Day header: the two days carry different moods, so guests
                should see at a glance what happens when. */}
            <div
              className="mt-6 flex items-center gap-4 first:mt-0 lg:mt-0"
              style={{
                gridColumn: `${startColumn} / span ${events.length}`,
                gridRow: 1,
              }}
            >
              <div className="h-px flex-1 bg-cream/20" />
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-clay">
                  Day {DAY_WORDS[d] ?? d + 1}
                </p>
                <h3 className="mt-1 font-serif text-3xl text-blush sm:text-4xl lg:text-3xl">
                  {day}
                </h3>
              </div>
              <div className="h-px flex-1 bg-cream/20" />
            </div>

            {events.map(({ event, index: i }, j) => (
              <article
                key={i}
                className="flex flex-col gap-6 rounded-2xl border border-cream/15 bg-ink/40 p-8 shadow-lg backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cream/30 hover:shadow-2xl sm:grid sm:grid-cols-[10rem_1fr] sm:gap-x-8 sm:gap-y-5 sm:p-10 lg:grid-cols-1 lg:grid-rows-subgrid lg:p-7"
                style={{
                  gridColumn: startColumn + j,
                  gridRow: "2 / span 5",
                }}
              >
                {/* Marker */}
                <div className="sm:row-span-2 sm:text-center lg:row-span-1 lg:row-start-1">
                  <Illustration
                    src={event.image}
                    alt={`${event.kodavaName} illustration`}
                    className="mx-auto mb-4 h-32 w-32 object-contain drop-shadow"
                  />
                  <h4 className="font-serif text-4xl text-blush">
                    {event.link ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-cream/30 decoration-1 underline-offset-8 transition-colors hover:text-cream hover:decoration-cream/70"
                        aria-label={`${event.kodavaName}: read more (opens in a new tab)`}
                      >
                        {event.kodavaName}
                      </a>
                    ) : (
                      event.kodavaName
                    )}
                  </h4>
                  <p className="mt-3 text-base uppercase tracking-widest text-cream/85">
                    {event.when}
                  </p>
                  {event.time && (
                    <p className="mt-1 text-base uppercase tracking-widest text-cream/75">
                      {event.time}
                    </p>
                  )}
                </div>

                {/* What happens: a short intro, then the steps in order. */}
                <div className="border-cream/15 sm:col-start-2 sm:row-start-1 sm:border-l sm:pl-8 lg:col-start-1 lg:row-start-2 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">
                  {event.intro &&
                    [].concat(event.intro).map((para, k) => (
                      <p
                        key={k}
                        className={`leading-relaxed text-cream/90 ${k > 0 ? "mt-4" : ""}`}
                      >
                        {para}
                      </p>
                    ))}
                  {/* Ceremonies made of several named rituals list them in
                      order behind a disclosure, closed by default, so the
                      card stays in step with its neighbours on desktop. */}
                  {event.steps?.length > 0 && (
                    <details className="group mt-5">
                      <summary className="flex cursor-pointer list-none items-center gap-3 text-sm uppercase tracking-widest text-clay transition-colors hover:text-blush [&::-webkit-details-marker]:hidden">
                        <span
                          className="font-serif text-xl leading-none transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                        {event.stepsLabel || "The rituals, step by step"}
                      </summary>
                      <ol className="mt-5 space-y-4">
                        {event.steps.map((step, k) => (
                          <li key={k} className="flex gap-3">
                            <span
                              className="mt-0.5 shrink-0 font-serif text-lg leading-none text-clay"
                              aria-hidden="true"
                            >
                              {k + 1}.
                            </span>
                            <div>
                              <p className="text-sm uppercase tracking-widest text-blush/90">
                                {step.title}
                              </p>
                              <p className="mt-1 leading-relaxed text-cream/85">
                                {step.text}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}
                  {!event.steps?.length && event.forGuests && (
                    <p className="leading-relaxed text-cream/90">{event.forGuests}</p>
                  )}
                </div>

                <div className="sm:col-start-2 sm:row-start-2 sm:pl-8 lg:col-start-1 lg:row-start-3 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:pl-0">
                  <AttireNote attire={event.attire} />
                </div>
              </article>
            ))}
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
