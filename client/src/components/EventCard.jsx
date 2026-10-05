function EventCard({ title, description, date, location }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
        <span>{date}</span>
        <span>{location}</span>
      </div>
    </article>
  );
}

export default EventCard;
