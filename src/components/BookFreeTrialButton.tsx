"use client";
import React from "react";
import { trackCustomEvent } from "@/utils/trackCustomEvent";
import Link from "next/link";

function BookFreeTrialButton({ className }: { className?: string }) {
  return (
    <Link href="/book-free-trial" onClick={() => {
      trackCustomEvent("book_free_trial_button_clicked", {
        content_type: "button",
        content_name: "Book Free Trial Button",
        action: "click",
      });
    }} className={className}>
      Book Your Free Trial
    </Link>
  );
}

export default BookFreeTrialButton;
