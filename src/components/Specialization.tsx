import Box from "./BoxComponent";

const contents = [
  {
    title: "Women's health",
    path: "src/assets/women-health.png",
  },
  {
    title: "Skin Care",
    path: "src/assets/skin-care.png",
  },
  {
    title: "Immunity",
    path: "src/assets/immunity.png",
  },
  {
    title: "Hair Care",
    path: "src/assets/hair-care.png",
  },
];

const Specialization = () => {
  return (
    <Box title="I Specialize In">
      <div className="p-6">
        <div className="flex gap-3">
          {contents.map((el, i) => (
            <div key={i}>
              <img src={el.path} alt={el.title} />
              <p className="text-wrap text-center">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Specialization;
