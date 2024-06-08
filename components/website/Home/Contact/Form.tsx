import React from "react";

type Props = {};

function Form({}: Props) {
  return (
    <div className="section w-full h-screen flex justify-center items-center">
      <form className="w-[60%]" action="">
        <div className="flex w-full flex-col justify-center items-center gap-3">
          <div className="flex w-full gap-5">
            <div className="w-full">
              <label className="text-sm" htmlFor="full_name">
                Full name
              </label>
              <input
                id="full_name"
                className="w-full rounded-lg h-[2.6rem] border-primary-200 border-[1px] bg-primary-50 outline-none px-3 py-1 "
                type="text"
              />
            </div>
            <div className="w-full">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full rounded-lg h-[2.6rem] border-primary-200 border-[1px] bg-primary-50 outline-none px-3 py-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-full">
              <label className="text-sm" htmlFor="phone">
                Phone no.
              </label>
              <input
                id="phone"
                className="w-full rounded-lg h-[2.6rem] border-primary-200 border-[1px] bg-primary-50  outline-none px-3 py-1"
                type="text"
              />
            </div>
            <div className="w-full">
              <label className="text-sm" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                className="w-full rounded-lg h-[2.6rem] border-primary-200 border-[1px] bg-primary-50 outline-none px-3 py-1"
                type="text"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="text-sm" htmlFor="message">
              Your thoughts
            </label>
            <textarea
              className="w-full rounded-lg h-[7rem] border-primary-200 border-[1px] bg-primary-50 outline-none px-3 py-1"
              id="message"
              rows={4}
              cols={50}
            />
          </div>
        </div>

        <div className="w-full text-center mt-5">
          <button className="bg-secondary-300 hover:bg-primary-50 hover:text-primary-800 duration-300   border-[1px] border-secondary-300 text-primary-50 w-[9rem] py-[6px] rounded-xl text-nowrap">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
