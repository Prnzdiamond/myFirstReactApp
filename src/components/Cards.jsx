const Cards = ({ bgColor, mainText, title, btnText, style, href }) => {
  return (
    <>
      <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">{mainText}</p>
        <a href={href} className={style}>
          {btnText}
        </a>
      </div>
    </>
  );
};

export default Cards;
