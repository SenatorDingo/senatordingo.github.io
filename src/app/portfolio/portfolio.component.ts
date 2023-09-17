import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  cards = [
    {
      imageLink: 'assets/github-mark.png',
      title: 'Tutron App',
      languages: 'Java, XML',
      skills: 'CI/CD, Unit Testing, Database Management',
      description: 'Worked as part of a team to successfully build an app that connects Tutors and Students.'
    },
    {
      imageLink: 'assets/github-mark.png',
      title: 'AirStrike Game',
      languages: 'Java',
      skills: 'Object Oriented Programming',
      description: 'Console Based Java game that focuses on ship to ship combat'
    },
    {
      imageLink: 'assets/github-mark.png',
      title: 'Personal Website',
      languages: 'Angular, HTML, CSS',
      skills: 'Web Development',
      description: 'Built an angular website for showcasing personal achievements'
    },
    {
      imageLink: 'assets/github-mark.png',
      title: 'TaskAssist App',
      languages: 'Kotlin, XML',
      skills: 'Android Studio, OOP, App Development',
      description: 'Android app to function as a planner currently under development'
    },
    {
      imageLink: 'assets/github-mark.png',
      title: 'Holdem Hand Analyzer',
      languages: 'Python',
      skills: 'OOP in Python',
      description: 'A python script that randomly generates a set of cards and suggests the best hand'
    },
    {
      imageLink: 'assets/github-mark.png',
      title: 'CourseCalcer',
      languages: 'Java',
      skills: 'OOP in Java, Structural Programming',
      description: 'Java program for suggesting the best courses to take for software engineering students at the University of Ottawa. Currently under development.'
    }
  ]

}
