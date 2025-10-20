import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ResultCardProps {
  storyCard: string;
  selectedColor: { name: string; color: string; value: string } | null;
  emotionWords: string[];
  colorReason: string;
  expression: string;
}

export const ResultCard = ({
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
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            마음빚 카드
          </h1>
          <p className="text-muted-foreground">색으로 감정을 이야기하는 놀이</p>
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

        {/* Emotion Words */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">나의 감정</h3>
          <div className="flex flex-wrap gap-2">
            {emotionWords.map((word) => (
              <span
                key={word}
                className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium"
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
