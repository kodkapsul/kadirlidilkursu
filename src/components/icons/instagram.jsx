import React from 'react'
// Kaynak : https://icons.getbootstrap.com/icons/gear/
export default function Instagram({
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      
    </svg>
  )
}
/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
</svg>
*/