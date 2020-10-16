const Database = require('./db');

Database.then(async (db) => {
    //inserir dados na tabela
    await db.run(`
       INSERT INTO orphanages (
           lat,
           lng,
           name,
           whatsapp,
           images,
           instructions,
           opening_hours,
           open_on_weekends
       ) VALUES (
        "-27.2190475",
        "-49.662766",
        "Lar dos meninos",
        "Presta assitência a crianças de 06 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "https://images.unsplash.com/photo-1587784002360-a7c35c090720?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "Venha como se sentir a vontade e traga muito amor e paciência pra dar",
        "Horários de visitas Das 8h até as 18h",
        "0"
       );
    `)

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})