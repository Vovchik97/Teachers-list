import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private teachers = [
    { id: 1, name: 'Семахин Андрей Михайлович', position: 'Доцент кафедры', degree: 'Кандидат технических наук', experience: '34 года', photo: 'assets/images/Semahin.jpg'},
    { id: 2, name: 'Черепанов Олег Сергеевич', position: 'Доцент кафедры', degree: 'Кандидат физико-математических наук', experience: '11 лет', photo: 'assets/images/Cherepanov.jpg'},
    { id: 3, name: 'Дик Дмитрий Иванович', position: 'Заведующий кафедрой', degree: 'Кандидат технических наук', experience: '28 лет', photo: 'assets/images/Dik.jpg'},
    { id: 4, name: 'Косовских Светлана Викторовна', position: 'Доцент кафедры', degree: 'Кандидат физико-математических наук', experience: '35 лет', photo: 'assets/images/Kosovskih.jpg'},
    { id: 5, name: 'Медведев Аркадий Андреевич', position: 'Доцент кафедры', degree: 'Кандидат педагогических наук', experience: '37 лет', photo: '/assets/images/Medvedev.jpg'}
  ]
  constructor() { }

  getTeachersList() {
    return this.teachers
  }

  getTeacher(id: number) {
    return this.teachers.find(teacher => teacher.id === id)
  }
}
