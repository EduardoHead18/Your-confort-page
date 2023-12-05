import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen p-24 bg-slate-800">
        <div className="w-1/2 max-h-full overflow-hidden">
          <div className="flex flex-row gap-10">
            <Image src='/assets/favicon.ico' width={60} height={60}></Image>
          <h1 className="text-6xl font-bold text-white">Your Confort </h1>
          </div>
          <p className="text-white mt-16 overflow-auto font-light opacity-70">
            Lorem ipsum dolor sit amet consectetur adipiscing elit purus
            aliquet, iaculis fames tellus facilisi semper torquent potenti
            donec, penatibus auctor lobortis bibendum ut sociis platea cras.
            Natoque eu posuere ultricies sagittis sollicitudin velit nibh vitae,
            mus habitant cras lacinia tempor hac tortor pretium imperdiet,
            fermentum et malesuada congue turpis bibendum montes. Porta nibh
            lacus congue turpis viverra arcu eros bibendum dis auctor class
            tempor inceptos mattis velit, molestie placerat potenti fermentum
            quam integer tristique rhoncus pellentesque nulla feugiat platea
            ullamcorper.
          </p>
          <h2 className="text-4xl text-black"></h2>
          <div className="mt-10">
            <a
              href="https://www.dropbox.com/scl/fi/f6pfstga3ftshq2tdbsbh/yourconfort.app.zip?rlkey=njuovf5xtiqvuldvc248l4ye4&dl=1"
              download
              className="block w-80 rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Descargar
            </a>
            <p></p>
          </div>
        </div>

        <div className="w-1/2 mb-0 flex justify-end max-h-full overflow-hidden">
    
          <Image
            className="rounded-xl "
            src="/assets/screen.png"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
              <Image
            className="rounded-xl"
            src="/assets/screen2.png"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>
      </main>
      <div className=" min-h-screen p-24 bg-slate-700">
      <h2 className="text-3xl text-center font-bold text-white">Términos y condiciones  </h2>
        <p className="text-white mt-16 overflow-auto font-light opacity-70">
          Lorem ipsum dolor sit amet consectetur adipiscing elit purus aliquet,
          iaculis fames tellus facilisi semper torquent potenti donec, penatibus
          auctor lobortis bibendum ut sociis platea cras. Natoque eu posuere
          ultricies sagittis sollicitudin velit nibh vitae, mus habitant cras
          lacinia tempor hac tortor pretium imperdiet, fermentum et malesuada
          congue turpis bibendum montes. Porta nibh lacus congue turpis viverra
          arcu eros bibendum dis auctor class tempor inceptos mattis velit,
          molestie placerat potenti fermentum quam integer tristique rhoncus
          pellentesque nulla feugiat platea ullamcorper.
        </p>
      </div>
    </>
  );
}
