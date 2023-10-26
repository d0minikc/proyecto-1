import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PersonEntity } from "./person.entity";

@Entity('passports', { schema: 'ventas' })
export class PassportEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'number',
    nullable: false,
    comment: 'Passport Number',
  })
  number: string;

  @OneToOne(() => PersonEntity, person => person.passport)
  person: PersonEntity;
}