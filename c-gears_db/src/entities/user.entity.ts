import { Exclude } from "class-transformer";
import { Address } from "./userAddress.entity";
import { IUserAddress } from "../interfaces";
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";

@Entity("users")
export class Users {
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

  @Column({ length: 120, unique: true })
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

  @OneToOne(() => Address, () => Users, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  address: IUserAddress;
}
