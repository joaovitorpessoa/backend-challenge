import QuestionEntity from "@domain/entities/question.entity";
import UuidGeneratorAdapter from "@infra/uuid/adapters/uuid-generator.adapter";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("questions")
class Question implements QuestionEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  subject: string;

  @Column()
  message: string;

  @Column({ name: "created_at" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      const uuidGenerator = new UuidGeneratorAdapter();
      this.id = uuidGenerator.get();
    }
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}

export default Question;
