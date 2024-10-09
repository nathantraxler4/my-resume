import SectionHeader from '@/app/components/sectionHeader'
import resumeContent from '@/app/data/resumeContent'
import Subtitle from '@/app/components/subtitle'
import Title from '@/app/components/title'
import Bullets from '@/app/components/bullets'
import SectionSubheader from '@/app/components/sectionSubheader'
import SectionTitle from '@/app/components/sectionTitle'
import LineBreak from '@/app/components/lineBreak'

const buildSkillsBullets = (
  skills: {
    category: string,
    items: string[],
  }[]
) => {
  const bullets = []
  for (const { category, items} of skills) {
    bullets.push(`${category}: ${items.join(", ")}`)
  }
  return bullets
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <main>
        <LineBreak />
        <LineBreak />

        <Title title={resumeContent.name} />
        <Subtitle subtitle={`${resumeContent.contact.location} • ${resumeContent.contact.email} • ${resumeContent.contact.phone}`}/>

        <LineBreak />
        <LineBreak />

        <SectionTitle title="Professional Experience"/>
        <SectionHeader left={resumeContent.experience[0].company} right={resumeContent.experience[0].location} />

        <LineBreak />

        <SectionSubheader left={resumeContent.experience[0].roles[0].title} right={resumeContent.experience[0].roles[0].dates} />
        <SectionSubheader left={resumeContent.experience[0].roles[1].title} right={resumeContent.experience[0].roles[1].dates} />
        <Bullets bullets={resumeContent.experience[0].roles[0].responsibilities}/>

        <LineBreak />

        <SectionSubheader left={resumeContent.experience[0].roles[2].title} right={resumeContent.experience[0].roles[2].dates} />
        <Bullets bullets={resumeContent.experience[0].roles[2].responsibilities}/>

        <LineBreak />

        <SectionSubheader left={resumeContent.experience[0].roles[3].title} right={resumeContent.experience[0].roles[3].dates} />
        <Bullets bullets={resumeContent.experience[0].roles[3].responsibilities}/>

        <LineBreak/>
        <LineBreak />

        <SectionTitle title="Education"/>
        <SectionHeader left={resumeContent.education[0].school} right={resumeContent.education[0].dates} />
        <SectionSubheader left={resumeContent.education[0].degree} right={`GPA: ${resumeContent.education[0].gpa.toString()}`} />
        
        <LineBreak/>

        <SectionHeader left={resumeContent.education[1].school} right={resumeContent.education[1].dates} />
        <SectionSubheader left={resumeContent.education[1].degree} right={`GPA: ${resumeContent.education[1].gpa.toString()}`} />

        <LineBreak />
        <LineBreak />

        <SectionTitle title="Technical Skills" />
        <Bullets bullets={buildSkillsBullets(resumeContent.skills)}/>

        <LineBreak />
        <LineBreak />
      </main>
    </div>
  );
}
