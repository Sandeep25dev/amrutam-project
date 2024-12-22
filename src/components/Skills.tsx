import Box from "./BoxComponent";
import Tags from "./Tags";

const tags = [
  "Skin Treatment",
  "Pregnancy",
  "Period Doubts",
  "Endometriosis",
  "Pelvic Pain",
  "Ovarian Cysts",
];

const Skills = () => {
  return (
    <Box title="The Concerns I Treat">
      <div className="p-3">
        <div className=" flex flex-wrap gap-2">
          {tags.map((e, i) => (
            <Tags varient="primary" key={i}>
              {e}
            </Tags>
          ))}
          <Tags varient="outlined">+5 more</Tags>
        </div>
      </div>
    </Box>
  );
};

export default Skills;
