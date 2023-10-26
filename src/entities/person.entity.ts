import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { PassportEntity } from "./passport.entity";

@Entity('persons', { schema: 'ventas' })
export class PersonEntity {
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

  @OneToOne(() => PassportEntity, passport => passport.person)
  @JoinColumn()
  passport: PassportEntity;
}