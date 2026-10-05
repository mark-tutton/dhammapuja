const REPO = "https://github.com/mark-tutton/dhammapuja";

// Shown on home and chant index. Chant pages have none: audio bar sits there.
export function SiteFooter() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="page-footer__row">
          <p className="memo">Dhammapuja is a tool for learning Theravadin chants.</p>
          <ul>
            <li>
              <a href={`${REPO}/wiki/Chanting-Resources-(Audio-&-Textual)`}>Resources</a>
            </li>
            <li>
              <a href={`${REPO}/wiki`}>Wiki</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={`${REPO}/wiki/Credits`}>Credits</a>
            </li>
            <li>
              <a href={REPO}>GitHub</a>
            </li>
            <li>
              <a href={`${REPO}/wiki#why-chant`}>Why Chant?</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <a href={REPO}>Made with ♥</a>
          <a href="https://gnu.org/licenses/quick-guide-gplv3.html">GPL-3.0</a>
        </div>
      </div>
    </footer>
  );
}
