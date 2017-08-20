import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-app',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    [].forEach.call(document.querySelectorAll('img'), (img => {
      img.onload = function() {
        img.style.opacity = 1;
      };
    }));
  }
}
