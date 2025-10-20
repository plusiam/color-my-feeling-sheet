import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";

const storyCards = [
  "나는 친구에게 상처를 준 적이 있어요",
  "나는 용기를 내서 말한 적이 있어요",
  "나는 아직도 친구에게 미안한 마음이 남아 있어요",
  "나는 누군가에게 도움을 받아서 고마웠어요",
  "나는 혼자 해냈을 때 뿌듯했어요",
  "나는 실수를 했을 때 부끄러웠어요",
  "나는 새로운 것을 시작할 때 설렜어요",
  "나는 걱정이 되어서 불안했어요",
];

interface StoryCardSelectorProps {
  selectedCard: string;
  onSelect: (card: string) => void;
  customCard: string;
  onCustomCardChange: (card: string) => void;
}

export const StoryCardSelector = ({ 
  selectedCard, 
  onSelect, 
  customCard, 
  onCustomCardChange 
}: StoryCardSelectorProps) => {
  const isCustomSelected = selectedCard === "custom" || (customCard && selectedCard === customCard);
  
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          1. 이야기 카드를 선택하세요
        </h2>
        <p className="text-muted-foreground">
          최근 경험이나 기분에 맞는 카드를 골라보세요
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {storyCards.map((card) => (
          <Card
            key={card}
            className={cn(
              "p-4 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg",
              "border-2 bg-card text-center",
              selectedCard === card
                ? "border-primary bg-accent shadow-lg scale-[1.02]"
                : "border-border hover:border-primary/50"
            )}
            onClick={() => onSelect(card)}
          >
            <p className="text-sm md:text-base font-medium text-card-foreground">
              {card}
            </p>
          </Card>
        ))}
      </div>

      {/* Custom Card Input */}
      <Card
        className={cn(
          "p-4 border-2 transition-all",
          isCustomSelected
            ? "border-primary bg-accent shadow-lg"
            : "border-dashed border-border hover:border-primary/50"
        )}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-foreground">
            <PlusCircle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">직접 입력하기</h3>
          </div>
          <Textarea
            value={customCard}
            onChange={(e) => {
              onCustomCardChange(e.target.value);
              if (e.target.value.trim()) {
                onSelect(e.target.value);
              }
            }}
            placeholder="나만의 이야기를 자유롭게 써보세요..."
            className="min-h-[80px] resize-none bg-background border-border"
          />
        </div>
      </Card>
    </div>
  );
};
