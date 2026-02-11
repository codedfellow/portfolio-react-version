import React, { useState } from 'react';
import { Code, Layers, Database, Cloud, Wrench, Heart } from 'lucide-react';

type SkillCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code,
    skills: [
      { name: 'C#', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'HTML/CSS', level: 88 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: Layers,
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'ASP.NET / .NET Core', level: 95 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Entity Framework', level: 90 },
      { name: 'Dapper', level: 85 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    skills: [
      { name: 'SQL Server / MSSQL', level: 92 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Oracle', level: 70 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'Microsoft Azure', level: 90 },
      { name: 'Azure DevOps', level: 88 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Google Cloud', level: 65 },
      { name: 'IIS', level: 85 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Tech',
    icon: Wrench,
    skills: [
      { name: 'Git / Bitbucket', level: 90 },
      { name: 'SignalR', level: 85 },
      { name: 'CQRS / MediatR', level: 82 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'Microsoft Msal', level: 80 },
      { name: 'Azure App Service', level: 88 },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    icon: Heart,
    skills: [
      { name: 'Team Leadership', level: 90 },
      { name: 'Analytical Thinking', level: 92 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 88 },
      { name: 'Mentoring', level: 85 },
      { name: 'Decision Making', level: 87 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const activeSkills = categories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="dark:text-gradient text-gradient-light">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category tabs */}
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent'
                  }`}
                >
                  <cat.icon className="w-5 h-5 flex-shrink-0" />
                  {cat.label}
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === cat.id ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                  }`}>
                    {cat.skills.length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills display */}
          <div className="lg:col-span-8">
            <div className="p-6 lg:p-8 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                {activeSkills && <activeSkills.icon className="w-6 h-6 text-primary" />}
                <h3 className="text-xl font-semibold text-foreground">{activeSkills?.label}</h3>
              </div>
              <div className="space-y-5">
                {activeSkills?.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All tech tags */}
            <div className="mt-6 p-6 rounded-2xl border border-border bg-card">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">All Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'C#', '.NET Core', 'ASP.NET', 'Angular', 'TypeScript', 'JavaScript',
                  'React', 'Node.js', 'Express.js', 'SQL Server', 'MySQL', 'MongoDB',
                  'Oracle', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'Git', 'SignalR',
                  'Entity Framework', 'Dapper', 'CQRS', 'MediatR', 'Azure DevOps',
                  'CI/CD', 'IIS', 'REST APIs', 'Microsoft Msal', 'Bitbucket',
                  'Google Cloud', 'Azure App Service',
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-muted/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
