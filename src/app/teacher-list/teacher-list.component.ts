import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{
  teachers: any[] = [];
  searchQuery: string = '';
  filteredTeachers = [...this.teachers];
  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.teachers = this.teachersService.getTeachersList();
    this.filteredTeachers = [...this.teachers];
  }

  filterTeachers() {
    const query = this.searchQuery.toLowerCase();
    this.filteredTeachers = this.teachers.filter(teacher => teacher.name.toLowerCase().includes(query));
  }
}
