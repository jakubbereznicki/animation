import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-spinner-scss',
  templateUrl: './spinner-scss.component.html',
  styleUrls: ['./spinner-scss.component.scss']
})
export class SpinnerScssComponent implements OnInit {
  htmlCode = '<div class="spinner"></div>';
  cssCode =`.spinner {
    width: 100px;
    height: 100px;
    border-top: 5px solid #005bea;
    border-right: 5px solid #00c6fb;
    border-bottom: 5px solid #00c6fb;
    border-left: 5px solid #00c6fb;
    border-radius: 50%;
    animation: spin 1s infinite ease-in;

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
