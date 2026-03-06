import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./user.entity";

export enum LinkedAccountProvider {
  STEAM = "steam",
  XBOX = "xbox",
  PSN = "psn",
}

export enum LinkedAccountStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BANNED = "banned",
}

@Entity("linked_accounts")
@Index(["provider", "providerId"], { unique: true })
export class LinkedAccount {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: LinkedAccountProvider,
  })
  provider: LinkedAccountProvider;

  @Column()
  providerId: string;

  @Column()
  gamertag: string;

  @Column({
    type: "enum",
    enum: LinkedAccountStatus,
    default: LinkedAccountStatus.ACTIVE,
  })
  status: LinkedAccountStatus;

  @CreateDateColumn()
  linkedAt: Date;

  @Column({ type: "timestamp", nullable: true })
  unlinkAvailableAt: Date;

  @Column({ type: "timestamp", nullable: true })
  lastValidationAt: Date;

  @Column({ nullable: true })
  refreshToken: string;

  @ManyToOne(() => Users, (user) => user.linkedAccounts, {
    onDelete: "CASCADE",
  })
  user: Users;
}
