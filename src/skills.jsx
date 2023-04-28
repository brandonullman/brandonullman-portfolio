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

const SkillsSection = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center bg-[#0d2636] w-[400px] rounded-md py-4">
      <h1 className="text-2xl font-semibold text-[#D6D6D6]">{title}</h1>
      <div className="grid grid-cols-3 gap-8 mt-8">{children}</div>
    </div>
  )
};

const SkillsIcon = ({ icon, title }) => {
  return (
    <div className="flex flex-col text-center text-[#D6D6D6] font-semibold">    
      <img src={icon} alt={title} />
      <span className="pt-1">{title}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex justify-center mt-32 gap-40">
      <SkillsSection title="Languages and Frameworks">
        <SkillsIcon icon={html} title="HTML"/>
        <SkillsIcon icon={css} title="CSS"/>
        <SkillsIcon icon={javascript} title="Javascript"/>
        <SkillsIcon icon={react} title="ReactJS"/>
        <SkillsIcon icon={java} title="Java"/>
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