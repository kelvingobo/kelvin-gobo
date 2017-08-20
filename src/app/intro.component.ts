import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro-app',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  ngOnInit(): void {
    [].forEach.call(document.querySelectorAll('img'), (img => {
      img.onload = function() {
        img.style.opacity = 1;
      };
    }));
  }
}
