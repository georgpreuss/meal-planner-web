import { rest } from 'msw'
import { recipes } from './seeds'

export const handlers = [
    rest.post('/recipes', (req, res, ctx) => {
        return res(ctx.json(req.body), ctx.status(200))
    }),
    rest.get('/recipes', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(recipes))
    }),
]
