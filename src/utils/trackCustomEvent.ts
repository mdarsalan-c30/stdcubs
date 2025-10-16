type FacebookPixelFunction = {
  (action: "init", pixelId: string): void;
  (
    action: "track",
    eventName: string,
    parameters?: Record<string, unknown>
  ): void;
  (
    action: "trackSingle",
    pixelId: string,
    eventName: string,
    parameters?: Record<string, unknown>
  ): void;
  (
    action: "trackCustom",
    eventName: string,
    parameters?: Record<string, unknown>
  ): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: (args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq: FacebookPixelFunction;
    _fbq?: FacebookPixelFunction;
  }
}

export function trackCustomEvent(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  }
}

// Navigation Tracking Events
export const trackNavigation = {
  home: () => {
    trackCustomEvent("ViewContent", {
      content_type: "navigation",
      content_name: "Home Page",
      content_category: "navigation",
    });
  },

  courses: () => {
    trackCustomEvent("ViewContent", {
      content_type: "navigation",
      content_name: "Courses Page",
      content_category: "course_catalog",
      custom_parameter_1: "grades_3_to_10",
    });
  },

  // contact: () => {
  //   trackCustomEvent("ViewContent", {
  //     content_type: "navigation",
  //     content_name: "Contact Page",
  //     content_category: "contact_info",
  //   });
  // },

  about: () => {
    trackCustomEvent("ViewContent", {
      content_type: "navigation",
      content_name: "About Page",
      content_category: "company_info",
    });
  },
};

// Action Button Tracking Events
export const trackActions = {
  enrollNow: (courseType?: string, grade?: string) => {
    trackCustomEvent("InitiateCheckout", {
      content_type: "course_enrollment",
      content_name: "Enroll Now Button",
      content_category: "enrollment",
      course_type: courseType || "general",
      student_grade: grade || "unknown",
    });
  },

  bookFreeTrial: (course: string, name: string, grade: string) => {
    trackCustomEvent("Lead", {
      content_type: "trial_booking",
      content_name: "Book Free Trial",
      content_category: "lead_generation",
      course: course || "general",
      student_grade: grade || "unknown",
      student_name: name || "unknown",
      trial_type: "free",
      custom_parameter_1: "personalized_learning",
    });
  },
};

// Course-specific tracking
export const trackCourseInterest = {
  publicSpeaking: () => {
    trackCustomEvent("ViewContent", {
      content_type: "course",
      content_name: "Public Speaking Course",
      content_category: "life_skills",
      subject: "public_speaking",
      skill_type: "confidence_building",
    });
  },

  english: () => {
    trackCustomEvent("ViewContent", {
      content_type: "course",
      content_name: "English Grammar Course",
      content_category: "academic_skills",
      subject: "english",
      skill_type: "language_learning",
    });
  },

  creativeWriting: () => {
    trackCustomEvent("ViewContent", {
      content_type: "course",
      content_name: "Creative Writing Course",
      content_category: "creative_skills",
      subject: "creative_writing",
      skill_type: "writing_skills",
    });
  },
};

// export const trackFormSubmissions = {
//   contactForm: (formData: {
//     name?: string;
//     email?: string;
//     grade?: string;
//     subject?: string;
//   }) => {
//     trackCustomEvent("CompleteRegistration", {
//       content_type: "contact_form",
//       content_name: "Contact Form Submission",
//       registration_method: "contact_form",
//       student_grade: formData.grade || "unknown",
//       subject_interest: formData.subject || "general",
//       student_name: formData.name || "unknown",
//       student_email: formData.email || "unknown",
//     });
//   },

//   trialBooking: (formData: {
//     name?: string;
//     email?: string;
//     grade?: string;
//     subject?: string;
//   }) => {
//     trackCustomEvent("CompleteRegistration", {
//       content_type: "trial_booking",
//       content_name: "Free Trial Booking",
//       registration_method: "trial_form",
//       student_grade: formData.grade || "unknown",
//       subject_interest: formData.subject || "general",
//       trial_type: "free",
//       student_name: formData.name || "unknown",
//       student_email: formData.email || "unknown",
//     });
//   },
// };
