import { Plus } from "lucide-react";
interface card {
  title: string;
  count: number;
}
export default function Card({ title, count }: card) {
  return (
    <>
      <div
        id="card"
        className="flex gap-6 py-6 px-6 rounded-2xl items-center bg-slate-600/40 justify-center "
      >
        <div className="flex justify-center gap-6 flex-col">
          <h1 id="title" className="font-serif font-bold text-2xl">
            {title}
          </h1>
          <p className="text-4xl font-extrabold ">{count}</p>
        </div>
        <div
          id="circularReperesenation"
          className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-600 text-white"
        >
          <Plus size={40}></Plus>
        </div>
      </div>
    </>
  );
}
