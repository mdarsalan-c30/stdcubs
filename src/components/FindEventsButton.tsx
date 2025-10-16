"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";
import { trackCustomEvent } from "@/utils/trackCustomEvent";

function FindEventsButton({ className }: { className?: string }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsPopupOpen(true);
          trackCustomEvent("book_free_trial_button_clicked", {
            content_type: "button",
            content_name: "Book Free Trial Button",
            action: "click",
          });
        }}
        className={className}
      >
        Find Events
      </button>
      {isPopupOpen && (
        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
}

export default FindEventsButton;
