import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: '../ui/header.html',
  styleUrls: ['../ui/header.scss'],
  imports: [RouterLink],
})
export class Header {}
