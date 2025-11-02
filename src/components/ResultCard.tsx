import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ResultCardProps {
  grade: string;
  className: string;
  name: string;
  storyCard: string;
  selectedColor: { name: string; color: string; value: string } | null;
  emotionWords: string[];
  colorReason: string;
  expression: string;
}

export const ResultCard = ({
  grade,
  className,
  name,
  storyCard,
  selectedColor,
  emotionWords,
  colorReason,
  expression,
}: ResultCardProps) => {
  if (!storyCard || !selectedColor || emotionWords.length === 0) {
    return null;
  }

  return (
    <Card
      id="result-card"
      className="p-8 bg-gradient-to-br from-card to-background border-2 border-border shadow-xl max-w-2xl mx-auto"
    >
      <div className="space-y-4">
        {/* Header with Student Info */}
        <div className="space-y-3">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-foreground">
              마음빛 카드
            </h1>
            <p className="text-sm text-muted-foreground">색으로 감정을 이야기하는 놀이</p>
          </div>
          
          {/* Student Info - More Prominent */}
          {(grade || className || name) && (
            <div className="flex justify-center gap-4 text-sm font-medium bg-primary/5 py-2 px-4 rounded border border-primary/20">
              {grade && <span className="text-foreground">{grade}학년</span>}
              {className && <span className="text-foreground">{className}반</span>}
              {name && <span className="text-primary">{name}</span>}
            </div>
          )}
        </div>

        <Separator />

        {/* Story Card */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">나의 이야기</h3>
          <Card className="p-4 bg-accent/30 border-accent">
            <p className="text-base text-card-foreground">{storyCard}</p>
          </Card>
        </div>

        {/* Selected Color */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">감정의 색깔</h3>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full shadow-md"
              style={{ backgroundColor: selectedColor.color }}
            />
            <span className="text-xl font-medium text-foreground">
              {selectedColor.name}
            </span>
          </div>
        </div>

        {/* Emotion Words - Improved Grid Layout */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">나의 감정</h3>
          <div className="grid grid-cols-3 gap-2">
            {emotionWords.map((word) => (
              <span
                key={word}
                className="px-3 py-2 bg-primary text-primary-foreground rounded text-center text-sm font-medium"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Color Reason */}
        {colorReason && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              이 색깔을 선택한 이유
            </h3>
            <Card className="p-4 bg-muted/30">
              <p className="text-sm text-card-foreground whitespace-pre-wrap">
                {colorReason}
              </p>
            </Card>
          </div>
        )}

        {/* Expression */}
        {expression && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              나의 감정 표현
            </h3>
            <Card className="p-4 bg-muted/30">
              <p className="text-sm text-card-foreground whitespace-pre-wrap">
                {expression}
              </p>
            </Card>
          </div>
        )}

        {/* Footer */}
        <Separator />
        <div className="text-center text-sm text-muted-foreground">
          <p>감정에는 옳고 그름이 없어요 💙</p>
        </div>
      </div>
    </Card>
  );
};