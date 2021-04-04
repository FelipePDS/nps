import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity('users')
class User {

    @PrimaryColumn()
    readonly id: String

    @Column()
    name: String

    @Column()
    email: String

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) { this.id = uuid() }
    }

}

export { User }
