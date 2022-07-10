//import Telegraf  from "telegraf";
import { Composer } from "micro-bot";
import { Buns } from "./product.js";
import { Cake } from "./product.js";
import { Pizza } from "./product.js";
import { Bread } from "./product.js";
import { IceCream } from "./product.js";
import { PanCakes } from "./product.js";
import { Donut } from "./product.js";
const bot = new Composer();



const buns = new Buns();
const cake = new Cake();
const pizza = new Pizza();
const bread = new Bread();
const icecream = new IceCream();
const pancakes = new PanCakes();
const donut = new Donut();

let snacks = [
    buns,
    cake,
    pizza,
    bread,
    icecream,
    pancakes,
    donut
]

bot.start((ctx) => {
    ctx.reply("Welcome!!, Click any button below", 
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: "Snacks", callback_data: 'pay' }
                ],
                [
                    { text: "Cancel", callback_data: 'cancel' }
                ]
            ]
        }
    })
})

bot.action("pay", (ctx) => {
    for (var i = 0; i < snacks.length; i++) {
        snacks[i].chat_id = ctx.from.id;
        ctx.replyWithInvoice(snacks[i]);
    }
})

bot.action('cancel', ctx => {
    ctx.reply('Thank you for using this bot');
});

bot.on("pre_checkout_query", (ctx) => ctx.answerPreCheckoutQuery(true))
bot.on("successful_payment", async (ctx, next) => {
    await ctx.reply("Successful Payment")
})


module.exports = bot

//bot.launch();