'use client';

import Image from "next/image";
import Btn from "./components/buttons/Buttons";
import InputField from './components/input-fields/InputFields';
import { useState} from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    // Example validation
    if (e.target.value.length < 3) {
      setInputError('Input must be at least 3 characters long.');
    } else {
      setInputError('');
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Btn type="button" variant="transparent" text="Explore" link="/explore" />
      <Btn type="button" variant="filled" text="Explore" link="/explore" />
      <Btn type="button" variant="outlined" text="Explore" link="/explore" />

      <InputField
        id="example-input"
        label="Example Input"
        placeholder="Enter text"
        name="example"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        error={inputError}
        hint="This is a hint"
        required={true}
      />
      <InputField
        id="example-input"
        label="Example Input"
        placeholder="Enter text"
        name="example"
        type="password"
        value={inputValue}
        onChange={handleInputChange}
        error={inputError}
        hint="This is a hint"
        required={true}
      />
    </main>
  );
}
