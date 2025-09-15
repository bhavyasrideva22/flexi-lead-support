import { useState } from "react";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { AssessmentQuestion, Question } from "@/components/AssessmentQuestion";
import { AssessmentResults, AssessmentResult } from "@/components/AssessmentResults";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { calculateResults, Answer } from "@/utils/scoring";

type AppState = "intro" | "assessment" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const handleStart = () => {
    setAppState("assessment");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { questionId, value: answer };
        return updated;
      }
      return [...prev, { questionId, value: answer }];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Complete assessment
      const calculatedResults = calculateResults(answers);
      setResults(calculatedResults);
      setAppState("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setAppState("intro");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults(null);
  };

  const getCurrentAnswer = () => {
    const current = assessmentQuestions[currentQuestionIndex];
    const answer = answers.find(a => a.questionId === current.id);
    return answer?.value;
  };

  if (appState === "intro") {
    return <AssessmentIntro onStart={handleStart} />;
  }

  if (appState === "assessment") {
    return (
      <AssessmentQuestion
        question={assessmentQuestions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={assessmentQuestions.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirst={currentQuestionIndex === 0}
        isLast={currentQuestionIndex === assessmentQuestions.length - 1}
        currentAnswer={getCurrentAnswer()}
      />
    );
  }

  if (appState === "results" && results) {
    return <AssessmentResults results={results} onRestart={handleRestart} />;
  }

  return null;
};

export default Index;
