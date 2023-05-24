import React from 'react'

const ContactUs = () => {
  return (
    <>
    
    <section className="bg-[#182350] min-h-screen overflow-x-hidden	">
        <div className="max-w-[1400px]  bg-[#182350]  items-center flex  relative  min-h-screen">
          <div>
            <h2 className=" font-strawford text-white  font-bold text-[160px] leading-[160px]">
              Let's
            </h2>
            <h2 className=" font-strawford text-white  font-normal text-[160px]  leading-[160px]">
              discuss
            </h2>

            <h2 className=" font-strawford text-white  font-bold text-[160px] leading-[160px] ">
              your
            </h2>

            <h2 className=" font-strawford text-white  font-bold text-[160px] leading-[160px]">
              project
            </h2>
          </div>
          <div className=" flex flex-col w-5/12 ml-auto">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="my-3 text-[#C1C6DA] outline-0 bg-transparent border h-[70px] pl-8 text-xl"
            />
            <input
              type="text"
              placeholder="Email"
              required
              className="my-3 text-[#C1C6DA] outline-0 bg-transparent border h-[70px] pl-8 text-xl"
            />
            <textarea
              placeholder="Email"
              maxlength="150"
              className="my-3 pt-4 h-40 text-[#C1C6DA] outline-0 bg-transparent border h-[70px] pl-8 text-xl"
            />

            <div>
              <input
                type="checkbox"
                value="Yes"
                className="my-3 mr-auto text-[#C1C6DA] outline-0 bg-transparent border  pl-8 text-xl"
              />
              <label
                for="scales"
                className=" pl-4 font-normal pt-4 h-40 text-[#FFFFFF] text-xl"
              >
                I agree to the Privacy Policy
              </label>
            </div>

            <input
              type="submit"
              className="mt-20 ml-auto bg-[#EB5B4F] w-[174px] h-[70px] text-center text-xl text-white font-medium"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs