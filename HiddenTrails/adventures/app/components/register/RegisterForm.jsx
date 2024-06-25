// "use client";
// import Btn from "../buttons/Buttons";
// import * as React from "react";
// import InputField from "../input-fields/InputFields.jsx";
// import Link from "next/link";
// import { useState } from "react";
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import {auth} from '@/app/firebase/config'


// const RegisterForm = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const  [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await createUserWithEmailAndPassword(email, password);
//       console.log({ res });
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start h-full w-full">
//       <h2
//         className="mb-[40px] text-center  text-white font-medium font-['Inter'] 
//         web:text-[32px]
//         tablet:text-[32px]
//         phone:text-[24px]
//         smallPhone:text-[24px]
//     "
//       >
//         Create Account
//       </h2>
//       <form
//         className="flex items-center justify-evenly flex-col bg-neutral-50 rounded-[5px] 
//         web:w-[582px] web:h-[776px] 
//         tablet:w-[582px] tablet:h-[776px] 
//         phone:w-[361px] phone:min-h-[713px] 
//         smallPhone:w-full smallPhone:min-h-[673px]"
//         onSubmit={handleRegister}
//       >
//         <div
//           className=" text-center 
//         web:flex tablet:flex phone:flex smallPhone:hidden"
//         >
//           <span
//             className="text-neutral-700 font-normal font-['Inter Tight'] 
//           web:text-base tablet:text-base phone:text-sm "
//           >
//             Already have an account?
//           </span>
//           <span
//             className="text-white font-normal font-['Inter Tight']
//           web:text-base tablet:text-base phone:text-sm "
//           ></span>
//           <span
//             className="text-blue-500 font-normal font-['Inter Tight']
//           web:text-base tablet:text-base phone:text-sm "
//           >
//             <Link href="/login">Login</Link>
//           </span>
//         </div>

//         {/* <div
//           className="
//             web:w-[400px] web:h-[60px] 
//             tablet:w-[400px] tablet:h-[60px]
//             phone:w-[320px] phone:h-[43px] 
//             smallPhone:w-[288px] smallPhone:h-[48px]
//             sm:w-72 sm:h-[43px]
//             md:w-80 md:h-[43px]
//             lg:w-[400px] lg:h-[60px]
//           "
//         >
//           <ButtonGoogle />
//         </div> */}

//         <div
//           className="justify-center items-center gap-2 inline-flex 
//           web:w-[400px] web:h-[17px]
//           tablet:w-[400px] tablet:h-[17px] "
//         >
//           <div
//             className="border  border-zinc-400
//             web:w-[183px] web:h-[1px] 
//             tablet:w-[183px] tablet:h-[1px]
//             phone:w-[145px] phone:h-[1px]
//             smallPhone:w-[126px] smallPhone:h-[1px]
//           "
//           ></div>

//           <div
//             className="text-center text-zinc-400 font-medium font-['Inter Tight']
//           web:text-sm tablet:text-sm phone:text-[10px] smallPhone:text-[10px]
//           "
//           >
//             OR
//           </div>

//           <div
//             className="border  border-zinc-400
//             web:w-[183px] web:h-[1px] 
//             tablet:w-[183px] tablet:h-[1px]
//             phone:w-[145px] phone:h-[1px]
//             smallPhone:w-[126px] smallPhone:h-[1px]
//           "
//           ></div>
//         </div>

//         <InputField
//           id="email"
//           label="Email Address"
//           name="email"
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         {/* <InputField
//           id="name"
//           label="Name"
//           name="name"
//           type="text"
//           placeholder="Name"
//           required
//         /> */}

//         <InputField
//           id="password"
//           label="Password"
//           name="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />

//         {/* <InputField
//           id="repeatPassword"
//           label="Repeat Password"
//           name="repeatPassword"
//           type="password"
//           placeholder="Repeat Password"
//           required
//         /> */}

//         <div
//           className="
//         web:w-[400px] web:h-[43px] 
//         tablet:w-[400px] tablet:h-[43px]
//         phone:w-80 phone:h-[43px] 
//         smallPhone:w-72 smallPhone:h-[43px]
//         "
//         >
//           <Btn type="submit" variant="filled" text="Register" fullWidth />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;


// components/register/RegisterForm.jsx
"use client";
import Btn from "../buttons/Buttons";
import * as React from "react";
import InputField from "../input-fields/InputFields.jsx";
import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <h2 className="mb-[40px] text-center text-white font-medium font-['Inter'] 
          web:text-[32px] tablet:text-[32px] phone:text-[24px] smallPhone:text-[24px]">
        Create Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-evenly flex-col bg-neutral-50 rounded-[5px] 
          web:w-[582px] web:h-[776px] tablet:w-[582px] tablet:h-[776px] phone:w-[361px] phone:min-h-[713px] smallPhone:w-full smallPhone:min-h-[673px]"
      >
        <div className="text-center web:flex tablet:flex phone:flex smallPhone:hidden">
          <span className="text-neutral-700 font-normal font-['Inter Tight'] 
            web:text-base tablet:text-base phone:text-sm">
            Already have an account?
          </span>
          <span className="text-white font-normal font-['Inter Tight']
            web:text-base tablet:text-base phone:text-sm">
          </span>
          <span className="text-blue-500 font-normal font-['Inter Tight']
            web:text-base tablet:text-base phone:text-sm">
            <Link href="/login">Login</Link>
          </span>
        </div>
        <div className="justify-center items-center gap-2 inline-flex 
            web:w-[400px] web:h-[17px] tablet:w-[400px] tablet:h-[17px]">
          <div className="border border-zinc-400 web:w-[183px] web:h-[1px] 
              tablet:w-[183px] tablet:h-[1px] phone:w-[145px] phone:h-[1px] smallPhone:w-[126px] smallPhone:h-[1px]">
          </div>
          <div className="text-center text-zinc-400 font-medium font-['Inter Tight']
              web:text-sm tablet:text-sm phone:text-[10px] smallPhone:text-[10px]">
            OR
          </div>
          <div className="border border-zinc-400 web:w-[183px] web:h-[1px] 
              tablet:w-[183px] tablet:h-[1px] phone:w-[145px] phone:h-[1px] smallPhone:w-[126px] smallPhone:h-[1px]">
          </div>
        </div>
        <InputField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          id="password"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="web:w-[400px] web:h-[43px] tablet:w-[400px] tablet:h-[43px] phone:w-80 phone:h-[43px] smallPhone:w-72 smallPhone:h-[43px]">
          <Btn type="submit" variant="filled" text="Register" fullWidth />
        </div>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
