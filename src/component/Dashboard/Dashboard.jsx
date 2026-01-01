import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-[0.8] h-screen overflow-auto p-12.5 flex justify-between bg-[whitesmoke] box-border">
      <div className="w-[70%] p-7.5 h-full box-border bg-[#f4f6fa] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
        <div className="text-[26px] ">Smart Resume Screening</div>
        <div className="text-[50px]">Resume Match Score</div>

        <div className="w-full box-border rounded-[30px] px-5 py-3.75 shadow-[0_4px_6px_rgba(0,0,0,0.1)] my-10 text-[16px] bg-white">
          <div className="flex items-center gap-2">
            <span>🔔</span>
            <span>Important Instruction:</span>
          </div>

          <div className="flex items-center gap-2 ml-10">
            <span>📋</span>
            <span>
              Please paste the complete job description in the "Job description"
              field before submitting.
            </span>
          </div>
          <div className="flex items-center gap-2 ml-10">
            <span>🔗</span>
            <span>Only PDF format (.pdf) resumes are accepted.</span>
          </div>
        </div>

        <div className="flex justify-between gap-7.5">
          <div class="w-[60%] bg-white rounded-[30px] px-7.5 py-3.75 box-border shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-[22px]">
            Upload Your Resume
          </div>

          <div className="flex items-center">
            <label
              htmlFor="inputField"
              className="text-[18px] cursor-pointer px-10 py-5 text-white font-bold bg-linear-to-r from-[#fca326] to-[#f94a6b] rounded-[30px] border-[3px] border-black"
            >
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf"
              id="inputField"
              className="hidden"
            />
          </div>
        </div>

        <div class="flex justify-between mt-7.5 box-border">
          <textarea
            placeholder="Paste Your Job Description"
            className="outline-none rounded-[20px] border-2 border-[rgb(14,14,97)] px-5 py-2.5 box-border w-[65%] resize-none"
            rows={10}
            cols={10}
          />
          <div className="w-37.5 h-37.5 border-[3px] border-black flex justify-center items-center rounded-full bg-linear-to-r from-[#fca326] to-[#f94a6b] text-[22px] text-white cursor-pointer mt-10"
>Analyze</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
