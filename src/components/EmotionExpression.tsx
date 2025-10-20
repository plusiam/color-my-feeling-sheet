import { Textarea } from "@/components/ui/textarea";

interface EmotionExpressionProps {
  value: string;
  onChange: (value: string) => void;
  colorReason: string;
  onColorReasonChange: (value: string) => void;
}

export const EmotionExpression = ({
  value,
  onChange,
  colorReason,
  onColorReasonChange,
}: EmotionExpressionProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          4. 나의 감정을 표현해보세요
        </h2>
        <p className="text-muted-foreground">
          선택한 색깔과 감정에 대해 자유롭게 써보세요
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            왜 이 색깔을 선택했나요?
          </label>
          <Textarea
            value={colorReason}
            onChange={(e) => onColorReasonChange(e.target.value)}
            placeholder="예: 나는 이 상황이 파랑 색깔 같아요. 왜냐하면 마음이 아직 무겁거든요."
            className="min-h-[80px] resize-none bg-card border-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            더 하고 싶은 이야기가 있나요?
          </label>
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="나의 감정에 대해 자유롭게 표현해보세요..."
            className="min-h-[100px] resize-none bg-card border-border"
          />
        </div>
      </div>
    </div>
  );
};
