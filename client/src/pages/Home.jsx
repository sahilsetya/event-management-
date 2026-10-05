import EventCard from "../components/EventCard";

const events = [
  {
    id: 1,
    title: "Tech Fest 2026",
    description: "A technology event for students.",
    date: "20 September 2026",
    location: "Mumbai",
  },
  {
    id: 2,
    title: "AI & Machine Learning Workshop",
    description: "An interactive workshop on AI and machine learning.",
    date: "25 September 2026",
    location: "Pune",
  },
  {
    id: 3,
    title: "Hackathon 2026",
    description: "A coding competition where students build innovative projects.",
    date: "5 October 2026",
    location: "Bangalore",
  },
  {
    id: 4,
    title: "React Workshop",
    description: "Learn React from basics to advanced.",
    date: "25 September 2026",
    location: "Pune",
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-100 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          Discover Amazing Events
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Find exciting events, connect with people, and register for
          experiences that interest you.
        </p>

        <button className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
          Explore Events
        </button>
      </section>

      {/* Event Cards */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Upcoming Events
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;