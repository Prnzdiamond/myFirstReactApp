import Cards from "./Cards";

const CardDiv = () => {
  return (
    <>
      <div className="m-auto container-xl lg:container">
        <section className="py-4">
          <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
            <Cards
              bgColor={`bg-gray-100`}
              title={`For Developers`}
              mainText={` Browse our React jobs and start your career today`}
              btnText={` Browse Jobs`}
              style={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
              href={`/jobs`}
            />
            <Cards
              bgColor={`bg-indigo-100`}
              title={`For Employers`}
              mainText={`List your job to find the perfect developer for the role`}
              btnText={`Add Job`}
              style={`inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600`}
              href={`/add-job`}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDiv;
