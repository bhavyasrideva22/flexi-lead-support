import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  ChevronRight,
  Download,
  BarChart3
} from "lucide-react";

export interface AssessmentResult {
  communication_intelligence: {
    score: number;
    style_label: string;
    subscores: {
      clarity: number;
      listening_style: number;
      tone_awareness: number;
      feedback_handling: number;
    };
    strengths: string[];
    blind_spots: string[];
  };
  collaboration_intelligence: {
    score: number;
    style_label: string;
    collaboration_map: {
      team_adaptability: number;
      trust_building: number;
      conflict_management: number;
      shared_ownership: number;
    };
  };
  contextual_agility: {
    score: number;
    digital_vs_inperson_gap: string;
    heatmap: {
      one_on_one: number;
      group_meetings: number;
      conflict_zones: number;
      digital_environments: number;
    };
  };
  coach_profile: {
    scores: {
      clarity_comprehension: number;
      openness_feedback: number;
      alignment_empathy: number;
      conflict_navigation: number;
      harmony_followthrough: number;
    };
    profile_label: string;
    team_fit_hint: string;
  };
  summary: {
    communication_style: string;
    collaboration_style: string;
    behavior_archetype: string;
    top_growth_area: string;
    team_environment_fit: string[];
    collaboration_quotient: number;
    recommendation: string;
    top_tip: string;
  };
}

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRestart: () => void;
}

export const AssessmentResults = ({ results, onRestart }: AssessmentResultsProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-supporter";
    return "text-muted-foreground";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-success/10";
    if (score >= 60) return "bg-supporter/10";
    return "bg-muted";
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            Assessment Complete
          </div>
          
          <h1 className="text-4xl font-bold text-foreground">
            Your Leadership & Supporter Profile
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {results.summary.behavior_archetype} • Collaboration Quotient: {results.summary.collaboration_quotient}
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-leadership/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-leadership" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Communication Style</h3>
                  <Badge variant="secondary" className="mt-1">
                    {results.summary.communication_style}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Overall Score</span>
                  <span className={`font-semibold ${getScoreColor(results.communication_intelligence.score)}`}>
                    {results.communication_intelligence.score}%
                  </span>
                </div>
                <Progress value={results.communication_intelligence.score} className="h-2" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-supporter/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-supporter" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Collaboration Style</h3>
                  <Badge variant="secondary" className="mt-1">
                    {results.summary.collaboration_style}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Overall Score</span>
                  <span className={`font-semibold ${getScoreColor(results.collaboration_intelligence.score)}`}>
                    {results.collaboration_intelligence.score}%
                  </span>
                </div>
                <Progress value={results.collaboration_intelligence.score} className="h-2" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-balanced/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-balanced" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contextual Agility</h3>
                  <Badge variant="secondary" className="mt-1">
                    {results.contextual_agility.digital_vs_inperson_gap} Gap
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Overall Score</span>
                  <span className={`font-semibold ${getScoreColor(results.contextual_agility.score)}`}>
                    {results.contextual_agility.score}%
                  </span>
                </div>
                <Progress value={results.contextual_agility.score} className="h-2" />
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Communication Intelligence Detail */}
          <Card className="p-8 shadow-card border-0 bg-gradient-card">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-leadership" />
                Communication Intelligence
              </h3>
              
              <div className="space-y-4">
                {Object.entries(results.communication_intelligence.subscores).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground capitalize">
                        {key.replace('_', ' ')}
                      </span>
                      <span className={`font-semibold ${getScoreColor(value)}`}>
                        {value}%
                      </span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-success mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {results.communication_intelligence.strengths.map((strength, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Growth Areas</h4>
                  <ul className="space-y-1">
                    {results.communication_intelligence.blind_spots.map((spot, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        {spot}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* COACH Profile */}
          <Card className="p-8 shadow-card border-0 bg-gradient-card">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-balanced" />
                COACH Profile
              </h3>
              
              <div className="text-center p-4 bg-balanced/10 rounded-lg">
                <h4 className="font-bold text-balanced text-lg">
                  {results.coach_profile.profile_label}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.coach_profile.team_fit_hint}
                </p>
              </div>

              <div className="space-y-4">
                {Object.entries(results.coach_profile.scores).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground capitalize">
                        {key.replace('_', ' & ')}
                      </span>
                      <span className={`font-semibold ${getScoreColor(value)}`}>
                        {value}%
                      </span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="p-8 shadow-card border-0 bg-gradient-primary text-white">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Target className="w-6 h-6" />
              Key Insights & Recommendations
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Top Growth Area</h4>
                  <p className="text-white/90">{results.summary.top_growth_area}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Team Environment Fit</h4>
                  <div className="flex flex-wrap gap-2">
                    {results.summary.team_environment_fit.map((env, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                        {env}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Recommendation</h4>
                  <p className="text-white/90">{results.summary.recommendation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Top Tip</h4>
                  <p className="text-white/90 italic">"{results.summary.top_tip}"</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="px-6 py-3">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          
          <Button onClick={onRestart} className="bg-gradient-primary px-6 py-3">
            Take Assessment Again
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};