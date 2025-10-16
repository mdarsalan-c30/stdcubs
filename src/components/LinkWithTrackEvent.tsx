"use client"
import { trackCustomEvent } from '@/utils/trackCustomEvent';
import Link from 'next/link'
import React from 'react'

export default function LinkWithTrackEvent({ href, buttonText, eventName, eventParams, className }: {
    href: string;
    buttonText: string;
    eventName?: string;
    eventParams?: Record<string, string | number | boolean>;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={className || "bg-[#FFBC36] text-white px-8 py-2 text-lg font-semibold"}
            onClick={() => {
                trackCustomEvent(eventName || "", eventParams)
            }}
        >
            {buttonText}
        </Link>
    )
}
