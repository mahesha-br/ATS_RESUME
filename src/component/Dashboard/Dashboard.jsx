import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-[0.8] h-screen overflow-auto p-12.5 flex justify-between bg-[whitesmoke] box-border">
      <div className="w-[70%] p-7.5 h-full box-border bg-[#f4f6fa] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
>
    <div className="text-[26px] ">
        Smart Resume Screening
    </div>
    <div className='text-[50px]'>
        Resume Match Score
    </div>

    <div className="w-full box-border rounded-[30px] px-5 py-3.75 shadow-[0_4px_6px_rgba(0,0,0,0.1)] my-10 text-[16px] bg-white">
        <div className="flex items-center gap-2">
  <span>🔔</span>
  <span>Important Instruction:</span>
</div>

   <div className="flex items-center gap-2 ml-10">
  <span>📋</span>
  <span>Please paste the complete job description in the "Job description" field before submitting.</span>
</div>
<div className="flex items-center gap-2 ml-10">
  <span>🔗</span>
  <span>Only PDF format (.pdf) resumes are accepted.</span>
</div>





    </div>
      </div>
    </div>
  )
}

export default Dashboard
