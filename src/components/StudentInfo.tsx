import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface StudentInfoProps {
  grade: string;
  className: string;
  name: string;
  onGradeChange: (value: string) => void;
  onClassChange: (value: string) => void;
  onNameChange: (value: string) => void;
}

export const StudentInfo = ({
  grade,
  className,
  name,
  onGradeChange,
  onClassChange,
  onNameChange,
}: StudentInfoProps) => {
  return (
    <Card className="p-6 bg-card border-2 border-border shadow-md">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">
            학생 정보
          </h2>
          <p className="text-sm text-muted-foreground">
            여러분의 정보를 적어주세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="grade" className="block text-sm font-medium text-foreground">
              학년
            </label>
            <Input
              id="grade"
              type="text"
              value={grade}
              onChange={(e) => onGradeChange(e.target.value)}
              placeholder="예: 3"
              className="text-center text-lg bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="class" className="block text-sm font-medium text-foreground">
              반
            </label>
            <Input
              id="class"
              type="text"
              value={className}
              onChange={(e) => onClassChange(e.target.value)}
              placeholder="예: 2"
              className="text-center text-lg bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              이름
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="홍길동"
              className="text-center text-lg bg-background"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
