const Certificates = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-primary mb-16">Certificates</h1>

        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 max-w-3xl">
            <img
              src="/mern-certificate.jpg"
              alt="MERN Certificate"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
