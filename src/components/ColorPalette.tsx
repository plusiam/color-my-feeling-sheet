import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const emotionColors = [
  { name: "빨강", color: "hsl(0 75% 65%)", value: "red" },
  { name: "주황", color: "hsl(25 85% 60%)", value: "orange" },
  { name: "노랑", color: "hsl(45 90% 60%)", value: "yellow" },
  { name: "초록", color: "hsl(140 60% 55%)", value: "green" },
  { name: "파랑", color: "hsl(210 70% 60%)", value: "blue" },
  { name: "남색", color: "hsl(240 60% 65%)", value: "indigo" },
  { name: "보라", color: "hsl(280 60% 65%)", value: "purple" },
  { name: "핑크", color: "hsl(330 70% 70%)", value: "pink" },
];

interface ColorPaletteProps {
  selectedColor: { name: string; color: string; value: string } | null;
  onSelect: (color: { name: string; color: string; value: string }) => void;
}

export const ColorPalette = ({ selectedColor, onSelect }: ColorPaletteProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          2. 감정 색깔을 선택하세요
        </h2>
        <p className="text-muted-foreground">
          이 상황이 어떤 색깔처럼 느껴지나요?
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {emotionColors.map((color) => (
          <button
            key={color.value}
            onClick={() => onSelect(color)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-2xl transition-all hover:scale-105",
              "border-2",
              selectedColor?.value === color.value
                ? "border-foreground shadow-lg scale-105"
                : "border-transparent hover:border-border"
            )}
          >
            <div
              className="w-16 h-16 rounded-full shadow-md transition-all"
              style={{ backgroundColor: color.color }}
            />
            <span className="text-sm font-medium text-foreground">
              {color.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
