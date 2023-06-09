import React from 'react';
import aws from './media/aws.png';
import bitbucket from './media/bitbucket.png';
import css from './media/css.png';
import figma from './media/figma.png';
import git from './media/git.png';
import github from './media/github.png';
import gitlab from './media/gitlab.png';
import html from './media/html.png';
import java from './media/java.png';
import javascript from './media/javascript.png';
import jira from './media/jira.png';
import photoshop from './media/photoshop.png';
import react from './media/react.png';
import tailwind from './media/tailwind.png';
import typescript from './media/typescript.png';

const SkillsSection = ({ title, children }) => {
  return (
    <div className="md:flex md:flex-col items-center bg-[#0d2636] md:w-[50%] rounded-md py-4 border m-8 border-black">
      <h1 className="text-3xl font-semibold text-[#D6D6D6]">{title}</h1>
      <div className="grid grid-cols-3 gap-10 m-8">{children}</div>
    </div>
  )
};

const SkillsIcon = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center text-[#D6D6D6] font-semibold">    
      <img src={icon} alt={title} />
      <span className="pt-1">{title}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="md:flex mt-12 lg:mt-32 lg:justify-between mx-auto px-4 lg:w-[70%] text-center" id="skills">
      <SkillsSection title="Languages and Frameworks">
        <SkillsIcon icon={html} title="HTML"/>
        <SkillsIcon icon={css} title="CSS"/>
        <SkillsIcon icon={javascript} title="Javascript"/>
        <SkillsIcon icon={react} title="ReactJS"/>
        <SkillsIcon icon={java} title="Java"/>
        <SkillsIcon icon={tailwind} title="Tailwind"/>
        <SkillsIcon icon={typescript} title="Typescript"/>
      </SkillsSection>
      <SkillsSection title="Tools and Technologies">
        <SkillsIcon icon={git} title="GIT"/>
        <SkillsIcon icon={github} title="GitHub"/>
        <SkillsIcon icon={gitlab} title="GitLab"/>
        <SkillsIcon icon={jira} title="Jira"/>
        <SkillsIcon icon={bitbucket} title="Bitbucket"/>
        <SkillsIcon icon={aws} title="AWS"/>
        <SkillsIcon icon={photoshop} title="Photoshop"/>
        <SkillsIcon icon={figma} title="Figma"/>
      </SkillsSection>
    </div>
  );
};

export default Skills;