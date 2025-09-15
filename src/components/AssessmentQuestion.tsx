import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export type QuestionType = "scenario" | "likert" | "slider";

export interface Question {
  id: string;
  type: QuestionType;
  section: string;
  trait: string;
  title: string;
  scenario?: string;
  statement?: string;
  options?: Array<{ value: string; label: string; score: number }>;
  minLabel?: string;
  maxLabel?: string;
  min?: number;
  max?: number;
}

interface AssessmentQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: string, answer: any) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isFirst: boolean;
  isLast: boolean;
  currentAnswer?: any;
}

export const AssessmentQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  currentAnswer
}: AssessmentQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState(currentAnswer);
  
  const progress = (questionNumber / totalQuestions) * 100;

  const handleAnswerChange = (value: any) => {
    setSelectedAnswer(value);
    onAnswer(question.id, value);
  };

  const handleNext = () => {
    if (selectedAnswer !== undefined && selectedAnswer !== null) {
      onNext();
    }
  };

  const renderQuestion = () => {
    switch (question.type) {
      case "scenario":
        return (
          <div className="space-y-6">
            {question.scenario && (
              <div className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground leading-relaxed font-medium">{question.scenario}</p>
              </div>
            )}
            
            <RadioGroup
              value={selectedAnswer}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {question.options?.map((option) => (
                <div
                  key={option.value}
                  className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/30 transition-colors cursor-pointer"
                  onClick={() => handleAnswerChange(option.value)}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="text-foreground leading-relaxed cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "likert":
        return (
          <div className="space-y-6">
            {question.statement && (
              <div className="text-center p-6 bg-gradient-card rounded-lg">
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  "{question.statement}"
                </p>
              </div>
            )}
            
            <RadioGroup
              value={selectedAnswer}
              onValueChange={handleAnswerChange}
              className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                <div key={value} className="flex flex-col items-center space-y-2 flex-1">
                  <RadioGroupItem value={value.toString()} id={value.toString()} />
                  <Label htmlFor={value.toString()} className="text-xs text-center text-muted-foreground">
                    {value === 1 && "Strongly Disagree"}
                    {value === 4 && "Neutral"}
                    {value === 7 && "Strongly Agree"}
                    {value !== 1 && value !== 4 && value !== 7 && value}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "slider":
        return (
          <div className="space-y-6">
            {question.statement && (
              <div className="text-center p-6 bg-gradient-card rounded-lg">
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  "{question.statement}"
                </p>
              </div>
            )}
            
            <div className="space-y-6">
              <Slider
                value={selectedAnswer ? [selectedAnswer] : [5]}
                onValueChange={(value) => handleAnswerChange(value[0])}
                max={question.max || 10}
                min={question.min || 0}
                step={1}
                className="w-full"
              />
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{question.minLabel || "Never"}</span>
                <span className="font-medium text-primary">
                  {selectedAnswer !== undefined ? selectedAnswer : (question.max || 10) / 2}
                </span>
                <span>{question.maxLabel || "Always"}</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6 animate-slide-up">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {questionNumber} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-card border-0 bg-gradient-card">
          <div className="space-y-6">
            {/* Section & Trait */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {question.section}
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                {question.trait}
              </span>
            </div>

            {/* Question Title */}
            <h2 className="text-2xl font-bold text-foreground leading-tight">
              {question.title}
            </h2>

            {/* Question Content */}
            {renderQuestion()}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isFirst}
            className="px-6 py-3"
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === undefined || selectedAnswer === null}
            className="bg-gradient-primary px-6 py-3 font-semibold"
          >
            {isLast ? "Complete Assessment" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};