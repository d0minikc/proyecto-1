import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Column } from "typeorm";
import { CourseEntity } from "./course.entity";

@Entity('students', { schema: 'ventas' })
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'Student Name',
  })
  name: string;

  @ManyToMany(() => CourseEntity, course => course.students)
  @JoinTable()
  courses: CourseEntity[];
}