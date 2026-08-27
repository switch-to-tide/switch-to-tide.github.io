import { screens } from './screens';

// Each screen was captured from a running tide session: every cell keeps the
// colour the editor actually painted it.
export default function Screen({ name, caption, label, chrome = true }) {
  const rows = screens[name];
  return (
    <figure className="shot">
      <div className={chrome ? 'shot-frame' : 'shot-frame bare'}>
        {chrome ? (
          <div className="shot-bar">
            <span />
            <span />
            <span />
          </div>
        ) : null}
        <pre className="shot-screen">
          {rows.map((row, y) => (
            <div key={y} className="shot-row">
              {row.map((run, x) => (
                <span
                  key={x}
                  style={{
                    color: run.f,
                    background: run.b,
                    fontWeight: run.w ? 600 : 400,
                  }}
                >
                  {run.t}
                </span>
              ))}
            </div>
          ))}
        </pre>
      </div>
      {label ? <figcaption className="theme-label">{label}</figcaption> : null}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
