import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1772468764169 implements MigrationInterface {
    name = 'CreateTables1772468764169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(75) NOT NULL, "number" character varying(10) NOT NULL, "apt_unit" character varying(10) NOT NULL, "neighborhoods" character varying(50) NOT NULL, "city" character varying(75) NOT NULL, "state" character varying(75) NOT NULL, "zipcode" character varying(10) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."linked_accounts_provider_enum" AS ENUM('steam', 'xbox', 'psn')`);
        await queryRunner.query(`CREATE TYPE "public"."linked_accounts_status_enum" AS ENUM('active', 'inactive', 'banned')`);
        await queryRunner.query(`CREATE TABLE "linked_accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "provider" "public"."linked_accounts_provider_enum" NOT NULL, "providerId" character varying NOT NULL, "gamertag" character varying NOT NULL, "status" "public"."linked_accounts_status_enum" NOT NULL DEFAULT 'active', "linkedAt" TIMESTAMP NOT NULL DEFAULT now(), "unlinkAvailableAt" TIMESTAMP, "lastValidationAt" TIMESTAMP, "refreshToken" character varying, "userId" uuid, CONSTRAINT "PK_445bf7a50aeeb7f0084052935a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_7669afff92740c9852c49ae7c6" ON "linked_accounts" ("provider", "providerId") `);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(15) NOT NULL, "surname" character varying(15) NOT NULL, "username" character varying(15) NOT NULL, "email" character varying(75) NOT NULL, "cellphone" character varying(25) NOT NULL, "birthday" date NOT NULL, "password" character varying(120) NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "availability" boolean NOT NULL DEFAULT false, "updateCode" character varying, "updateCodeExpires" TIMESTAMP, "updateAttempts" integer NOT NULL DEFAULT '0', "emailToUpdate" text, "passwordToUpdate" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "linked_accounts" ADD CONSTRAINT "FK_2c77d2a0c06eeab6e62dc35af64" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "linked_accounts" DROP CONSTRAINT "FK_2c77d2a0c06eeab6e62dc35af64"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7669afff92740c9852c49ae7c6"`);
        await queryRunner.query(`DROP TABLE "linked_accounts"`);
        await queryRunner.query(`DROP TYPE "public"."linked_accounts_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."linked_accounts_provider_enum"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
