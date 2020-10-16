const Database = require('./db');

Database.then(function(db) {
    //inserir dados na tabela
    db.run(`
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
        "-49.652766",
        "Lar das meninas",
        "Presta assitência a crianças de 06 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "https://images.unsplash.com/photo-1587784002360-a7c35c090720?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "Venha como se sentir a vontade e traga muito amor e paciência pra dar",
        "Horários de visitas Das 8h até as 18h",
        "1"
       );
    `)

    //consultar dados na tabela
})