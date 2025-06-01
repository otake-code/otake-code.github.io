// src/components/TypingEffect.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * TypingEffect コンポーネント
 * Props:
 *  - text: タイプしたい文字列 (必須)
 *  - speed: タイプ速度 (ミリ秒) (省略時は 100)
 */
const TypingEffect = ({ text = '', speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    // text が文字列でない or 空文字列なら何も表示せず return
    if (typeof text !== 'string' || text.length === 0) {
      setDisplayText('');
      return;
    }

    // ① 新しい text が来たらまずは displayText をリセットする
    setDisplayText('');

    let currentIndex = 0;

    // ② すでに走っているインターバルがあればクリアする
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // ③ 新しくインターバルを開始し、文字を1つずつ表示する
    intervalRef.current = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        // 全文字表示し終えたら interval をクリア
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, speed);

    // Cleanup: コンポーネントアンマウント時 or text/speed が変わるたびに interval をクリア
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, speed]); // text または speed が変わると再実行

  return (
    <span style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
      {displayText}
    </span>
  );
};

export default TypingEffect;
