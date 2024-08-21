import { Exclude } from "class-transformer";
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 15 })
  name: string;

  @Column({ length: 15 })
  surname: string;

  @Column({ length: 15, unique: true })
  username: string;

  @Column({ length: 75, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  ssn: string;

  @Column({ length: 16, unique: true })
  cellphone: string;

  @Column({ type: "date" })
  birthday: Date;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ type: "boolean", default: false })
  isAdm: boolean;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "boolean", default: false })
  availability: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
