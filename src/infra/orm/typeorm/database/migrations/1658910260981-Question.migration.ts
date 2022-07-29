import { MigrationInterface, QueryRunner, Table } from "typeorm";

class Question1658910260981 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: "questions",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "phone",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar",
        },
        {
          name: "subject",
          type: "varchar",
        },
        {
          name: "message",
          type: "varchar",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}

export default Question1658910260981;
