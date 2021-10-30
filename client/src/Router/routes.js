import Home from './routes/Home/index.svelte'
import Intro from './routes/Intro/index.svelte'

export const routes = {
    // Exact path
    '/home': Home,
    '/': Intro,

    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // // Wildcard parameter
    // '/book/*': Book,

    // // Catch-all
    // // This is optional, but if present it must be the last
    // '*': NotFound,
}