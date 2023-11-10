import { Users } from "src/user/interface/user.interface"

export class requestDto{
    studentId: string
    studentName: string   
     createdAt: Date
    department?: string
    description?: string
    subject: string
}