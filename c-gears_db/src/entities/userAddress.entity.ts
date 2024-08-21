import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 75 })
  street: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 10 })
  apt_unit: string;

  @Column({ length: 50 })
  neighborhoods: string;

  @Column({ length: 75 })
  city: string;

  @Column({ length: 75 })
  state: string;

  @Column({ length: 9 })
  zipcode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
