"use client";

import { useEffect, useState } from "react";

export function TypeWriter({
  texts,
  className,
  lineClasses,
}: {
  texts: string[];
  className?: string;
  lineClasses?: string[];
}) {
  const [displayLines, setDisplayLines] = useState<string[]>(
    texts.map(() => "")
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= texts.length) {
      const timer = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(timer);
    }

    const line = texts[currentLine];
    if (currentChar >= line.length) {
      // 次の行へ
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayLines((prev) => {
        const next = [...prev];
        next[currentLine] = line.slice(0, currentChar + 1);
        return next;
      });
      setCurrentChar((c) => c + 1);
    }, 80);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, texts]);

  return (
    <div className={className}>
      {/* 不可視の全テキストで最終状態の高さを確保 */}
      <div className="invisible" aria-hidden="true">
        {texts.map((text, i) => (
          <div key={i} className={`block ${lineClasses?.[i] ?? ""}`}>
            {text}
          </div>
        ))}
      </div>
      {/* 実際のタイプライターテキストをabsoluteで重ねる */}
      <div className="absolute top-0 left-0 w-full">
        {displayLines.map((line, i) => (
          <div key={i} className={`block ${lineClasses?.[i] ?? ""}`}>
            {line}
            {/* カーソル（現在入力中の行のみ表示） */}
            {!done && i === currentLine && (
              <span className="inline-block w-[3px] h-[1em] bg-white/80 align-middle ml-0.5 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
