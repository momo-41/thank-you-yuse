"use client";
import { useEffect, useState } from "react";
import styles from "../css/style.module.css";

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
  rotation: number;
}

const CherryBlossom = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (): Petal => ({
      id: Math.random(),
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      size: 10 + Math.random() * 10,
      rotation: Math.random() * 360,
    });

    const initialPetals = Array.from({ length: 15 }, createPetal);
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals((prevPetals) => {
        const newPetal = createPetal();
        return [...prevPetals.slice(-14), newPetal];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    // 桜が降る
    <div className={styles.cherryBlossomContainer}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={styles.petal}
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
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
