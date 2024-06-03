import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credential";
import { Appoiment } from "./Appoiment";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @Column({ type: "date" })
  birthday?: Date;

  @Column()
  dni?: number;

  @OneToOne(() => Credential, (credential) => credential.user)
  @JoinColumn()
  credential?: Credential;

  @OneToMany(() => Appoiment, (appoiment) => appoiment.user)
  appoiments?: Appoiment[];
}
