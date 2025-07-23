// // app/register/page.tsx
// 'use client';

// import React, { useState, FormEvent, useEffect } from 'react';

// // Using lucide-react for icons, a popular choice with shadcn/ui
// // In a real project, you would install it: npm install lucide-react
// // For this example, we'll use SVG paths directly.

// const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
// );

// const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
// );

// const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
// );

// const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
// );

// const SchoolIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="M18 22V11c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v11"/><path d="M6 10V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2"/><path d="M6 18h12"/><path d="M6 14h12"/><path d="M12 6V4"/><path d="M12 2v2"/></svg>
// );

// const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
// );

// const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
// );


// // Main component for the registration page
// export default function RegisterPage() {
//   // FIX: Dynamically load the Tailwind CSS script.
//   // The 'tailwind is not defined' error suggests the environment is missing the
//   // Tailwind CSS framework. This effect adds the official Tailwind CDN script
//   // to the page head, which enables the Just-In-Time engine to apply styles.
//   useEffect(() => {
//     const scriptId = 'tailwind-cdn-script';
//     // Prevent adding the script more than once
//     if (document.getElementById(scriptId)) {
//       return;
//     }
//     const script = document.createElement('script');
//     script.id = scriptId;
//     script.src = 'https://cdn.tailwindcss.com';
//     document.head.appendChild(script);
//   }, []); // Empty dependency array ensures this runs only once on mount.

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     fatherName: '',
//     motherName: '',
//     address: '',
//     fatherMobile: '',
//     tenthSchool: '',
//     tenthLocation: '',
//     tenthBoard: 'CBSE',
//     tenthYear: '',
//     twelfthSchool: '',
//     twelfthLocation: '',
//     twelfthBoard: 'CBSE',
//     twelfthYear: '',
//     course: 'B.Tech',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // In a real app, you'd handle form submission here,
//     // like sending data to an API endpoint.
//     console.log('Form Submitted:', formData);
//     // Using a custom modal/toast in a real app is better than alert().
//     // For this example, alert is used for simplicity.
//     alert('Registration successful! (Check console for data)');
//   };

//   // A simple utility component for form fields to reduce repetition
//   const FormField = ({ id, name, label, type = 'text', icon, value, onChange, required = true, children }: {
//     id: string;
//     name: string;
//     label: string;
//     type?: string;
//     icon: React.ReactNode;
//     value: string;
//     onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
//     required?: boolean;
//     children?: React.ReactNode;
//   }) => (
//     <div className="relative">
//       <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
//           {icon}
//         </span>
//         {children ? (
//           <select
//             id={id}
//             name={name}
//             value={value}
//             onChange={onChange}
//             required={required}
//             className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 appearance-none"
//           >
//             {children}
//           </select>
//         ) : (
//           <input
//             type={type}
//             id={id}
//             name={name}
//             value={value}
//             onChange={onChange}
//             required={required}
//             className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
//           />
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center font-sans">
//       <div className="container mx-auto p-4 lg:p-8">
//         <div className="flex flex-col lg:flex-row bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-500/10 overflow-hidden">
          
//           {/* Left Side: SVG and Welcome Text */}
//           <div className="w-full lg:w-5/12 p-8 lg:p-12 bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center text-center">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join Us</h1>
//             <p className="text-lg text-indigo-200 mb-8">Embark on your learning journey by creating an account.</p>
//             <div className="w-full max-w-xs lg:max-w-sm">
//                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//                     <path fill="#8B5CF6" d="M48.1,-64.3C61.4,-56.3,70.6,-41.8,75.9,-26.1C81.2,-10.3,82.6,6.7,76.5,20.4C70.4,34.1,56.8,44.5,43.2,53.4C29.6,62.3,14.8,69.7,-1.1,71C-17,72.3,-34,67.5,-47.5,58.2C-61,48.9,-71,35.1,-75.3,20.1C-79.6,5.1,-78.2,-11.1,-70.6,-24.8C-63,-38.5,-49.2,-50,-35.1,-58.4C-21,-66.8,-7,-72.1,7.8,-74.1C22.6,-76.1,45.2,-75.3,48.1,-64.3Z" transform="translate(100 100)" />
//                 </svg>
//             </div>
//             <p className="mt-8 text-sm text-indigo-300">Your future starts here. Let's get you set up.</p>
//           </div>

//           {/* Right Side: Registration Form */}
//           <div className="w-full lg:w-7/12 p-8 lg:p-12 overflow-y-auto" style={{maxHeight: '90vh'}}>
//             <h2 className="text-3xl font-bold text-indigo-400 mb-6">Create Your Account</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               {/* Personal Details Section */}
//               <fieldset className="border border-gray-700 p-4 rounded-lg">
//                 <legend className="px-2 text-lg font-semibold text-gray-300">Personal Details</legend>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//                   <FormField id="fullName" name="fullName" label="Full Name" icon={<UserIcon className="h-5 w-5"/>} value={formData.fullName} onChange={handleInputChange} />
//                   <FormField id="email" name="email" label="Email Address" type="email" icon={<MailIcon className="h-5 w-5"/>} value={formData.email} onChange={handleInputChange} />
//                   <FormField id="fatherName" name="fatherName" label="Father's Name" icon={<UserIcon className="h-5 w-5"/>} value={formData.fatherName} onChange={handleInputChange} />
//                   <FormField id="motherName" name="motherName" label="Mother's Name" icon={<UserIcon className="h-5 w-5"/>} value={formData.motherName} onChange={handleInputChange} />
//                   <FormField id="address" name="address" label="Full Address" icon={<HomeIcon className="h-5 w-5"/>} value={formData.address} onChange={handleInputChange} />
//                   <FormField id="fatherMobile" name="fatherMobile" label="Father's Mobile Number" type="tel" icon={<PhoneIcon className="h-5 w-5"/>} value={formData.fatherMobile} onChange={handleInputChange} />
//                 </div>
//               </fieldset>

//               {/* Academic Details Section */}
//               <fieldset className="border border-gray-700 p-4 rounded-lg">
//                 <legend className="px-2 text-lg font-semibold text-gray-300">Academic Details</legend>
//                 <div className="space-y-6 mt-4">
//                     {/* 10th Grade */}
//                     <div>
//                         <h4 className="text-md font-semibold text-gray-400 mb-3">10th Grade Information</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                             <FormField id="tenthSchool" name="tenthSchool" label="School Name" icon={<SchoolIcon className="h-5 w-5"/>} value={formData.tenthSchool} onChange={handleInputChange} />
//                             <FormField id="tenthLocation" name="tenthLocation" label="Location" icon={<HomeIcon className="h-5 w-5"/>} value={formData.tenthLocation} onChange={handleInputChange} />
//                             <FormField id="tenthBoard" name="tenthBoard" label="Board" icon={<BookOpenIcon className="h-5 w-5"/>} value={formData.tenthBoard} onChange={handleInputChange}>
//                                 <option>CBSE</option>
//                                 <option>Bihar Board</option>
//                                 <option>ICSE</option>
//                                 <option>Other</option>
//                             </FormField>
//                             <FormField id="tenthYear" name="tenthYear" label="Passing Year" type="number" icon={<UserIcon className="h-5 w-5"/>} value={formData.tenthYear} onChange={handleInputChange} />
//                         </div>
//                     </div>
//                     {/* 12th Grade */}
//                     <div>
//                         <h4 className="text-md font-semibold text-gray-400 mb-3">12th Grade Information</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                              <FormField id="twelfthSchool" name="twelfthSchool" label="School Name" icon={<SchoolIcon className="h-5 w-5"/>} value={formData.twelfthSchool} onChange={handleInputChange} />
//                             <FormField id="twelfthLocation" name="twelfthLocation" label="Location" icon={<HomeIcon className="h-5 w-5"/>} value={formData.twelfthLocation} onChange={handleInputChange} />
//                             <FormField id="twelfthBoard" name="twelfthBoard" label="Board" icon={<BookOpenIcon className="h-5 w-5"/>} value={formData.twelfthBoard} onChange={handleInputChange}>
//                                 <option>CBSE</option>
//                                 <option>Bihar Board</option>
//                                 <option>ICSE</option>
//                                 <option>Other</option>
//                             </FormField>
//                             <FormField id="twelfthYear" name="twelfthYear" label="Passing Year" type="number" icon={<UserIcon className="h-5 w-5"/>} value={formData.twelfthYear} onChange={handleInputChange} />
//                         </div>
//                     </div>
//                 </div>
//               </fieldset>

//               {/* Course and Credentials */}
//               <fieldset className="border border-gray-700 p-4 rounded-lg">
//                 <legend className="px-2 text-lg font-semibold text-gray-300">Course & Credentials</legend>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//                     <FormField id="course" name="course" label="Course to Opt For" icon={<BookOpenIcon className="h-5 w-5"/>} value={formData.course} onChange={handleInputChange}>
//                         <option>B.Tech</option>
//                         <option>B.Sc</option>
//                         <option>B.Com</option>
//                         <option>BBA</option>
//                         <option>BCA</option>
//                     </FormField>
//                     <div></div> {/* Spacer */}
//                     <FormField id="password" name="password" label="Password" type="password" icon={<LockIcon className="h-5 w-5"/>} value={formData.password} onChange={handleInputChange} />
//                     <FormField id="confirmPassword" name="confirmPassword" label="Confirm Password" type="password" icon={<LockIcon className="h-5 w-5"/>} value={formData.confirmPassword} onChange={handleInputChange} />
//                 </div>
//               </fieldset>

//               {/* Submit Button */}
//               <div>
//                 <button 
//                   type="submit" 
//                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
//                 >
//                   Register Account
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { NextPage } from 'next';
import Head from 'next/head';

const RegisterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Student Registration</title>
        <meta name="description" content="Register for our educational program" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Student Registration
            </h1>
            <p className="mt-3 text-xl text-gray-500">
              Please fill in all the required details to complete your registration
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6 sm:p-10">
              <form className="space-y-8 divide-y divide-gray-200">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Provide your personal details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="father-name" className="block text-sm font-medium text-gray-700">
                        Father's Name *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="father-name"
                          id="father-name"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="mother-name" className="block text-sm font-medium text-gray-700">
                        Mother's Name *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="mother-name"
                          id="mother-name"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="father-mobile" className="block text-sm font-medium text-gray-700">
                        Father's Mobile Number *
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          name="father-mobile"
                          id="father-mobile"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Full Address *
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="address"
                          name="address"
                          rows={3}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Information Section */}
                <div className="pt-8 space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Academic Information
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Provide your academic details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="tenth-pass-year" className="block text-sm font-medium text-gray-700">
                        10th Pass Year *
                      </label>
                      <div className="mt-1">
                        <select
                          id="tenth-pass-year"
                          name="tenth-pass-year"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        >
                          <option value="">Select Year</option>
                          {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="twelfth-pass-year" className="block text-sm font-medium text-gray-700">
                        12th Pass Year (if applicable)
                      </label>
                      <div className="mt-1">
                        <select
                          id="twelfth-pass-year"
                          name="twelfth-pass-year"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        >
                          <option value="">Select Year</option>
                          {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="tenth-school" className="block text-sm font-medium text-gray-700">
                        10th School Name *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="tenth-school"
                          id="tenth-school"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="twelfth-school" className="block text-sm font-medium text-gray-700">
                        12th School Name (if applicable)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="twelfth-school"
                          id="twelfth-school"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="school-location" className="block text-sm font-medium text-gray-700">
                        School Location *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="school-location"
                          id="school-location"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="education-board" className="block text-sm font-medium text-gray-700">
                        Education Board *
                      </label>
                      <div className="mt-1">
                        <select
                          id="education-board"
                          name="education-board"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        >
                          <option value="">Select Board</option>
                          <option value="CBSE">CBSE</option>
                          <option value="Bihar Board">Bihar Board</option>
                          <option value="ICSE">ICSE</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="medium" className="block text-sm font-medium text-gray-700">
                        Medium of Instruction *
                      </label>
                      <div className="mt-1">
                        <select
                          id="medium"
                          name="medium"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        >
                          <option value="">Select Medium</option>
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="percentage" className="block text-sm font-medium text-gray-700">
                        10th Percentage/CGPA *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="percentage"
                          id="percentage"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Selection Section */}
                <div className="pt-8 space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      Course Selection
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Select the course you want to apply for.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                        Course Opting For *
                      </label>
                      <div className="mt-1">
                        <select
                          id="course"
                          name="course"
                          required
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        >
                          <option value="">Select Course</option>
                          <option value="Science">Science (PCM/PCB)</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Arts">Arts</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Medical">Medical</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700">
                        Additional Information
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="additional-info"
                          name="additional-info"
                          rows={3}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          placeholder="Any other information you'd like to share"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Upload Section */}
                <div className="pt-8 space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      Documents Upload
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Upload necessary documents (Max 2MB each)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                        Passport Photo *
                      </label>
                      <div className="mt-1 flex items-center">
                        <div className="relative bg-gray-100 rounded-md overflow-hidden border border-dashed border-gray-300 w-full py-8 flex justify-center">
                          <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="mt-1 text-sm text-gray-600">
                              <label htmlFor="photo-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                <span>Upload a file</span>
                                <input id="photo-upload" name="photo" type="file" className="sr-only" required />
                              </label>
                              <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="marksheet" className="block text-sm font-medium text-gray-700">
                        10th Marksheet *
                      </label>
                      <div className="mt-1 flex items-center">
                        <div className="relative bg-gray-100 rounded-md overflow-hidden border border-dashed border-gray-300 w-full py-8 flex justify-center">
                          <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="mt-1 text-sm text-gray-600">
                              <label htmlFor="marksheet-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                <span>Upload a file</span>
                                <input id="marksheet-upload" name="marksheet" type="file" className="sr-only" required />
                              </label>
                              <p className="text-xs text-gray-500">PDF up to 2MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="pt-8">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">
                        I agree to the terms and conditions
                      </label>
                      <p className="text-gray-500">
                        By submitting this form, I confirm that all the information provided is accurate.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="ml-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Register Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Already have an account? <a href="#" className="text-indigo-600 hover:text-indigo-500">Sign in here</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;