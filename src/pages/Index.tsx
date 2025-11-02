import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StudentInfo } from "@/components/StudentInfo";
import { StoryCardSelector } from "@/components/StoryCardSelector";
import { ColorPalette } from "@/components/ColorPalette";
import { EmotionWordSelector } from "@/components/EmotionWordSelector";
import { EmotionExpression } from "@/components/EmotionExpression";
import { ResultCard } from "@/components/ResultCard";
import { downloadAsImage } from "@/lib/downloadUtils";
import { Download, RotateCcw, Heart } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [grade, setGrade] = useState("");
  const [className, setClassName] = useState("");
  const [name, setName] = useState("");
  const [customStoryCard, setCustomStoryCard] = useState("");
  const [selectedStory, setSelectedStory] = useState("");
  const [selectedColor, setSelectedColor] = useState<{
    name: string;
    color: string;
    value: string;
  } | null>(null);
  const [customColorName, setCustomColorName] = useState("");
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [customEmotionWords, setCustomEmotionWords] = useState<string[]>([]);
  const [colorReason, setColorReason] = useState("");
  const [expression, setExpression] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleEmotionToggle = (word: string) => {
    setSelectedEmotions((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  const handleAddCustomEmotion = (word: string) => {
    if (!customEmotionWords.includes(word)) {
      setCustomEmotionWords((prev) => [...prev, word]);
      setSelectedEmotions((prev) => [...prev, word]);
    }
  };

  const handleRemoveCustomEmotion = (word: string) => {
    setCustomEmotionWords((prev) => prev.filter((w) => w !== word));
    setSelectedEmotions((prev) => prev.filter((w) => w !== word));
  };

  const handleShowResult = () => {
    if (!selectedStory) {
      toast.error("이야기 카드를 선택해주세요");
      return;
    }
    if (!selectedColor) {
      toast.error("감정 색깔을 선택해주세요");
      return;
    }
    if (selectedEmotions.length === 0) {
      toast.error("감정 단어를 하나 이상 선택해주세요");
      return;
    }
    setShowResult(true);
    toast.success("마음빛 카드가 완성되었어요! 🎉");
  };

  const handleDownload = async () => {
    await downloadAsImage("result-card", `마음빛카드_${Date.now()}.png`);
    toast.success("이미지가 다운로드되었어요!");
  };

  const handleReset = () => {
    setGrade("");
    setClassName("");
    setName("");
    setCustomStoryCard("");
    setSelectedStory("");
    setSelectedColor(null);
    setCustomColorName("");
    setSelectedEmotions([]);
    setCustomEmotionWords([]);
    setColorReason("");
    setExpression("");
    setShowResult(false);
    toast.info("새로 시작합니다");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              마음빛 카드
            </h1>
            <Heart className="w-8 h-8 text-secondary" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground">
            색으로 감정을 이야기하는 놀이
          </p>
          <p className="text-sm text-muted-foreground">
            나의 감정을 색깔로 표현하고, 친구들과 함께 나눠보아요
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {!showResult ? (
          <>
            <StudentInfo
              grade={grade}
              className={className}
              name={name}
              onGradeChange={setGrade}
              onClassChange={setClassName}
              onNameChange={setName}
            />

            <StoryCardSelector
              selectedCard={selectedStory}
              onSelect={setSelectedStory}
              customCard={customStoryCard}
              onCustomCardChange={setCustomStoryCard}
            />

            {selectedStory && (
              <ColorPalette
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
                customColorName={customColorName}
                onCustomColorNameChange={setCustomColorName}
              />
            )}

            {selectedStory && selectedColor && (
              <EmotionWordSelector
                selectedWords={selectedEmotions}
                onToggle={handleEmotionToggle}
                customWords={customEmotionWords}
                onAddCustomWord={handleAddCustomEmotion}
                onRemoveCustomWord={handleRemoveCustomEmotion}
              />
            )}

            {selectedStory && selectedColor && selectedEmotions.length > 0 && (
              <EmotionExpression
                value={expression}
                onChange={setExpression}
                colorReason={colorReason}
                onColorReasonChange={setColorReason}
              />
            )}

            {selectedStory && selectedColor && selectedEmotions.length > 0 && (
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={handleShowResult}
                  className="bg-primary hover:bg-primary/90"
                >
                  완성하기 ✨
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  다시 시작
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-6">
            <ResultCard
              grade={grade}
              className={className}
              name={name}
              storyCard={selectedStory}
              selectedColor={selectedColor}
              emotionWords={selectedEmotions}
              colorReason={colorReason}
              expression={expression}
            />

            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                <Download className="w-4 h-4" />
                이미지 다운로드
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleReset}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                다시 만들기
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>💡 다운로드한 이미지를 학급 클래스에 올려보세요</p>
              <p className="text-xs">
                이 학습지는 학생 데이터를 수집하지 않으며, 모든 작업은 여러분의 기기에서만 처리됩니다
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 mt-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            📌 활동 팁: 친구의 이야기를 듣고 함께 감정 단어를 찾아주세요
          </p>
          <p className="text-xs text-muted-foreground">
            감정에는 옳고 그름이 없다는 것을 기억해요 💙
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;