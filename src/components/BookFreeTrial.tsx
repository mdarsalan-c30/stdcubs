"use client";

import { SheetForm } from "@/app/api/submit/route";
import { trackActions } from "@/utils/trackCustomEvent";
import React, { useState, FormEvent } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const getStepButtonLabel = (step: number) => {
  switch (step) {
    case 1: return "Confirm Course";
    case 2: return "Confirm WhatsApp & Grade";
    case 3: return "Confirm Date & Time";
    case 4: return "Book My Free Class";
    default: return "Next";
  }
};

type Errors = Partial<Record<string, string>>;

const BookFreeTrial = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [grade, setGrade] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const resetErrors = () => setErrors({});

  const [childName, setChildName] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
    setStep(2);
  };


  const BackButton = () => (
    <button
      className="text-sm text-blue-600 mt-2 underline"
      onClick={() => setStep(step - 1)}
    >
      ← Go Back
    </button>
  );


  const getUpcomingDates = () => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + 1); // Start from tomorrow

    const result = [];
    let i = 0;
    while (result.length < 6) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (d.getDay() !== 0) {
        result.push({
          label: d.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          }),
          value: d,
        });
      }
      i++;
    }
    return result;
  };

  const getTimeSlots = () => {
    const slots = [];
    const start = new Date(2025, 5, 20, 9, 0); // hour = 9AM
    const end = new Date(2025, 5, 20, 18, 0); // hour = 6PM

    const current = new Date(start);
    while (current < end) {
      slots.push(current.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      current.setMinutes(current.getMinutes() + 30);
    }
    return slots;
  };

  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    const newErrors: Errors = {};
    if (!childName) newErrors.childName = "Child's name is required";
    if (!parentName) newErrors.parentName = "Parent's name is required";
    if (!email || !email.includes("@")) newErrors.email = "Valid email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    resetErrors();
    setLoading(true);

    const payload: SheetForm = {
      name: childName,
      email,
      phone: whatsapp,
      course: selectedCourse || "",
      grade: grade?.toString() || "",
      parent: parentName,
      date: selectedDate || "",
      time: selectedTime || "",
    };

    trackActions.bookFreeTrial(payload.course, payload.name, payload.grade);

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setLoading(false);

      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
        setChildName("");
        setParentName("");
        setEmail("");
        setWhatsapp("");
        setGrade(null);
        setSelectedCourse(null);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#d8edf8] p-8">
      <div className="relative z-20 container mx-auto md:px-12 flex flex-col-reverse md:flex-row items-center justify-center min-h-[600px] h-full">
        <div className="flex flex-col md:flex-row gap-28">
          {/* Left Column */}
          <div className="md:w-[40%] justify-center text-center bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {step === 3 ? (
                "Select Slot for Free Class"
              ) : step === 4 ? (
                "Contact Details"
              ) : (
                <>
                  Book a <span className="text-[#FFBC36]">Free</span> Trial
                  Class Now!
                </>
              )}
            </h2>

            {/* Multi-step Progress Lines */}
            <div className="flex justify-between gap-2 mb-4">
              <div
                className={`h-1 rounded-md ${step >= 1 ? "bg-[#FFBC36]" : "bg-[#E5E7EB]"
                  } w-1/4`}
              ></div>
              <div
                className={`h-1 rounded-md ${step >= 2 ? "bg-[#FFBC36]" : "bg-[#E5E7EB]"
                  } w-1/4`}
              ></div>
              <div
                className={`h-1 rounded-md ${step >= 3 ? "bg-[#FFBC36]" : "bg-[#E5E7EB]"
                  } w-1/4`}
              ></div>

              <div
                className={`h-1 rounded-md ${step >= 4 ? "bg-[#FFBC36]" : "bg-[#E5E7EB]"
                  } w-1/4`}
              ></div>
            </div>

            {/* Step 1: Course Selection */}
            {step === 1 && (
              <>
                <div className="mb-4">
                  <p className="text-lg font-medium mb-2">Choose your course</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div
                      className="border border-gray-400 p-3 cursor-pointer"
                      onClick={() => handleCourseSelect("Public speaking")}
                    >
                      Public speaking
                    </div>
                    <div
                      className="border border-gray-400 p-3 cursor-pointer"
                      onClick={() => handleCourseSelect("Financial Planning")}
                    >
                      Financial Planning
                    </div>
                    <div
                      className="border border-gray-400 p-3 cursor-pointer"
                      onClick={() =>
                        handleCourseSelect("Artificial Intelligence")
                      }
                    >
                      Artificial Intelligence
                    </div>
                  </div>
                </div>
                <button
                  className="bg-[#FFBC36] text-white px-4 py-2 font-semibold w-full"
                  onClick={() => {
                    if (!selectedCourse) {
                      setErrors({ course: "Please select a course" });
                    } else {
                      resetErrors();
                      setStep(2);
                    }
                  }}
                >
                  {getStepButtonLabel(step)}
                </button>
                {errors.course && <p className="text-red-500 text-sm mt-2">{errors.course}</p>}

              </>
            )}

            {/* Step 2: WhatsApp & Grade */}
            {step === 2 && (
              <>
                <div className="mb-4 text-left">
                  <p className="text-sm mb-2">Enter WhatsApp Number</p>
                  <div className="flex items-center border border-gray-300 rounded px-2 py-2 bg-white">
                    <div className="flex items-center gap-1 pr-2">
                      🌍 <IoMdArrowDropdown className="text-gray-500" /> <span className="pl-1">+91</span>
                    </div>
                    <input
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="flex-1 px-2 outline-none"
                    />
                  </div>
                </div>
                <div className="mb-4 text-left">
                  <p className="text-sm mb-2">Select Child&apos;s Grade</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(11)].map((_, i) => {
                      const g = i + 3;
                      return (
                        <div
                          key={g}
                          className={`border rounded-md border-gray-300 text-center py-2 cursor-pointer ${grade === g ? "bg-[#FFBC36] text-white" : ""
                            }`}
                          onClick={() => setGrade(g)}
                        >
                          <p>{g === 13 ? "UG" : `Grade ${g}`}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <BackButton />

                <button
                  className="bg-[#FFBC36] text-white px-4 py-2 font-semibold w-full mt-4"
                  onClick={() => {
                    const newErrors: Partial<Record<string, string>> = {};
                    if (!whatsapp) newErrors.whatsapp = "WhatsApp number is required";
                    if (!grade) newErrors.grade = "Please select a grade";

                    if (Object.keys(newErrors).length > 0) {
                      setErrors(newErrors);
                    } else {
                      resetErrors();
                      setStep(3);
                    }
                  }}
                >
                  {getStepButtonLabel(step)}
                </button>
                {errors.whatsapp && <p className="text-red-500 text-sm mt-2">{errors.whatsapp}</p>}
                {errors.grade && <p className="text-red-500 text-sm mt-2">{errors.grade}</p>}
              </>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <>
                <div className="mb-4 text-left">
                  <p className="text-sm mb-2">Select Date</p>
                  <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                    {getUpcomingDates().map((d, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-md text-center py-2 cursor-pointer ${selectedDate === d.label ? "bg-[#FFBC36] text-white" : ""
                          }`}
                        onClick={() => setSelectedDate(d.label)}
                      >
                        {d.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 mt-8 text-left">
                  <p className="text-sm mb-2">Select Time</p>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-3 max-h-[300px] overflow-y-auto">
                    {getTimeSlots().map((time, i) => (
                      <div
                        key={i}
                        className={`border rounded-md text-center py-2 cursor-pointer ${selectedTime === time ? "bg-[#FFBC36] text-white" : ""
                          }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>


                <BackButton />

                <button
                  className="bg-[#FFBC36] text-white px-4 py-2 font-semibold w-full mt-4"
                  onClick={() => {
                    const newErrors: Partial<Record<string, string>> = {};
                    if (!selectedDate) newErrors.date = "Please select a date";
                    if (!selectedTime) newErrors.time = "Please select a time";

                    if (Object.keys(newErrors).length > 0) {
                      setErrors(newErrors);
                    } else {
                      resetErrors();
                      setStep(4);
                    }
                  }}
                >
                  {getStepButtonLabel(step)}
                </button>
                {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date}</p>}
                {errors.time && <p className="text-red-500 text-sm mt-2">{errors.time}</p>}

              </>
            )}
            {/* Step 3: Contact Details */}
            {step === 4 && (
              <>
                <div className="mb-4 text-left">
                  <p className="text-sm mb-2">
                    Select Please Enter Following Details.
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center border border-gray-300 rounded px-2 py-2 bg-white">
                      <input
                        type="text"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="Enter Child’s Name"
                        className="flex-1 px-2 outline-none"
                      />
                      {errors.childName && <p className="text-red-500 text-sm">{errors.childName}</p>}

                    </div>
                    <div className="flex items-center border border-gray-300 rounded px-2 py-2 bg-white">

                      <input
                        type="text"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Enter Parent Name"
                        className="flex-1 px-2 outline-none"
                      />
                      {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
                    </div>
                    <div className="flex items-center border border-gray-300 rounded px-2 py-2 bg-white">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email ID"
                        className="flex-1 px-2 outline-none"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                <BackButton />

                <button
                  className="bg-[#FFBC36] text-white px-4 py-2 font-semibold w-full mt-4 disabled:opacity-50"
                  disabled={loading || submitted}
                  onClick={handleSubmit}
                >
                  {loading
                    ? "Booking..."
                    : submitted
                      ? "✅ Booked!"
                      : getStepButtonLabel(step)}
                </button>

                {submitted && (
                  <p className="text-green-600 text-sm mt-3">
                    🎉 Your free class is booked successfully!
                  </p>
                )}
              </>
            )}

            {/* Note */}
            <p className="text-sm text-gray-600 mt-3">
              Note: We&apos;ll send the class link and details via email and WhatsApp
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-[60%] px-6 flex flex-col justify-center">
            <h2 className="text-4xl md:w-[70%] font-bold text-gray-800 mb-4">
              Start your Child&apos;s Journey towards future ready skills
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-[#2AB7CA] mt-1" size={12} />
                <span className="text-gray-700">
                  Trained educators guide each child with personalized
                  attention.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-[#2AB7CA] mt-1" size={12} />
                <span className="text-gray-700">
                  1:5 Classes Designed to Unlock Your Child&apos;s Potential
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-[#2AB7CA] mt-1" size={12} />
                <span className="text-gray-700">
                  Engaging sessions and projects make learning fun and
                  practical.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-[#2AB7CA] mt-1" size={12} />
                <span className="text-gray-700">
                  Expert-led curriculum inspired by industry leaders
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-[#2AB7CA] mt-1" size={12} />
                <span className="text-gray-700">
                  Classes That Fit Your Child&apos;s Schedule
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-[#2AB7CA] mt-1" size={12} />
                <span className="text-gray-700">
                  Learn with international students & develop leadership skills!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFreeTrial;
