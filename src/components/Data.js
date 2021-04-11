import GitHubIcon from '@material-ui/icons/GitHub';
 import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
 import recipe from './projectImages/recipe1.JPG';
 import movie from './projectImages/movies.JPG';
 import covid from './projectImages/covid.JPG';
 import youtube from './projectImages/youtube.JPG';
 import ai from './projectImages/ai.JPG';
 import todo from './projectImages/To-do.JPG';
 import whatsapp from './projectImages/whatsapp.JPG';
 import amazon from './projectImages/amazon.JPG';
 import jokes from './projectImages/jokes.JPG';
 import hero from './projectImages/hero.JPG';


export default{
    portfolio:[
    {
        tag:'API',
        image:recipe,
        title:'Recipe App',
        caption:'Recipes of various foods. ',
        description:'App to get recipe of various foods.',
        links:[
            {link:'https://github.com/durgesh0812/PROJECT-1--EDAMAM-Recipe-Search-API-DESIGN',icon:<GitHubIcon/>},
            {link:'https://dazzling-golick-afd862.netlify.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'CLONE',
        image:youtube,
        title:'You Tube Clone',
        caption:'A clone of You Tube',
        description:'A clone of You Tube',
        links:[
            {link:'https://github.com/durgesh0812/you_tube_clone',icon:<GitHubIcon/>},
            {link:'https://clone-28382.web.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    
    {
        tag:'API',
        image:covid,
        title:'COVID-19',
        caption:'Statistics of COVID-19',
        description:'Statistics of COVID-19',
        links:[
            {link:'https://github.com/durgesh0812/COVID-19APP',icon:<GitHubIcon/>},
            {link:'https://dreamy-wilson-3d854c.netlify.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'API',
        image:ai,
        title:'Echo AI',
        caption:'App works on voice commands',
        description:'App works on voice commands.',
        links:[
            {link:'https://github.com/durgesh0812/echo_ai',icon:<GitHubIcon/>},
            {link:'https://alan-ai-5c032.web.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'CLONE',
        image:todo,
        title:'To-do App',
        caption:'App to make To-do lists ',
        description:'App to make To-do lists .',
        links:[
            {link:'https://github.com/durgesh0812/TO-DO-APP',icon:<GitHubIcon/>},
            {link:'https://to-do-app-3c78d.web.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'CLONE',
        image:whatsapp,
        title:'Whatsapp-Clone',
        caption:'A clone of Whatsapp(MERN) ',
        description:'A clone of Whatsapp(MERN).',
        links:[
            {link:'https://github.com/durgesh0812/whatsappClient',icon:<GitHubIcon/>},
            {link:'https://mystifying-hypatia-cb315a.netlify.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'CLONE',
        image:amazon,
        title:'Amazon-Clone',
        caption:'A clone of Amazon ',
        description:'A full-stack Amazon clone.',
        links:[
            {link:'https://github.com/durgesh0812/amazon-clone',icon:<GitHubIcon/>},
            {link:'https://ecommerce-store-298d0.web.app/',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'API',
        image:jokes,
        title:'Random Jokes',
        caption:'App uses API to get Jokes',
        description:'App uses API to get Jokes.',
        links:[
            {link:'https://github.com/durgesh0812/random-jokes',icon:<GitHubIcon/>},
            {link:'https://inspiring-easley-3550a6.netlify.app/index.html',icon:<DeveloperModeIcon/>},
        ]
    },

    {
        tag:'API',
        image:hero,
        title:'Comicholic',
        caption:'App uses API to get comics',
        description:'App uses API to get comics.',
        links:[
            {link:'https://github.com/durgesh0812/superhero',icon:<GitHubIcon/>},
            {link:'https://heuristic-bohr-671656.netlify.app/index.html',icon:<DeveloperModeIcon/>},
        ]
    },
    
    
    ]
}