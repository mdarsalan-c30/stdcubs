"use client";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { LiaTimesSolid } from "react-icons/lia";
import { trackActions } from "@/utils/trackCustomEvent";

export default function PopupForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    grade: "",
    confirm: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleCourseChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is reset when component unmounts
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    trackActions.bookFreeTrial(formData.course, formData.name, formData.grade);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      setSubmitted(true);
      setLoading(false);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          grade: "",
          confirm: false,
        });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
      setLoading(false);
    }
  };

  if (!isOpen) return null;



  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000000]"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <LiaTimesSolid
          style={{
            color: "#2AB7CA",
            fontSize: "20px",
            position: "absolute",
            right: "15px",
            top: "15px",
          }}
          className="cursor-pointer"
          onClick={onClose}
        />
        {submitted ? (
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-green-500 text-5xl mb-2" />
            <h2 className="text-2xl font-bold">Thank You for Registering!</h2>
            <p className="text-gray-600 text-sm">
              We will get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-[#2AB7CA] font-bold text-center mb-4">
              Registration Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border-b-2 border-[#2AB7CA] p-2 w-full outline-none text-sm font-inter text-black"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Id"
                className="border-b-2 border-[#2AB7CA] p-2 w-full outline-none text-sm font-inter text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border-b-2 border-[#2AB7CA] p-2 w-full outline-none text-sm font-inter text-black"
                required
              />
              <select
                name="course"
                value={formData.course}
                onChange={handleCourseChange}
                className="border-b-2 border-[#2AB7CA] p-2 w-full outline-none text-sm font-inter text-black"
                required
              >
                <option value="">Select Course</option>
                <option value="Public Speakingeact">Public Speaking</option>
                <option value="Website Development">Website Development</option>
                <option value="Financial Planning">Financial Planning</option>
              </select>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                placeholder="Grade"
                className="border-b-2 border-[#2AB7CA] p-2 w-full outline-none text-sm font-inter text-black"
                required
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="confirm"
                  checked={formData.confirm}
                  onChange={handleChange}
                  className="w-4 h-4"
                  required
                />
                <label className="text-[10px] text-black font-inter">
                  By submitting this form, I confirm that the information
                  provided is accurate and true to the best of my knowledge.
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#2AB7CA] text-white px-4 py-2 rounded-md w-full mt-2 flex justify-center items-center"
                disabled={loading}
              >
                {loading ? <ClipLoader size={20} color="white" /> : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
