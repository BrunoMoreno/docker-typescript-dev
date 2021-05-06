import {MigrationInterface, QueryRunner} from "typeorm";

export class users1620262136506 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
              CREATE TABLE users (
                id SERIAL,
                email VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                CONSTRAINT unique_users_email UNIQUE (email),
                CONSTRAINT pk_users_id PRIMARY KEY (id)
              );
            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
