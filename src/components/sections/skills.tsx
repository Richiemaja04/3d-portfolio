import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-[100vh] flex items-center justify-center"
    >
      <SectionHeader
        id="skills"
        title="Tech Stack"
        desc="(hint: press a key)"
      />
    </SectionWrapper>
  );
};

export default SkillsSection;