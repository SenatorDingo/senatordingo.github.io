import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    standalone: false
})
export class IndexComponent implements OnInit, AfterViewInit {

  @ViewChildren('animateOnScroll') animatedElements!: QueryList<ElementRef>;

  experiences = [
    {
      role: 'Embedded Build & Pipeline Developer Co-op',
      company: 'Ford Motor Company',
      period: 'May 2025 — Aug 2025',
      bullets: [
        'Designed and implemented an artifact management framework for multiple Petabytes of data',
        'Spearheaded containerization and build environment standardization for a component build system',
        'Collaborated with cross-functional hardware, firmware and validation teams to ensure seamless integration'
      ]
    },
    {
      role: 'Software Build & Integration Engineer Co-op',
      company: 'Ford Motor Company',
      period: 'Sep 2024 — Dec 2024',
      bullets: [
        'Developed and maintained parts of the CI pipeline across Jenkins and GitHub Actions',
        'Migrated storage systems for a company-wide component CI Pipeline',
        'Optimized build scripts to improve build times and readability'
      ]
    },
    {
      role: 'Build Systems Software Engineer Co-op',
      company: 'Ford Motor Company',
      period: 'Jan 2024 — Apr 2024',
      bullets: [
        'Contributed to CI pipeline by maintaining Jenkins jobs and creating new builds',
        'Completed build releases and created documentation across GitHub and Jenkins',
        'Optimized codebase to achieve faster build times in the packaging layer'
      ]
    },
    {
      role: 'Member, Engineering Faculty Council',
      company: 'University of Ottawa',
      period: 'Apr 2023 — Apr 2024',
      bullets: [
        'Elected member of the governing council for the engineering department',
        'Engaged in discussions on critical issues, including course development and enhancement',
        'Endorsed and voted on innovative initiatives for faculty development and resources'
      ]
    }
  ];

  projects = [
    {
      title: 'Hospital Management System',
      description: 'A Spring Boot-Kotlin Server and a Thymeleaf Client for Patient Management. Containerized with Docker for easy deployment.',
      tech: ['Kotlin', 'Spring Boot', 'Thymeleaf', 'Docker'],
      github: 'https://github.com/SenatorDingo/HMS-PMS-Server-Client',
      external: ''
    },
    {
      title: 'Tutron App',
      description: 'An Android app to connect students and tutors. Built collaboratively using Agile methodology with Firebase RTDB and CircleCI for CI/CD.',
      tech: ['Java', 'Firebase', 'CircleCI', 'Android'],
      github: 'https://github.com/SEG2105-uottawa/ProjectGroupCapn',
      external: ''
    },
    {
      title: 'Personal Portfolio',
      description: 'This website — a modern Angular single-page portfolio with smooth scrolling, responsive design, and CSS animations.',
      tech: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
      github: 'https://github.com/SenatorDingo/senatordingo.github.io',
      external: 'https://senatordingo.github.io'
    },
    {
      title: 'TaskAssist App',
      description: 'An Android planner application built with Kotlin featuring task management, scheduling, and an intuitive material design interface.',
      tech: ['Kotlin', 'Android', 'XML', 'SQLite'],
      github: '',
      external: ''
    },
    {
      title: 'Holdem Hand Analyzer',
      description: 'A Python script that randomly generates a set of cards and evaluates the best possible poker hand using combinatorial analysis.',
      tech: ['Python', 'OOP', 'Algorithms'],
      github: '',
      external: ''
    },
    {
      title: 'AirStrike Game',
      description: 'A console-based Java game focusing on ship-to-ship combat with object-oriented game mechanics and turn-based strategy.',
      tech: ['Java', 'OOP', 'Game Dev'],
      github: '',
      external: ''
    }
  ];

  skillCategories: { name: string; skills: { name: string; icon: string; img: string }[] }[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'C', icon: 'devicon-c-plain colored', img: '' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored', img: '' },
        { name: 'Bash', icon: 'devicon-bash-plain', img: '' },
        { name: 'Java', icon: 'devicon-java-plain colored', img: '' },
        { name: 'Kotlin', icon: 'devicon-kotlin-plain colored', img: '' },
        { name: 'Elixir', icon: 'devicon-elixir-plain colored', img: '' },
        { name: 'Python', icon: 'devicon-python-plain colored', img: '' }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain colored', img: '' },
        { name: 'React', icon: 'devicon-react-original colored', img: '' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored', img: '' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored', img: '' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored', img: '' },
        { name: 'HTML', icon: 'devicon-html5-plain colored', img: '' },
        { name: 'CSS', icon: 'devicon-css3-plain colored', img: '' }
      ]
    },
    {
      name: 'Database Management',
      skills: [
        { name: 'Firebase', icon: 'devicon-firebase-plain colored', img: '' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored', img: '' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain colored', img: '' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', img: '' }
      ]
    },
    {
      name: 'DevOps',
      skills: [
        { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored', img: '' },
        { name: 'CircleCI', icon: 'devicon-circleci-plain colored', img: '' },
        { name: 'Jenkins', icon: 'devicon-jenkins-line colored', img: '' },
        { name: 'Docker', icon: 'devicon-docker-plain colored', img: '' },
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored', img: '' }
      ]
    },
    {
      name: 'Embedded & Systems',
      skills: [
        { name: 'FreeRTOS', icon: '', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Logo_freeRTOS.png' },
        { name: 'Yocto Project', icon: '', img: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Yocto_Project_logo.svg' },
        { name: 'Linux', icon: 'devicon-linux-plain', img: '' },
        { name: 'Arduino', icon: 'devicon-arduino-plain colored', img: '' }
      ]
    },
    {
      name: 'Developer Tools',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain colored', img: '' },
        { name: 'Gradle', icon: 'devicon-gradle-original colored', img: '' },
        { name: 'Jira', icon: 'devicon-jira-plain colored', img: '' },
        { name: 'Confluence', icon: 'devicon-confluence-plain colored', img: '' },
        { name: 'GCP', icon: 'devicon-googlecloud-plain colored', img: '' },
        { name: 'Jupyter', icon: 'devicon-jupyter-plain colored', img: '' }
      ]
    }
  ];

  activeExpIndex = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.animatedElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }

  selectExperience(index: number): void {
    this.activeExpIndex = index;
  }
}
