import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const emotionWords = [
  "뿌듯함", "후회", "미안함", "설렘", "다행", "부끄러움",
  "고마움", "기쁨", "슬픔", "화남", "불안함", "걱정",
  "외로움", "두려움", "행복함", "안도감", "실망", "좌절",
  "희망", "평온함", "답답함", "속상함"
];

interface EmotionWordSelectorProps {
  selectedWords: string[];
  onToggle: (word: string) => void;
}

export const EmotionWordSelector = ({ selectedWords, onToggle }: EmotionWordSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          3. 감정 단어를 선택하세요
        </h2>
        <p className="text-muted-foreground">
          나의 감정에 맞는 단어를 모두 골라보세요 (여러 개 선택 가능)
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {emotionWords.map((word) => {
          const isSelected = selectedWords.includes(word);
          return (
            <Badge
              key={word}
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "px-4 py-2 text-base cursor-pointer transition-all hover:scale-105",
                isSelected
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => onToggle(word)}
            >
              {word}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
