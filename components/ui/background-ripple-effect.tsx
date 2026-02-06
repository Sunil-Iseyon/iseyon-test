"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows,
  cols,
  cellSize = 56,
  interactive = false,
  trigger = "click",
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
  interactive?: boolean;
  trigger?: "click" | "hover" | "both";
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ height: 1080, width: 1920 });

  // Calculate dimensions on client side only
  useEffect(() => {
    setDimensions({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  // Calculate rows and cols based on viewport if not provided
  const calculatedRows = rows ?? Math.ceil(dimensions.height / cellSize) + 2;
  const calculatedCols = cols ?? Math.ceil(dimensions.width / cellSize) + 2;

  const triggerRipple = (row: number, col: number) => {
    setClickedCell({ row, col });
    setRippleKey((k) => k + 1);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 z-0 h-full w-full",
        !interactive && "pointer-events-none",
        "[--cell-border-color:var(--color-sky-700)] [--cell-fill-color:var(--color-sky-600)] [--cell-shadow-color:var(--color-sky-500)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]",
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Gradient overlay from top-right: light -> medium -> dark */}
        <div className="pointer-events-none absolute inset-0  h-full w-full" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-5%  mask-radial-at-top opacity-600"
          rows={calculatedRows}
          cols={calculatedCols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellActivate={triggerRipple}
          trigger={trigger}
          interactive={interactive}
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number; // in pixels
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellActivate?: (row: number, col: number) => void;
  interactive?: boolean;
  trigger?: "click" | "hover" | "both";
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellActivate = () => {},
  interactive = true,
  trigger = "click",
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.01px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none",
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive && (trigger === "click" || trigger === "both")
                ? () => onCellActivate?.(rowIdx, colIdx)
                : undefined
            }
            onMouseEnter={
              interactive && (trigger === "hover" || trigger === "both")
                ? () => onCellActivate?.(rowIdx, colIdx)
                : undefined
            }
          />
        );
      })}
    </div>
  );
};
