import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-white h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        Sobbing
      </div>
      <div className="flex gap-10">
      <Profile />
      <Profile />
      <Profile />
    </div>
    </div>
    
  );
}
