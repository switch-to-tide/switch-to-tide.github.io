import Screen from './Screen';
import Wave from './Wave';

const INSTALL =
  'curl -fsSL https://raw.githubusercontent.com/switch-to-tide/tide/main/install.sh | sh';

const FEATURES = [
  ['Mouse, properly', 'Click, drag, double click, scrollbar. Tabs with an x.'],
  ['Real shells', 'Not a command runner. less, vi and REPLs all work.'],
  ['Git in the margin', 'Changed files marked, changed lines barred.'],
  ['Live diffs', 'Your copy against the last commit, keeping up as you type.'],
  ['Split view', 'A file and a full-size shell, side by side.'],
  ['Auto-save', 'Written a moment after you stop typing. Atomically.'],
];

const SAFETY = [
  ['Atomic writes', 'Temp file, fsync, rename. VS Code truncates yours first.'],
  ['One buffer per file', 'Matched by inode, so no path spelling opens it twice.'],
  ['Never overwrites blind', 'Changed underneath you? It stops and shows the diff.'],
  ['Never guesses encodings', 'Not valid UTF-8 means read-only, not corrupted.'],
];

const ROWS = [
  ['Ready on install', 'yes', 'config + plugins', 'yes'],
  ['Mouse and tabs', 'yes', 'partly', 'yes'],
  ['Shells inside it', 'many', 'plugin', 'yes'],
  ['Git marks and diffs', 'yes', 'plugin', 'yes'],
  ['Works over ssh', 'yes', 'yes', 'extension'],
  ['Download size', 'one folder of Python', 'editor + plugins', '~300 MB'],
];

function Command() {
  return <pre className="command">{INSTALL}</pre>;
}

export default function Home() {
  return (
    <main>
      <div className="glow" aria-hidden="true" />

      <header className="hero">
        <div className="mark"><Wave size={72} /></div>
        <h1>tide</h1>
        <p className="tagline">the terminal ide</p>
        <p className="lede">
          Your editor, your shell and your git history in one window.
        </p>
        <p className="rhythm">Zero config. Zero dependencies. One command.</p>
        <Command />
        <p className="fineprint">Python 3.7+ · macOS and Linux · then run <code>tide</code></p>
      </header>

      <section className="bleed">
        <Screen name="editor" />
      </section>

      <section>
        <p className="eyebrow">what you get</p>
        <div className="grid">
          {FEATURES.map(([title, line]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <p className="eyebrow">the part nobody demos</p>
        <h2>It will not lose your work.</h2>
        <div className="grid safety">
          {SAFETY.map(([title, line]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{line}</p>
            </article>
          ))}
        </div>
        <p className="stat">
          <strong>210 tests</strong> on the file handling alone, out of 461,
          including a randomised session that checks after every edit that the
          buffer and the file cannot drift apart unnoticed.
        </p>
      </section>

      <section>
        <p className="eyebrow">against the alternatives</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th />
                <th>tide</th>
                <th>vim · helix · micro</th>
                <th>VS Code</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, a, b, c]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td className="yes">{a}</td>
                  <td>{b}</td>
                  <td>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="shots">
        <p className="eyebrow">a closer look</p>
        <Screen name="diff" caption="Diff against the last commit, live, read-only." />
        <Screen name="split" caption="Split view: file left, shell right, tabs for both." />
      </section>

      <section className="closer">
        <h2>Try it in the next ten seconds</h2>
        <Command />
        <p className="fineprint">
          Then run <code>tide</code> in any directory.
        </p>
        <div className="footmark"><Wave size={30} /></div>
      </section>
    </main>
  );
}
