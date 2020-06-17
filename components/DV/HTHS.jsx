import Skill from '../Skill'
import AwardHeader from '../Award/AwardHeader'
import Award from '../Award/Award'
import Badge from '../Badge'
import Project from './Project'
import DvLogo from '../DvLogo'

export default function Index() {
  return (
    <Project name="TooLegalDidntRead" date="May 2020">
      <AwardHeader />

      <Award>
        <>
          1st Place
          <Badge color="orange">hths.hacks() 2020</Badge>
        </>
      </Award>
      <DvLogo />
      <p>
        TooLegalDidntRead is a transformative and groundbreaking app to solve
        the growing problem of long and complex legally binding documents by
        using NLP and keyword extraction to create a shortened version of a
        legal document that outlines your rights, as well as your legal
        limitations. This makes sure the company can not make you agree to
        anything you didn’t want to agree to. The software also analyzes US
        Federal law, Case Law, and State law to find relevant law that applies
        to your terms of service
      </p>
      <div className="skills">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#f04a00" skill="Rust" />
        <Skill small color="#356f9f" skill="Python" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#efb838" skill="Tensorflow" />
        <Skill small color="#71b6d5" skill="Machine Learning" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f4d97a" skill="UI/UX" />
        <Skill small color="#c5c5c5" skill="Systems Engineering" />
      </div>
      <img
        className="projectImage"
        src="https://cdn.discordapp.com/attachments/669326569306849280/715965668117315594/tldr.png"
        alt=""
      />
    </Project>
  )
}
