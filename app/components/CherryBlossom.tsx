"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../css/style.module.css";

interface Petal {
  id: number;
  left: number;
  delay: number;
  size: number;
  rotation: number;
}

const CherryBlossom = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [fallDuration, setFallDuration] = useState<number>(10); // フォールバック用
  const containerRef = useRef<HTMLDivElement>(null);
  const FALL_SPEED = 55; // 落下速度（px/秒）

  // ResizeObserver を使って親コンテナの高さの変化を監視し、duration を再計算
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDuration = () => {
      const containerHeight = containerRef.current!.offsetHeight;
      if (containerHeight) {
        setFallDuration(containerHeight / FALL_SPEED);
      }
    };

    updateDuration();
    const resizeObserver = new ResizeObserver(() => {
      updateDuration();
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [FALL_SPEED]);

  // 花びら生成ロジック（delay、サイズ、回転はランダム）
  useEffect(() => {
    const createPetal = (): Petal => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 2,
      size: 10 + Math.random() * 10,
      rotation: Math.random() * 360,
    });

    const initialPetals = Array.from({ length: 15 }, createPetal);
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals((prevPetals) => {
        const newPetal = createPetal();
        return [...prevPetals.slice(-500), newPetal];
      });
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={styles.cherryBlossomContainer}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={styles.petal}
          style={{
            left: `${petal.left}%`,
            animationDuration: `${fallDuration}s`, // containerHeight ÷ FALL_SPEED
            animationDelay: `${petal.delay}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default CherryBlossom;
