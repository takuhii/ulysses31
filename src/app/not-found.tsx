import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container center" style={{ padding: "80px 0" }}>
      <span className="eyebrow">Lost in the cosmos</span>
      <h1 className="section-title">This route is not on the star chart</h1>
      <p className="section-lead" style={{ margin: "0 auto 24px" }}>
        The page you were navigating toward drifted beyond the known map. Set a
        new course from one of the archive&rsquo;s main routes.
      </p>
      <div className="hero-cta">
        <Link href="/" className="btn btn-primary">
          Return home
        </Link>
        <Link href="/episodes" className="btn btn-secondary">
          Explore episodes
        </Link>
      </div>
    </div>
  );
}
