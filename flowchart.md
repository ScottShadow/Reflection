graph TD
    A[Welcome Screen/Dashboard] --> B{First Time User?};

    B -- Yes --> C[Values Clarification Module];
    C --> D[Option: Quick Check-In vs. Deep Dive];

    B -- No --> D;

    D -- Quick Check-In --> E[CBT Triangle: Thought, Emotion, Behavioral Urge];
    E --> F[Journaling Prompt/Mindfulness Exercise];
    F --> G[Intention Setting];
    G --> A;

    D -- Deep Dive --> H[Stage 1: The Spark - "What's Present?"];
    H --> I[Stage 2: The Guided Inquiry - "Mapping the Experience"];

    I --> I1[CBT Triangle: Identify Thought, Emotion, Behavioral Urge];
    I1 --> I2[Somatic Input: "Where do you feel this in your body?"];
    I2 --> I3[Integral Lens: Level 1 ("I") - Personal Perspective];
    I3 --> I4[Integral Lens: Level 2 ("We") - Relational/Cultural Perspective];
    I4 --> I5[Integral Lens: Level 3 ("It") - Objective Facts/Body State];
    I5 --> I6[Integral Lens: Level 4 ("Its") - Systemic Factors];
    I6 --> I7[Pattern Check: Identify Potential Cognitive Distortions];

    I7 --> J[Stage 3: The Synthesis - Gemini-Powered Conclusion];

    J --> J1[Send Anonymized Data to Backend];
    J1 --> J2[Backend Queries Gemini API with Structured Prompt];
    J2 --> J3[Receive Gemini-Generated Summary];
    J3 --> K[Present Gemini Summary with Disclaimer];

    K --> L[Stage 4: The Integration - Action and Reflection];

    L --> L1[Juxtaposition: Gemini Summary + User's Key Answers];
    L1 --> L2[Action Toolkit: Journaling Prompt (Dynamic)];
    L2 --> L3[Action Toolkit: Mindfulness Exercise (Guided Audio)];
    L3 --> L4[Action Toolkit: Intention Setting];

    L4 --> M[Save Entry to User History];
    M --> N{24 Hours Later (If Intention Set)?};
    N -- Yes --> O[Push Notification: "How did it go?"];
    O --> A;
    N -- No --> A;

    A --> P[Dashboard: Reflection History];
    P --> Q[Dashboard: Pattern Recognition (Notifications)];
    Q --> R[Dashboard: Growth Visualization];
    R --> S[Dashboard: Data Export];
    S --> A;