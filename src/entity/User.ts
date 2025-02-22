import { Entity, ObjectIdColumn, ObjectId, Column, Unique } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    id!: ObjectId

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    email!: string

    @Column()
    age!: number

}
