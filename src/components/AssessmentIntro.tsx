import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Users, TrendingUp, Target } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <Target className="w-4 h-4" />
            Collaboration & Communication Intelligence (CCI)
          </div>
          
          <h1 className="text-5xl font-bold text-white leading-tight">
            Leadership vs Supporter
            <br />
            <span className="text-white/90">Tendencies Assessment</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            In today's collaborative and rapidly changing workplaces, people often shift between 
            stepping up as leaders and supporting others. Both roles are essential: sometimes you 
            guide, ensure direction, solve ambiguity; other times you empower, follow through, and 
            build cohesion.
          </p>
        </div>

        {/* Assessment Overview */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg-custom border-0 p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-leadership/10 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-leadership" />
              </div>
              <h3 className="font-semibold text-foreground">Communication Intelligence</h3>
              <p className="text-sm text-muted-foreground">Clarity, listening style, tone awareness, and feedback handling</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-supporter/10 rounded-xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-supporter" />
              </div>
              <h3 className="font-semibold text-foreground">Collaboration Intelligence</h3>
              <p className="text-sm text-muted-foreground">Team adaptability, trust-building, and conflict management</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-balanced/10 rounded-xl flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-balanced" />
              </div>
              <h3 className="font-semibold text-foreground">Contextual Intelligence</h3>
              <p className="text-sm text-muted-foreground">Adaptability across different social and work contexts</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">What You'll Discover</h3>
              <p className="text-muted-foreground">
                Understanding your default tendencies gives insight for where you can flex—leading when 
                needed, supporting when helpful—which improves team effectiveness, builds trust, avoids 
                burnout, and boosts group success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                25-30 minutes
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                5 assessment sections
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Personalized insights
              </div>
            </div>

            <div className="text-center pt-4">
              <Button 
                onClick={onStart}
                className="bg-gradient-primary hover:shadow-lg-custom transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                Begin Assessment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};