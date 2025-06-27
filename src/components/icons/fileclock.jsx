import React from 'react'
// Kaynak : https://icons.getbootstrap.com/icons/gear/
export default function Fileclock({
  size = '24', // or any default size of your choice
  color = "currentColor", // or any color of your choice
  stroke="currentColor"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-book-open-text-icon lucide-book-open-text"
     
    >
      <path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M8 14v2.2l1.6 1"/><circle cx="8" cy="16" r="6"/>
    </svg>
  )
}
/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-clock-icon lucide-file-clock">
<path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M8 14v2.2l1.6 1"/><circle cx="8" cy="16" r="6"/>
</svg>
*/