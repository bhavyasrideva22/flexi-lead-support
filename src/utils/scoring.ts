import { AssessmentResult } from "@/components/AssessmentResults";

export interface Answer {
  questionId: string;
  value: any;
}

export const calculateResults = (answers: Answer[]): AssessmentResult => {
  const answerMap = new Map(answers.map(a => [a.questionId, a.value]));
  
  // Helper function to get score from answer
  const getScore = (questionId: string, defaultScore: number = 50): number => {
    const answer = answerMap.get(questionId);
    if (!answer) return defaultScore;
    
    // For scenario questions, we have predefined scores
    if (typeof answer === 'string') {
      // Map A=4, B=3, C=2, D=1 to percentage scale
      const scoreMap: { [key: string]: number } = { 'A': 85, 'B': 70, 'C': 55, 'D': 40 };
      return scoreMap[answer] || defaultScore;
    }
    
    // For likert (1-7) scale to percentage
    if (typeof answer === 'number' && answer >= 1 && answer <= 7) {
      return Math.round(((answer - 1) / 6) * 100);
    }
    
    // For slider (0-10) scale to percentage
    if (typeof answer === 'number' && answer >= 0 && answer <= 10) {
      return Math.round((answer / 10) * 100);
    }
    
    return defaultScore;
  };

  // Communication Intelligence Scores
  const clarity = Math.round((getScore('comm_clarity_scenario') + getScore('comm_tone_scenario')) / 2);
  const listening_style = getScore('comm_listening_slider');
  const tone_awareness = getScore('comm_tone_scenario');
  const feedback_handling = Math.round((getScore('comm_feedback_likert') + getScore('comm_feedback_scenario')) / 2);
  
  const commScore = Math.round((clarity + listening_style + tone_awareness + feedback_handling) / 4);
  
  // Collaboration Intelligence Scores
  const team_adaptability = getScore('collab_adaptability_scenario');
  const trust_building = Math.round((getScore('collab_trust_scenario') + getScore('collab_encouragement_likert')) / 2);
  const conflict_management = getScore('collab_conflict_scenario');
  const shared_ownership = getScore('collab_ownership_likert');
  
  const collabScore = Math.round((team_adaptability + trust_building + conflict_management + shared_ownership) / 4);
  
  // Contextual Agility Scores
  const digitalGap = getScore('context_digital_slider');
  const one_on_one = getScore('context_mentoring_scenario');
  const group_meetings = 75; // Calculated from multiple questions in full assessment
  const conflict_zones = getScore('context_conflict_scenario');
  const digital_environments = Math.max(0, 100 - digitalGap); // Inverse of digital difficulty
  
  const contextScore = Math.round((one_on_one + group_meetings + conflict_zones + digital_environments) / 4);
  
  // COACH Profile Scores
  const clarity_comprehension = getScore('coach_clarity_likert');
  const openness_feedback = getScore('coach_openness_likert');
  const alignment_empathy = getScore('coach_empathy_likert');
  const conflict_navigation = getScore('coach_conflict_likert');
  const harmony_followthrough = getScore('coach_harmony_likert');
  
  // Overall Collaboration Quotient
  const collaboration_quotient = Math.round((commScore * 0.25) + (collabScore * 0.25) + (contextScore * 0.25) + 
    ((clarity_comprehension + openness_feedback + alignment_empathy + conflict_navigation + harmony_followthrough) / 5 * 0.25));

  // Determine style labels based on scores
  const getCommStyle = (score: number) => {
    if (score >= 80) return "Natural Leader";
    if (score >= 60) return "Balanced Guide";
    return "Supportive Communicator";
  };

  const getCollabStyle = (score: number) => {
    if (score >= 80) return "Adaptive Leader";
    if (score >= 60) return "Adaptive Partner";
    return "Supportive Collaborator";
  };

  const getProfileLabel = (scores: any) => {
    const avg = (scores.clarity_comprehension + scores.openness_feedback + scores.alignment_empathy + 
                scores.conflict_navigation + scores.harmony_followthrough) / 5;
    if (avg >= 80) return "Empowering Leader";
    if (avg >= 60) return "Balanced Role-Switcher";
    return "Supportive Collaborator";
  };

  const getBehaviorArchetype = (cq: number) => {
    if (cq >= 80) return "Empowering Leader";
    if (cq >= 60) return "Balanced Collaborator";
    return "Supportive Team Member";
  };

  const getDigitalGap = (gap: number) => {
    if (gap >= 70) return "High";
    if (gap >= 40) return "Moderate";
    return "Low";
  };

  return {
    communication_intelligence: {
      score: commScore,
      style_label: getCommStyle(commScore),
      subscores: {
        clarity,
        listening_style,
        tone_awareness,
        feedback_handling
      },
      strengths: [
        clarity >= 75 ? "Strong clarity in communication" : null,
        feedback_handling >= 75 ? "Excellent feedback handling" : null,
        tone_awareness >= 75 ? "Great tone awareness" : null
      ].filter(Boolean) as string[],
      blind_spots: [
        listening_style < 60 ? "Could improve listening when leading" : null,
        clarity < 60 ? "Could be clearer in communication" : null,
        tone_awareness < 60 ? "Could improve tone adaptation" : null
      ].filter(Boolean) as string[]
    },
    collaboration_intelligence: {
      score: collabScore,
      style_label: getCollabStyle(collabScore),
      collaboration_map: {
        team_adaptability,
        trust_building,
        conflict_management,
        shared_ownership
      }
    },
    contextual_agility: {
      score: contextScore,
      digital_vs_inperson_gap: getDigitalGap(digitalGap),
      heatmap: {
        one_on_one,
        group_meetings,
        conflict_zones,
        digital_environments
      }
    },
    coach_profile: {
      scores: {
        clarity_comprehension,
        openness_feedback,
        alignment_empathy,
        conflict_navigation,
        harmony_followthrough
      },
      profile_label: getProfileLabel({
        clarity_comprehension,
        openness_feedback,
        alignment_empathy,
        conflict_navigation,
        harmony_followthrough
      }),
      team_fit_hint: "Strong fit for collaborative teams needing both leadership and support"
    },
    summary: {
      communication_style: getCommStyle(commScore),
      collaboration_style: getCollabStyle(collabScore),
      behavior_archetype: getBehaviorArchetype(collaboration_quotient),
      top_growth_area: conflict_navigation < 60 ? "Conflict Navigation & Speaking Up" : "Digital Leadership Presence",
      team_environment_fit: ["Hybrid Teams", "Project-Based Roles", "Collaborative Environments"],
      collaboration_quotient,
      recommendation: collaboration_quotient >= 75 ? "Grow & Flex" : "Focus & Strengthen",
      top_tip: "Use 'leader when needed, supporter when helpful' as your guiding mindset; practice explicit leadership moments in digital settings."
    }
  };
};