import Command from './Command';
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

const USAGE = [
  ['tide', 'open the directory you are in'],
  ['tide tides.py', 'open a file'],
  ['tide src/ main.py', 'a project, and a file to start on'],
  ['tide --theme light', 'pick a theme for this session'],
  ['tide --no-autosave', 'save only when you press ctrl+s'],
];

const SAFETY = [
  ['Atomic writes', 'Temp file, fsync, rename. VS Code truncates yours first.'],
  ['One buffer per file', 'Matched by inode, so no path spelling opens it twice.'],
  ['Never overwrites blind', 'Changed underneath you? It stops and shows the diff.'],
  ['Never guesses encodings', 'Not valid UTF-8 means read-only, not corrupted.'],
];

const COLUMNS = ['tide', 'Vim / Neovim', 'Helix', 'Micro', 'VS Code'];

// '+' built in, '-' not there, anything else is shown as a word
const ROWS = [
  ['Nothing to configure', '+', 'config', '+', '+', '+'],
  ['Mouse selection', '+', 'opt-in', '+', '+', '+'],
  ['Scrollbar you can drag', '+', '-', '-', '-', '+'],
  ['File tree in a pane', '+', 'plugin', 'picker', 'plugin', '+'],
  ['Editor tabs', '+', '+', '+', '+', '+'],
  ['Multiple cursors', '-', 'plugin', '+', '+', '+'],
  ['Search across the project', '-', '+', '+', 'plugin', '+'],
  ['A shell inside the editor', '+', '+', '-', '+', '+'],
  ['Several shells at once', '+', '+', '-', '-', '+'],
  ['A file and a shell side by side', '+', '+', '-', '+', '+'],
  ['Git marks in the gutter', '+', 'plugin', '+', 'plugin', '+'],
  ['Side by side diffs', '+', 'plugin', '-', '-', '+'],
  ['Diff against the upstream branch', '+', 'plugin', '-', '-', 'plugin'],
  ['Auto-save', '+', 'opt-in', '-', '-', '+'],
  ['Works over ssh', '+', '+', '+', '+', 'extension'],
  ['What you download', '480 KB', 'a few MB', 'tens of MB', 'a few MB', '~300 MB'],
];

function Cell({ value }) {
  if (value === '+') return <td className="cell yes">✓</td>;
  if (value === '-') return <td className="cell no">✗</td>;
  return <td className="cell word">{value}</td>;
}

export default function Home() {
  return (
    <main>
      <div className="glow" aria-hidden="true" />

      <header className="hero">
        <div className="mark"><Wave size={72} /></div>
        <h1>Tide — the Terminal IDE</h1>
        <p className="tagline">lightweight. fast. secure. flow with the tide</p>
        <Command text={INSTALL} />
        <p className="fineprint">Python 3.7+ · macOS and Linux · then run <code>tide</code></p>
      </header>

      <div className="bleed">
        <Screen name="editor" />
      </div>

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
          buffer and the file cannot drift apart unnoticed. The download is
          6,400 lines of editor and 6,200 lines of tests, almost one for one.
        </p>
      </section>

      <section className="compare">
        <p className="eyebrow">against the alternatives</p>
        <h2>One program, not a kit of parts.</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th />
                {COLUMNS.map((name) => (
                  <th key={name} className={name === 'tide' ? 'ours' : undefined}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, ...cells]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {cells.map((value, i) => (
                    <Cell key={i} value={value} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="footnote">
          The parts of an IDE you always want, finished, rather than every part you
          might ever want, unassembled.
        </p>
      </section>

      <section className="shots">
        <p className="eyebrow">a closer look</p>
      </section>

      <div className="bleed">
        <Screen name="diff" caption="A diff against the last commit: read-only, and it keeps up as you type." />
      </div>

      <div className="bleed">
        <Screen name="split" caption="Split view: the file on the left, a full-size shell on the right." />
      </div>

      <section>
        <p className="eyebrow">four themes</p>
        <div className="themes">
          <Screen name="theme_dark" label="dark" chrome={false} />
          <Screen name="theme_midnight" label="midnight" chrome={false} />
          <Screen name="theme_ember" label="ember" chrome={false} />
          <Screen name="theme_light" label="light" chrome={false} />
        </div>
      </section>

      <section className="closer">
        <h2>Install it</h2>
        <Command text={INSTALL} />

        <dl className="usage">
          {USAGE.map(([command, what]) => (
            <div key={command}>
              <dt>{command}</dt>
              <dd>{what}</dd>
            </div>
          ))}
        </dl>

        <p className="fineprint">
          Everything else is on <code>f1</code>.
        </p>
        <div className="footmark"><Wave size={30} /></div>
      </section>
    </main>
  );
}
