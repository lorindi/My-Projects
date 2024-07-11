const CloseIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      onClick={onClick}
    >
      <path
        d="M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 18L18 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export default CloseIcon;
  