import { Users } from "src/user/interface/user.interface"

export interface complaint extends Document {
    studentId: string
    studentName:string
    createdAt: Date
    department?: string
    description?: string
    subject: string
}