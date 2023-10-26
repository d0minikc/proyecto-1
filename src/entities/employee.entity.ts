import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { CompanyEntity } from "./company.entity";

@Entity('employees', { schema: 'ventas' })
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'first_name',
    nullable: false,
    comment: 'First Name',
  })
  firstName: string;

  @Column('varchar', {
    name: 'last_name',
    nullable: false,
    comment: 'Last Name',
  })
  lastName: string;

  @ManyToOne(() => CompanyEntity, company => company.employees)
  company: CompanyEntity;
}