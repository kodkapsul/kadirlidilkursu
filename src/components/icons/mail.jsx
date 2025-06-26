import React from 'react'
// Kaynak : https://icons.getbootstrap.com/icons/gear/
export default function Mail({
  size = '24', // or any default size of your choice
  color = "currentColor" // or any color of your choice
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"

      viewBox="0 0 24 24"
      width={size} // added size here
      height={size} // added size here
      //fill={color} // added color here
    >
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
    </svg>
  )
}
/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
</svg>
*/