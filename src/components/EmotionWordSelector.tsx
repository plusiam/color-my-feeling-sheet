import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, X } from "lucide-react";

const emotionWords = [
  "뿌듯함", "후회", "미안함", "설렘", "다행", "부끄러움",
  "고마움", "기쁨", "슬픔", "화남", "불안함", "걱정",
  "외로움", "두려움", "행복함", "안도감", "실망", "좌절",
  "희망", "평온함", "답답함", "속상함", "질투", "부러움",
  "억울함", "창피함", "뭉클함", "쓸쓸함", "허전함", "아쉬움",
  "서운함", "신남", "벅참", "감동", "놀람", "당황",
  "흥분", "안타까움", "편안함", "뿌듯함", "자랑스러움", "긴장"
];

interface EmotionWordSelectorProps {
  selectedWords: string[];
  onToggle: (word: string) => void;
  customWords: string[];
  onAddCustomWord: (word: string) => void;
  onRemoveCustomWord: (word: string) => void;
}

export const EmotionWordSelector = ({ 
  selectedWords, 
  onToggle,
  customWords,
  onAddCustomWord,
  onRemoveCustomWord
}: EmotionWordSelectorProps) => {
  const [newWord, setNewWord] = useState("");

  const handleAddWord = () => {
    if (newWord.trim()) {
      onAddCustomWord(newWord.trim());
      setNewWord("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddWord();
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          3. 감정 단어를 선택하세요
        </h2>
        <p className="text-muted-foreground">
          나의 감정에 맞는 단어를 모두 골라보세요 (여러 개 선택 가능)
        </p>
      </div>

      {/* Preset Words */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground text-center">
          감정 단어 목록
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {emotionWords.map((word) => {
            const isSelected = selectedWords.includes(word);
            return (
              <Badge
                key={word}
                variant={isSelected ? "default" : "outline"}
                className={cn(
                  "px-3 py-1.5 text-sm cursor-pointer transition-all hover:scale-105",
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

      {/* Custom Words Section */}
      <div className="space-y-3 border-2 border-dashed border-border rounded-lg p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-foreground">
            <Plus className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">나만의 감정 단어 추가하기</h3>
          </div>
          <div className="flex gap-2">
            <Input
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="예: 찡함, 몽글몽글, 짜릿함..."
              className="bg-background border-border"
            />
            <Button
              onClick={handleAddWord}
              size="icon"
              className="shrink-0 bg-primary hover:bg-primary/90"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Display Custom Words */}
        {customWords.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">내가 추가한 단어</p>
            <div className="flex flex-wrap gap-2">
              {customWords.map((word) => {
                const isSelected = selectedWords.includes(word);
                return (
                  <Badge
                    key={word}
                    variant={isSelected ? "default" : "outline"}
                    className={cn(
                      "px-3 py-1.5 text-sm cursor-pointer transition-all hover:scale-105 gap-1",
                      isSelected
                        ? "bg-secondary text-secondary-foreground shadow-md"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <span onClick={() => onToggle(word)}>{word}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveCustomWord(word);
                      }}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
