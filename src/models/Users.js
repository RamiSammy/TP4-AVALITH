import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function getAllPost() {
    const post = await prisma.post.findMany()
    return post
}

async function getOnePost(id) {
    const getPost = await prisma.post.findOne({
        where: {
            id: id
        }
    })
    return getPost
}

async function createPost(data) {
    const createdPost = await prisma.post.create({
        data: data
    })
    return createdPost
}   

async function updatePost(id, data) {
    const updatePost = await prisma.post.updateOne({
        where: {
            id: id
        },
        data: data
    })
    return updatePost
}