import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Entity('companies', { schema: 'ventas' })
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'Company Name',
  })
  name: string;
  
  @Column('varchar', {
    name: 'location',
    nullable: true, 
    comment: 'Company Location',
  })

  @OneToMany(() => EmployeeEntity, employee => employee.company)
  employees: EmployeeEntity[];
}