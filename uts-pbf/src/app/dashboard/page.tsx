import DashTemplate from "../dash_template";


export default function Dashboard() {
    return (    
        <DashTemplate activeindex={0}>
            <div className="flex flex-col text-black w-5/6 px-8 py-7">
            <h1 className="font-bold text-3xl mb-4">Dashboard</h1>
            <div className="flex flex-row">
                <div className="bg-[#E3F3FF] rounded-lg h-48 w-full mr-5">

                </div>
                <div className="bg-[#E3F3FF] rounded-lg h-48 w-full">

                </div>
            </div>
            <div className="bg-[#E3F3FF] rounded-lg h-96 w-full mt-5">

            </div>
        </div>
        </DashTemplate>
    )
}