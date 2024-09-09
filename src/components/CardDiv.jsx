import Cards from "./Cards";

const CardDiv = () => {
  return (
    <>
      <div className="container-xl lg:container m-auto">
        <section className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Cards
              bgColor={`bg-gray-100`}
              title={`For Developers`}
              mainText={` Browse our React jobs and start your career today`}
              btnText={` Browse Jobs`}
              style={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
              href={`/jobs.html`}
            />
            <Cards
              bgColor={`bg-indigo-100`}
              title={`For Employers`}
              mainText={`List your job to find the perfect developer for the role`}
              btnText={`Add Job`}
              style={`inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600`}
              href={`/add-job.html`}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDiv;
