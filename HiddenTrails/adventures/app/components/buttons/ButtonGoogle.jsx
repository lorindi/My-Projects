"use client";
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/config';

function GoogleButton() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <button
      type="button"
      className="w-full h-full bg-neutral-50 border border-stone-300 px-4 py-3 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-base text-neutral-700 font-medium"
      onClick={signInWithGoogle}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Google__G__logo 1">
          <path
            id="Vector"
            d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
            fill="#4285F4"
          />
          <path
            id="Vector_2"
            d="M12 23.0001C14.97 23.0001 17.46 22.0201 19.28 20.3401L15.71 17.5701C14.73 18.2301 13.48 18.6301 12 18.6301C9.13999 18.6301 6.70999 16.7001 5.83999 14.1001H2.17999V16.9401C3.98999 20.5301 7.69999 23.0001 12 23.0001Z"
            fill="#34A853"
          />
          <path
            id="Vector_3"
            d="M5.84 14.0901C5.62 13.4301 5.49 12.7301 5.49 12.0001C5.49 11.2701 5.62 10.5701 5.84 9.91007V7.07007H2.18C1.43 8.55007 1 10.2201 1 12.0001C1 13.7801 1.43 15.4501 2.18 16.9301L5.03 14.7101L5.84 14.0901Z"
            fill="#FBBC05"
          />
          <path
            id="Vector_4"
            d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69999 1 3.98999 3.47 2.17999 7.07L5.83999 9.91C6.70999 7.31 9.13999 5.38 12 5.38Z"
            fill="#EA4335"
          />
        </g>
      </svg>
      Continue with Google
    </button>
  );
}

export default GoogleButton;
