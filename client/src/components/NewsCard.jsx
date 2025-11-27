export default function NewsCard({ title, category, image }) {
  return (
    <div className="my-10">
      <div className="flex justify-center">
        <div className="flex flex-col space-y-2 w-full">
          <img
            src={image}
            alt={title}
            className="w-75 h-45 object-cover rounded-3xl hover:scale-105 duration-300"
          />
          <h1 className="text-blue-600 font-bold">{category}</h1>
          <h1 className="font-suhayb text-lg">{title}</h1>
        </div>
      </div>
    </div>
  );
}
