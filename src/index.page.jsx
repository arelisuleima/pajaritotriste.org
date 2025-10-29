import { Data } from "lume/core/file.ts";

export const title = "Pajarito Triste";
export const layout = "layout.jsx";

export default (data, helpers) => {
  return (
    <>
      <section class="p-20">
        <div class="container mx-auto">
          <div class="flex justify-center">
            <div class="flex flex-col gap-5 text-center">
              <img
                class="rounded-full bg-gray-50 h-52 w-56 mx-auto"
                src="pfp.jpg"
              />
              <div class="flex flex-col gap-3">
                <h1 class="font-bold text-6xl">{title}</h1>
                <p class="text-gray-500 text-sm">
                  {data.tiny_desc}
                </p>
              </div>
              <a
                href="#"
                class="bg-gray-50 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
