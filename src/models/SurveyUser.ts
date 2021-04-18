import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser {
    @PrimaryColumn()
    readonly id: String

    @Column()
    user_id: String

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User

    @Column()
    survey_id: String

    @ManyToOne(() => Survey)
    @JoinColumn({ name: "survey_id" })
    survey: Survey

    @Column()
    value: Number

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) { this.id = uuid() }
    }
}

export { SurveyUser }
