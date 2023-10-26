import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from "typeorm";
import { StudentEntity } from "./student.entity";

@Entity('courses', { schema: 'ventas' })
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'Course Title',
  })
  title: string;

  @ManyToMany(() => StudentEntity, student => student.courses)
  students: StudentEntity[];
}