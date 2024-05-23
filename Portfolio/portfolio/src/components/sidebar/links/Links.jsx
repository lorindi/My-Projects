import "../Sidebar.scss";

export const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="links">
      {items.map((item) => {
        <a href={`#S{item}`} key={item}>
          {item}
        </a>;
      })}
    </div>
  );
};
