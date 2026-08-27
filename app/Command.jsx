'use client';

import { useState } from 'react';

export default function Command({ text }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard API needs a secure context; fall back to the old way
      const box = document.createElement('textarea');
      box.value = text;
      box.setAttribute('readonly', '');
      box.style.position = 'fixed';
      box.style.opacity = '0';
      document.body.appendChild(box);
      box.select();
      try {
        document.execCommand('copy');
      } finally {
        box.remove();
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="command">
      <code>{text}</code>
      <button
        type="button"
        onClick={copy}
        className={copied ? 'copy done' : 'copy'}
        aria-label="Copy the install command"
      >
        {copied ? 'copied' : 'copy'}
      </button>
    </div>
  );
}
