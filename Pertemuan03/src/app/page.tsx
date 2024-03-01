
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import Bio from "@/components/bio";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
    // <div className="bg-gradient-to-b from-black to-white h-screen flex flex-col justify-center items-center">
    //   <div className="text-center">
    //     Sobbing
    //   </div>
    //   {/* <div className="flex gap-10">
    //   <Profile />
    //   <Profile />
    //   <Profile />
    //   </div> */}
    //   <div className="flex gap-10">
    //     {/* <Gallery /> */}
    //     <Todo />
    //   </div>
    //   <div>
    //     <Bio />
    //   </div>
    // </div>
  );
}
