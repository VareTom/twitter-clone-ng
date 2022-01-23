import { Component, OnInit } from '@angular/core';

// Models
import { MenuItem } from 'src/shared/models/menuItem';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  menuItems: MenuItem [] = [
    { 'icon': 'Home-Fill', text: 'Accueil'},
    { 'icon': 'Explore', text: 'Explorer'},
    { 'icon': 'Notifications', text: 'Notifications'},
    { 'icon': 'Messages', text: 'Messages'},
    { 'icon': 'Bookmarks', text: 'Signets'},
    { 'icon': 'Lists', text: 'Listes'},
    { 'icon': 'Profile', text: 'Profil'},
    { 'icon': 'More', text: 'Plus'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
