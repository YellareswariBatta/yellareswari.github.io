import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';
import { Experience } from "../../sections/experience/experience";
import { Footer } from "../../sections/footer/footer";

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Projects,
    Contact,
    Experience,
    Footer
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}