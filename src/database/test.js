const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db,  {
        lat: "-27.2190475",
        lng: "-49.642766",
        name : "Recanto calmo",
        description: "Presta assitência a crianças de 06 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1587784002360-a7c35c090720?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions : "paz interior",
        opening_hours :"Horários de visitas Das 8h até as 18h",
        open_on_weekends: "1"
    },) 

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar apenas 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
})