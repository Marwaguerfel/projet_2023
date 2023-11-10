import { Users } from "src/user/interface/user.interface"

export class certificationDto{
    certification_id: string
    student: Users
    createdAt: Date
    optainedAt: string
    description?: string
    provider: string
}