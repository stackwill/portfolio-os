import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];
const INITIAL_DIRECTION = 'RIGHT';
const GAME_SPEED = 100;

export const Games: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Position>({ x: 15, y: 10 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    // Make sure food doesn't appear on snake
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setIsGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  const moveSnake = useCallback(() => {
    if (isPaused || isGameOver) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = { ...head };

      switch (direction) {
        case 'UP':
          newHead.y = (newHead.y - 1 + GRID_SIZE) % GRID_SIZE;
          break;
        case 'DOWN':
          newHead.y = (newHead.y + 1) % GRID_SIZE;
          break;
        case 'LEFT':
          newHead.x = (newHead.x - 1 + GRID_SIZE) % GRID_SIZE;
          break;
        case 'RIGHT':
          newHead.x = (newHead.x + 1) % GRID_SIZE;
          break;
      }

      // Check collision with self
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true);
        if (score > highScore) {
          setHighScore(score);
        }
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];
      
      // Check if snake ate food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, generateFood, isGameOver, isPaused, score, highScore]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isGameOver) {
        if (e.key === 'Enter') {
          resetGame();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        case ' ':
          setIsPaused(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isGameOver]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: '#000080' }}>Snake Game</h2>
          <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
            <span>Score: {score}</span>
            <span>High Score: {highScore}</span>
          </div>
        </div>

        <div
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
            border: '2px solid #808080',
            borderRight: '2px solid #fff',
            borderBottom: '2px solid #fff',
            margin: '0 auto',
            position: 'relative',
            background: '#c0c0c0'
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: segment.y * CELL_SIZE,
                left: segment.x * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                background: index === 0 ? '#000080' : '#0000A0',
                border: '1px solid #000'
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              top: food.y * CELL_SIZE,
              left: food.x * CELL_SIZE,
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              background: '#FF0000',
              border: '1px solid #800000',
              borderRadius: '50%'
            }}
          />
        </div>

        {(isGameOver || isPaused) && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#c0c0c0',
              padding: '16px',
              border: '2px solid #fff',
              borderRight: '2px solid #808080',
              borderBottom: '2px solid #808080',
              textAlign: 'center'
            }}
          >
            <h3 style={{ marginBottom: '8px' }}>
              {isGameOver ? 'Game Over!' : 'Paused'}
            </h3>
            {isGameOver ? (
              <button
                onClick={resetGame}
                style={{
                  padding: '8px 16px',
                  background: '#c0c0c0',
                  border: '2px solid #fff',
                  borderRight: '2px solid #808080',
                  borderBottom: '2px solid #808080',
                  cursor: 'pointer'
                }}
              >
                Play Again
              </button>
            ) : (
              <p>Press SPACE to resume</p>
            )}
          </div>
        )}

        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          <p>Use arrow keys to move</p>
          <p>Press SPACE to pause</p>
        </div>
      </motion.div>
    </div>
  );
}; 