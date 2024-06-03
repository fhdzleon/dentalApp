import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name:"appoiments"
})

export class Appoiment {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({type:"date"})
    date: Date

    @Column({type:"time"})
    time: Date

    @Column()
    status?: string

    @ManyToOne(()=> User, (userParam) => userParam.id )
    user?: User
}