import { Question } from "@/components/AssessmentQuestion";

export const assessmentQuestions: Question[] = [
  // Communication Intelligence Section
  {
    id: "comm_clarity_scenario",
    type: "scenario",
    section: "Communication Intelligence",
    trait: "Clarity",
    title: "Leading with Clarity",
    scenario: "You are asked to lead a small project. At the project kickoff, one team member asks a clarifying question you hadn't anticipated. What do you do?",
    options: [
      {
        value: "A",
        label: "Immediately adjust and restate your plan with more detail.",
        score: 4
      },
      {
        value: "B", 
        label: "Ask them which part was unclear, but largely proceed.",
        score: 3
      },
      {
        value: "C",
        label: "Frown, reassure them it will make sense in process.",
        score: 2
      },
      {
        value: "D",
        label: "Prefer to move on to keep momentum, hope questions stop.",
        score: 1
      }
    ]
  },
  {
    id: "comm_feedback_likert",
    type: "likert",
    section: "Communication Intelligence", 
    trait: "Feedback Handling",
    title: "Supporter vs Leader in Feedback",
    statement: "When someone in my team gives me feedback, I respond with curiosity rather than defensiveness."
  },
  {
    id: "comm_tone_scenario",
    type: "scenario",
    section: "Communication Intelligence",
    trait: "Tone Awareness",
    title: "Tone Judgment - Support Role",
    scenario: "As a supporter, if your leader gives instructions you think are unclear, which tone is most effective in asking for clarification?",
    options: [
      {
        value: "A",
        label: "I'm a little unsure what you meant by X; could you clarify?",
        score: 4
      },
      {
        value: "B",
        label: "Why didn't you specify this earlier?",
        score: 1
      },
      {
        value: "C", 
        label: "I guess I'll just wing it.",
        score: 2
      },
      {
        value: "D",
        label: "If it helps, I can suggest a clearer version to us both.",
        score: 3
      }
    ]
  },
  {
    id: "comm_listening_slider",
    type: "slider",
    section: "Communication Intelligence",
    trait: "Listening Style",
    title: "Listening Style - Leadership Mode",
    statement: "When I lead discussions, I allow pauses and encourage input before pushing ahead.",
    min: 0,
    max: 10,
    minLabel: "Never",
    maxLabel: "Always"
  },
  {
    id: "comm_feedback_scenario",
    type: "scenario",
    section: "Communication Intelligence",
    trait: "Feedback Handling", 
    title: "Feedback Handling - Supporting Others",
    scenario: "You see a peer struggling with a task. Do you:",
    options: [
      {
        value: "A",
        label: "Offer help and ask if they'd like support.",
        score: 4
      },
      {
        value: "B",
        label: "Wait until they ask you.",
        score: 2
      },
      {
        value: "C",
        label: "Tell them they're falling behind.",
        score: 1
      },
      {
        value: "D",
        label: "Take over to ensure done.",
        score: 3
      }
    ]
  },
  {
    id: "comm_instinct_likert",
    type: "likert",
    section: "Communication Intelligence",
    trait: "Leadership Tendency",
    title: "Self-Perception - Leaning",
    statement: "In group settings, I instinctively take charge rather than follow someone else's lead."
  },

  // Collaboration Intelligence Section
  {
    id: "collab_adaptability_scenario",
    type: "scenario",
    section: "Collaboration Intelligence",
    trait: "Team Adaptability",
    title: "Role Shift",
    scenario: "Midway through a group project, the original leader steps away temporarily. You take over. How do you approach this?",
    options: [
      {
        value: "A",
        label: "Introduce yourself, restate plan, invite input.",
        score: 4
      },
      {
        value: "B",
        label: "Continue what was planned without changes.",
        score: 2
      },
      {
        value: "C",
        label: "Make decisions to keep schedule regardless of consensus.",
        score: 1
      },
      {
        value: "D",
        label: "Hesitate and seek validation before action.",
        score: 3
      }
    ]
  },
  {
    id: "collab_ownership_likert",
    type: "likert",
    section: "Collaboration Intelligence",
    trait: "Shared Ownership",
    title: "Shared Ownership",
    statement: "When the team does well, I feel equally proud whether I was leading or supporting."
  },
  {
    id: "collab_trust_scenario",
    type: "scenario",
    section: "Collaboration Intelligence",
    trait: "Trust Building",
    title: "Trust Building - As Supporter",
    scenario: "A colleague entrusts you with a critical task. Do you:",
    options: [
      {
        value: "A",
        label: "Deliver well and keep them updated.",
        score: 4
      },
      {
        value: "B",
        label: "Ask many check-ins even if you don't need them.",
        score: 2
      },
      {
        value: "C",
        label: "Delay because you were unsure.",
        score: 1
      },
      {
        value: "D",
        label: "Do it quickly but without communication.",
        score: 3
      }
    ]
  },
  {
    id: "collab_conflict_scenario",
    type: "scenario",
    section: "Collaboration Intelligence",
    trait: "Conflict Management",
    title: "Conflict Management - Leadership Mode",
    scenario: "Two team members disagree on approach under your lead. You:",
    options: [
      {
        value: "A",
        label: "Facilitate a joint discussion to find common ground.",
        score: 4
      },
      {
        value: "B",
        label: "Choose one side you believe is right.",
        score: 2
      },
      {
        value: "C",
        label: "Postpone decision hoping conflict resolves itself.",
        score: 1
      },
      {
        value: "D",
        label: "Impose your decision to avoid delay.",
        score: 3
      }
    ]
  },
  {
    id: "collab_encouragement_likert",
    type: "likert",
    section: "Collaboration Intelligence",
    trait: "Trust Building",
    title: "Supporter Role - Encouragement",
    statement: "I often encourage ideas from others, even if I have a different vision."
  },

  // Contextual Social Intelligence
  {
    id: "context_digital_slider",
    type: "slider",
    section: "Contextual Intelligence",
    trait: "Digital vs In-Person",
    title: "Digital vs In-Person Gap",
    statement: "When in virtual meetings, I find it harder to step into a leadership role than in face-to-face.",
    min: 0,
    max: 10,
    minLabel: "Strongly Disagree",
    maxLabel: "Strongly Agree"
  },
  {
    id: "context_mentoring_scenario",
    type: "scenario",
    section: "Contextual Intelligence",
    trait: "1-on-1 Settings",
    title: "1-on-1 Mentoring Scenario",
    scenario: "Your mentee asks for detailed guidance. You:",
    options: [
      {
        value: "A",
        label: "Provide structured guidance and then invite their ideas.",
        score: 4
      },
      {
        value: "B",
        label: "Ask them to propose solutions first.",
        score: 3
      },
      {
        value: "C",
        label: "Give minimal guidance, expecting initiative.",
        score: 2
      },
      {
        value: "D",
        label: "Take over to avoid mistakes.",
        score: 1
      }
    ]
  },
  {
    id: "context_conflict_scenario",
    type: "scenario",
    section: "Contextual Intelligence",
    trait: "Conflict Zones",
    title: "Conflict Zone Scenario",
    scenario: "Leader is making a decision you believe is risky. In meeting, do you:",
    options: [
      {
        value: "A",
        label: "Speak up with supporting evidence.",
        score: 4
      },
      {
        value: "B",
        label: "Wait until after meeting to share concerns.",
        score: 3
      },
      {
        value: "C",
        label: "Keep quiet but adjust your work quietly.",
        score: 2
      },
      {
        value: "D",
        label: "Follow the decision as leader asked, even if uneasy.",
        score: 1
      }
    ]
  },

  // COACH Diagnostic
  {
    id: "coach_clarity_likert",
    type: "likert",
    section: "COACH Diagnostic",
    trait: "Clarity & Comprehension",
    title: "Clarity & Comprehension",
    statement: "When I lead, my team always knows what success looks like."
  },
  {
    id: "coach_openness_likert",
    type: "likert",
    section: "COACH Diagnostic",
    trait: "Openness & Feedback",
    title: "Openness & Feedback",
    statement: "I solicit feedback from those I support to improve my leadership."
  },
  {
    id: "coach_empathy_likert",
    type: "likert",
    section: "COACH Diagnostic",
    trait: "Alignment & Empathy",
    title: "Alignment & Empathy",
    statement: "I understand when a team member needs more support rather than direction."
  },
  {
    id: "coach_conflict_likert",
    type: "likert",
    section: "COACH Diagnostic",
    trait: "Conflict Navigation",
    title: "Conflict Navigation",
    statement: "When there is disagreement, I aim for a solution that respects both what needs to be done and what people need."
  },
  {
    id: "coach_harmony_likert",
    type: "likert",
    section: "COACH Diagnostic",
    trait: "Harmony & Follow-Through",
    title: "Harmony & Follow-Through", 
    statement: "If I commit to supporting, I follow through reliably even if it means adjusting my schedule."
  }
];

export const sectionTitles = {
  "Communication Intelligence": "Communication Intelligence",
  "Collaboration Intelligence": "Collaboration Intelligence", 
  "Contextual Intelligence": "Contextual Social Intelligence",
  "COACH Diagnostic": "COACH Diagnostic Model"
};