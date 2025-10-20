import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";

export const emotionColors = [
  { name: "빨강", color: "hsl(0 75% 65%)", value: "red", category: "basic" },
  { name: "주황", color: "hsl(25 85% 60%)", value: "orange", category: "basic" },
  { name: "노랑", color: "hsl(45 90% 60%)", value: "yellow", category: "basic" },
  { name: "초록", color: "hsl(140 60% 55%)", value: "green", category: "basic" },
  { name: "파랑", color: "hsl(210 70% 60%)", value: "blue", category: "basic" },
  { name: "남색", color: "hsl(240 60% 65%)", value: "indigo", category: "basic" },
  { name: "보라", color: "hsl(280 60% 65%)", value: "purple", category: "basic" },
  { name: "핑크", color: "hsl(330 70% 70%)", value: "pink", category: "basic" },
  // Pastel colors
  { name: "연한 빨강", color: "hsl(0 70% 85%)", value: "light-red", category: "pastel" },
  { name: "복숭아", color: "hsl(25 80% 85%)", value: "peach", category: "pastel" },
  { name: "연한 노랑", color: "hsl(45 85% 85%)", value: "light-yellow", category: "pastel" },
  { name: "민트", color: "hsl(140 55% 80%)", value: "mint", category: "pastel" },
  { name: "하늘", color: "hsl(210 65% 85%)", value: "sky", category: "pastel" },
  { name: "라벤더", color: "hsl(240 55% 85%)", value: "lavender", category: "pastel" },
  { name: "연보라", color: "hsl(280 55% 85%)", value: "light-purple", category: "pastel" },
  { name: "연분홍", color: "hsl(330 65% 88%)", value: "light-pink", category: "pastel" },
  // Dark colors
  { name: "진한 빨강", color: "hsl(0 65% 45%)", value: "dark-red", category: "dark" },
  { name: "갈색", color: "hsl(25 50% 40%)", value: "brown", category: "dark" },
  { name: "올리브", color: "hsl(60 40% 40%)", value: "olive", category: "dark" },
  { name: "진한 초록", color: "hsl(140 50% 35%)", value: "dark-green", category: "dark" },
  { name: "진한 파랑", color: "hsl(210 60% 40%)", value: "dark-blue", category: "dark" },
  { name: "진한 남색", color: "hsl(240 55% 45%)", value: "dark-indigo", category: "dark" },
  { name: "진한 보라", color: "hsl(280 50% 45%)", value: "dark-purple", category: "dark" },
  { name: "자주", color: "hsl(330 50% 50%)", value: "magenta", category: "dark" },
  // Neutral colors
  { name: "흰색", color: "hsl(0 0% 95%)", value: "white", category: "neutral" },
  { name: "회색", color: "hsl(0 0% 60%)", value: "gray", category: "neutral" },
  { name: "검정", color: "hsl(0 0% 20%)", value: "black", category: "neutral" },
  { name: "베이지", color: "hsl(40 30% 80%)", value: "beige", category: "neutral" },
];

interface ColorPaletteProps {
  selectedColor: { name: string; color: string; value: string } | null;
  onSelect: (color: { name: string; color: string; value: string }) => void;
  customColorName: string;
  onCustomColorNameChange: (name: string) => void;
}

export const ColorPalette = ({ 
  selectedColor, 
  onSelect,
  customColorName,
  onCustomColorNameChange
}: ColorPaletteProps) => {
  const basicColors = emotionColors.filter(c => c.category === "basic");
  const pastelColors = emotionColors.filter(c => c.category === "pastel");
  const darkColors = emotionColors.filter(c => c.category === "dark");
  const neutralColors = emotionColors.filter(c => c.category === "neutral");

  const renderColorGrid = (colors: typeof emotionColors) => (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
      {colors.map((color) => (
        <button
          key={color.value}
          onClick={() => onSelect(color)}
          className={cn(
            "flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all hover:scale-105",
            "border-2",
            selectedColor?.value === color.value
              ? "border-foreground shadow-lg scale-105"
              : "border-transparent hover:border-border"
          )}
        >
          <div
            className="w-12 h-12 rounded-full shadow-md transition-all"
            style={{ backgroundColor: color.color }}
          />
          <span className="text-xs font-medium text-foreground text-center leading-tight">
            {color.name}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          2. 감정 색깔을 선택하세요
        </h2>
        <p className="text-muted-foreground">
          이 상황이 어떤 색깔처럼 느껴지나요?
        </p>
      </div>

      {/* Basic Colors */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">기본 색깔</h3>
        {renderColorGrid(basicColors)}
      </div>

      {/* Pastel Colors */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">파스텔 색깔</h3>
        {renderColorGrid(pastelColors)}
      </div>

      {/* Dark Colors */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">진한 색깔</h3>
        {renderColorGrid(darkColors)}
      </div>

      {/* Neutral Colors */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">무채색</h3>
        {renderColorGrid(neutralColors)}
      </div>

      {/* Custom Color Name */}
      <Card className="p-4 border-2 border-dashed border-border hover:border-primary/50 transition-all">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-foreground">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">나만의 색깔 이름 짓기</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            위 색깔 중 하나를 선택한 후, 나만의 이름을 지어보세요
          </p>
          <Input
            value={customColorName}
            onChange={(e) => {
              onCustomColorNameChange(e.target.value);
              if (selectedColor && e.target.value.trim()) {
                onSelect({
                  ...selectedColor,
                  name: e.target.value
                });
              }
            }}
            placeholder='예: "기분 좋은 노란색", "차가운 파랑"'
            className="bg-background border-border"
            disabled={!selectedColor}
          />
          {!selectedColor && (
            <p className="text-xs text-muted-foreground">
              먼저 위에서 색깔을 선택해주세요
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};
