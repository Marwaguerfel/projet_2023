import { Users } from "src/user/interface/user.interface"

export interface certification extends Document {
    student: Users
    createdAt: Date
    optainedAt: string
    description?: string
    provider: string
}