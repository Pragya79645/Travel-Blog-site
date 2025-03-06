"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverEffectDemo({title}: {title: string}) {
  return (
    <div className="h-[20rem] flex items-center justify-center">
      <TextHoverEffect text={title} />
    </div>
  );
}
