import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleHamburger() {
    let navbar = document.getElementById("navbarBasicExample");
    if (navbar === null) { return }

    if (navbar.classList.contains("is-active"))
      navbar.classList.remove("is-active");
    else navbar.classList.add("is-active");
  }
}
