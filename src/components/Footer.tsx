import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="meander" aria-hidden="true" />
        <div className="footer-grid">
          <div>
            <h4>Ulysses 31 — Mythology Companion</h4>
            <p className="text-dim" style={{ fontSize: "0.92rem", marginTop: 10 }}>
              An educational, archival reference exploring the ancient myths
              behind the 1981 animated series <em>Ulysses 31</em> (<em>Ulysse 31</em>).
              What if Homer&rsquo;s <em>Odyssey</em> happened in the 31st century?
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <Link href="/episodes">Episode Explorer</Link>
              <Link href="/myths">Mythology Index</Link>
              <Link href="/odyssey">The Odyssey Timeline</Link>
              <Link href="/map">The Mythological Universe</Link>
            </div>
          </div>
          <div>
            <h4>Reference</h4>
            <div className="footer-links">
              <Link href="/sources">Ancient Sources</Link>
              <Link href="/translation">Myth → Science Fiction</Link>
              <Link href="/about">About &amp; Methodology</Link>
              <a
                href="https://www.omc.obta.al.uw.edu.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Mythical Childhood ↗
              </a>
            </div>
          </div>
        </div>
        <p className="footer-note">
          This is a fan-made educational reference and is not affiliated with or
          endorsed by the rights holders of <em>Ulysses 31</em>. No copyrighted
          screenshots or promotional artwork are reproduced; all graphics are
          original works inspired by Greek mythology and retro-futuristic design.
          Some mythological connections are well established while others are
          scholarly interpretations or probable influences.
        </p>
      </div>
    </footer>
  );
}
