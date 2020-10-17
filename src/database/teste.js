const Database = require("./db")
const saveOrphanage = require("./saveOrphanage")

Database.then(async (db) => {

  // inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-23.695809",
  //   lng: "-46.5488786",
  //   name: "Lar dos meninos",
  //   about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "119524563216",
  //   images: [
  //     "https://images.unsplash.com/photo-1590009617975-ea0733d39167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //     "https://images.unsplash.com/photo-1590009617975-ea0733d39167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  //   ].toString(),
  //   instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visita Das 18h até 8h",
  //   open_on_weekends: "0",
  // })

  //consultar dados na tabela
  const orphanage = await db.all('SELECT * FROM orphanages')
  console.log(orphanage)

  //deletar dado da tabela
  // console.log(await db.run(`DELETE FROM orphanages`))
})

// async = torna função asincrona fazendo possivel o uso de await
// await = faz com que a execução espere a linha await finalizar para continuar a executar as linhas seguintes
